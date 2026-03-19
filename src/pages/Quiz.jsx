import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, XCircle, AlertCircle, RefreshCcw, Trophy, Zap, Star, Clock, AlertTriangle, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ROADMAP_DATA_RAW } from '../data/roadmapData';
import { getQuestionsForLevel } from '../data/quizBank';
import confetti from 'canvas-confetti';
import config from '../config';

const Quiz = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const rawCourseId = searchParams.get('course') || 'default';
  const courseId = rawCourseId.toLowerCase();
  const { user, updateUser, updateUserLocally } = useAuth();

  // Stabilize questions per lesson to prevent stale state and ensure fresh shuffling on mount
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const levelQuestions = getQuestionsForLevel(courseId, lessonId);
    const shuffled = [...levelQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, Math.min(5, shuffled.length)));
    
    // Reset quiz state when moving to a new lesson
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setQuizState('answering');
    setSyncProgress(0);
  }, [lessonId, courseId]);

  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizState, setQuizState] = useState('answering');
  const [score, setScore] = useState(0);
  const [questionResults, setQuestionResults] = useState({});
  const [startTime] = useState(Date.now());
  const [xpEarned, setXpEarned] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0); // Progress for the waiting bar
  const [error, setError] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleOptionSelect = (index) => {
    if (quizState === 'answering') {
      setSelectedOption(index);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(s => s + 1);
    }
    
    setQuestionResults(prev => ({ ...prev, [currentQuestionIndex]: isCorrect }));
    setQuizState('checked');
  };

  const handleRetryWrong = () => {
    const missed = questions.filter((_, idx) => questionResults[idx] === false);
    if (missed.length === 0) return;
    
    setQuestions(missed);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setQuizState('answering');
    setQuestionResults({});
    setSyncProgress(0);
    setError(null);
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      await submitQuizResults();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setQuizState('answering');
    }
  };

  const submitQuizResults = async () => {
    setIsSubmitting(true);
    setError(null);
    setQuizState('syncing'); // Move to syncing state immediately
    
    // Animate sync progress bar
    const syncInterval = setInterval(() => {
      setSyncProgress(prev => {
        if (prev >= 90) return prev;
        return prev + 5;
      });
    }, 150);

    const timeTaken = Math.round((Date.now() - startTime) / 1000);
    const finalScore = Math.round((score / questions.length) * 100);

    try {
      const response = await fetch(`${config.API_URL}/api/quiz/submit`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          userEmail: user?.email,
          courseId,
          lessonId,
          score: finalScore,
          totalQuestions: questions.length,
          correctAnswers: score,
          timeTaken,
          totalSteps: ROADMAP_DATA_RAW[courseId]?.items?.length || 10
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit quiz');
      }

      const result = await response.json();
      
      // Complete bar
      setSyncProgress(100);
      clearInterval(syncInterval);
      
      if (result.success && result.user) {
        setXpEarned(result.xpEarned);
        
        // Update user state
        await updateUserLocally(result.user);

        // Success animation
        if (result.passed) {
          const oldLevel = Math.floor((user?.xp || 0) / 500) + 1;
          const newLevel = result.user.level || Math.floor((result.user.xp || 0) / 500) + 1;
          
          if (newLevel > oldLevel) {
            const duration = 4000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };
            const randomInRange = (min, max) => Math.random() * (max - min) + min;
            const interval = setInterval(function() {
              const timeLeft = animationEnd - Date.now();
              if (timeLeft <= 0) return clearInterval(interval);
              const particleCount = 40 * (timeLeft / duration);
              confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
              confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);
          } else {
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#EF4444', '#3B82F6', '#10B981']
            });
          }
          
          // Delay transition to results screen for animations to play
          setTimeout(() => {
            setQuizState('finished');
          }, 1200);
        } else {
          setQuizState('finished');
        }
      }
    } catch (err) {
      console.error('Failed to submit quiz:', err);
      setError('Could not save your results. Your progress may not be recorded.');
      clearInterval(syncInterval);
      setQuizState('finished');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getOptionStyles = (index) => {
    let styles = "w-full p-6 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between group relative overflow-hidden ";

    if (quizState === 'checked') {
      if (index === currentQuestion.correctAnswer) {
        return styles + "bg-[#10B981]/10 border-[#10B981] text-white";
      }
      if (index === selectedOption && index !== currentQuestion.correctAnswer) {
        return styles + "bg-[#EF4444]/10 border-[#EF4444] text-white";
      }
      return styles + "bg-[#1a1a1a] border-[#2D2D2D] opacity-50";
    } else {
      if (index === selectedOption) {
        return styles + "bg-[#3B82F6]/10 border-[#3B82F6] shadow-lg shadow-[#3B82F6]/20";
      }
      return styles + "bg-[#1a1a1a] border-[#2D2D2D] hover:border-[#333333] hover:bg-[#222]";
    }
  };

  // RENDER: SYNCING STATE
  if (quizState === 'syncing') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-md text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-[#EF4444]/20 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-[#EF4444] rounded-full border-t-transparent animate-spin"
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-10 h-10 text-[#EF4444] animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Syncing Progress</h2>
          <p className="text-[#9CA3AF] mb-10">We're updating your XP and uploading your roadmap changes. Hang tight!</p>
          
          <div className="relative h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden border border-[#2D2D2D]">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#EF4444] to-[#F97316] transition-all duration-300"
              style={{ width: `${syncProgress}%` }}
            ></div>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-[#444]">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Securing your achievements...</span>
          </div>
        </div>
      </div>
    );
  }

  // RENDER: FINISHED STATE
  if (quizState === 'finished') {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;
    
    // Level calculation for result display
    const totalXpNow = (user?.xp || 0) + xpEarned;
    const level = Math.floor(totalXpNow / 500) + 1;
    const xpInLevel = totalXpNow % 500;
    const levelProgress = (xpInLevel / 500) * 100;

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-[#1a1a1a] border border-[#2D2D2D] rounded-[32px] p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF4444]/5 blur-3xl"></div>
          
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-5xl shadow-xl relative z-10 ${
            passed 
              ? 'bg-gradient-to-br from-[#10B981] to-[#059669]' 
              : 'bg-gradient-to-br from-[#EF4444] to-[#DC2626]'
          }`}>
            {passed ? <Trophy className="w-12 h-12 text-white" /> : <RefreshCcw className="w-12 h-12 text-white" />}
          </div>
          
          <h2 className="text-4xl font-black mb-2 uppercase italic tracking-tighter">{passed ? 'Level Complete!' : 'Keep Practicing!'}</h2>
          <p className="text-[#9CA3AF] mb-8 font-medium">
            You scored <span className={passed ? "text-[#10B981] font-bold" : "text-[#EF4444] font-bold"}>{score}</span> out of {questions.length} questions correctly.
          </p>
          
          {/* XP & Level Status */}
          <div className="bg-[#0d0d0d] rounded-2xl p-6 mb-8 border border-[#2D2D2D] relative z-10">
             <div className="flex justify-between items-end mb-4">
                <div className="text-left">
                   <p className="text-[10px] font-black text-[#444] uppercase tracking-widest mb-1">Current Level</p>
                   <p className="text-2xl font-black italic">LVL {level}</p>
                </div>
                <div className="text-right">
                   {xpEarned > 0 && <span className="text-[#EF4444] font-black text-sm animate-bounce inline-block">+{xpEarned} XP</span>}
                </div>
             </div>
             <div className="h-3 w-full bg-[#111] rounded-full overflow-hidden border border-[#222]">
                <div 
                  className="h-full bg-[#EF4444] transition-all duration-1000 ease-out"
                  style={{ width: `${levelProgress}%` }}
                ></div>
             </div>
             <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mt-3">
                {500 - xpInLevel} XP to Next Level
             </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl p-4 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
              <p className="text-xs text-[#EF4444]">{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-3 relative z-10">
            {passed ? (
              <div className="space-y-4">
                <button 
                  onClick={() => navigate(`/learn/${courseId}`)}
                  className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-black py-4 rounded-2xl shadow-xl shadow-[#EF4444]/20 transition-all flex items-center justify-center gap-2"
                >
                  Continue Learning
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[#6B7280]">
                   <div className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">Redirecting to Roadmap...</span>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <button 
                    onClick={handleRetryWrong}
                    className="flex-1 bg-white hover:bg-gray-100 text-black font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCcw className="w-5 h-5 text-[#EF4444]" />
                    Try Again
                  </button>
                  <button 
                    onClick={() => navigate(`/learn-video/${lessonId}?course=${courseId}`)}
                    className="flex-1 bg-[#2D2D2D] hover:bg-[#333] text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Study Content
                  </button>
                </div>
                <button 
                  onClick={() => navigate(`/learn/${courseId}`)}
                  className="w-full bg-[#0d0d0d] border border-[#2D2D2D] hover:border-[#444] text-[#6B7280] hover:text-white font-black py-4 rounded-2xl transition-all"
                >
                  Back to Course
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // RENDER: LOADING STATE
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#EF4444]"></div>
      </div>
    );
  }

  // RENDER: QUIZ STATE
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Header & Progress */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#2D2D2D]">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-2 text-sm text-[#9CA3AF] font-bold uppercase tracking-wider">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#EF4444]" />
              {courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>
          <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#EF4444] to-[#F97316] transition-all duration-500 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Question Area */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-12 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-black text-center mb-12 leading-snug">
          {currentQuestion.question}
        </h1>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={quizState === 'checked'}
              className={getOptionStyles(index)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border ${
                  quizState === 'checked' && index === currentQuestion.correctAnswer
                    ? 'bg-[#10B981] border-[#10B981] text-white'
                    : index === selectedOption
                    ? 'bg-[#3B82F6] border-[#3B82F6] text-white'
                    : 'bg-[#0d0d0d] border-[#2D2D2D] text-[#6B7280]'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-lg font-medium">{option}</span>
              </div>
              
              {quizState === 'checked' && index === currentQuestion.correctAnswer && (
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
              )}
              {quizState === 'checked' && index === selectedOption && index !== currentQuestion.correctAnswer && (
                 <XCircle className="w-6 h-6 text-[#EF4444]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Footer / Explanation Area */}
      <div className={`fixed bottom-16 lg:bottom-0 left-0 right-0 z-40 border-t border-[#2D2D2D] p-6 transition-all duration-300 ${
        quizState === 'checked' 
          ? selectedOption === currentQuestion.correctAnswer 
            ? 'bg-[#064E3B] border-[#10B981]'
            : 'bg-[#450A0A] border-[#EF4444]'
          : 'bg-[#0a0a0a]'
      }`}>
        <div className="max-w-3xl mx-auto">
          {quizState === 'checked' && (
            <div className="mb-6 flex gap-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                selectedOption === currentQuestion.correctAnswer ? 'bg-white text-[#10B981]' : 'bg-white text-[#EF4444]'
              }`}>
                {selectedOption === currentQuestion.correctAnswer 
                  ? <CheckCircle className="w-6 h-6" /> 
                  : <AlertCircle className="w-6 h-6" />
                }
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h3>
                <p className="opacity-90">{currentQuestion.explanation}</p>
              </div>
            </div>
          )}
          
          <button 
            onClick={quizState === 'answering' ? handleCheckAnswer : handleNext}
            disabled={(quizState === 'answering' && selectedOption === null) || isSubmitting}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
              quizState === 'answering'
                ? selectedOption === null
                  ? 'bg-[#2D2D2D] text-[#6B7280] cursor-not-allowed'
                  : 'bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-[#EF4444]/25 hover:-translate-y-1'
                : selectedOption === currentQuestion.correctAnswer
                  ? 'bg-white text-[#10B981] hover:bg-gray-100'
                  : 'bg-white text-[#EF4444] hover:bg-gray-100'
            }`}
          >
            {isSubmitting ? (
              'Submitting...'
            ) : quizState === 'answering' ? (
              'Check Answer'
            ) : (
              isLastQuestion ? 'Finish Quiz' : 'Next Question'
            )}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Spacer for sticky footer */}
      <div className="h-48"></div> 
    </div>
  );
};

export default Quiz;

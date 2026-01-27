import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Send, User, ChevronDown, CheckCircle, Loader2, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import config from '../config';

const CourseReviews = ({ courseId }) => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userReview, setUserReview] = useState(null);
  const [error, setError] = useState(null);

  // Form State
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    fetchReviews();
    if (user) fetchUserReview();
  }, [courseId, user]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${config.API_URL}/api/course/${courseId}/reviews`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (err) {
      console.error('Fetch reviews error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserReview = async () => {
    try {
      const response = await fetch(`${config.API_URL}/api/course/${courseId}/review/${encodeURIComponent(user.email)}`);
      if (response.ok) {
        const data = await response.json();
        setUserReview(data);
      }
    } catch (err) {
      console.error('Fetch user review error:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${config.API_URL}/api/course/${courseId}/reviews`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          rating,
          comment,
          userName: user.name, // Still send these for immediate UI consistency
          userPicture: user.picture
        })
      });

      if (response.ok) {
        const data = await response.json();
        setUserReview(data);
        setReviews([data, ...reviews]);
        setComment('');
      } else {
        const errData = await response.json();
        console.error('Review submission failed:', errData);
        setError(errData.message || 'Failed to post review');
      }
    } catch (err) {
      console.error('Review submission error:', err);
      setError('Could not connect to server');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteReview = async (reviewEmail = user?.email) => {
    if (!reviewEmail) return;
    const isOwnReview = reviewEmail === user?.email;
    if (!window.confirm(isOwnReview ? 'Are you sure you want to delete your review?' : 'Delete this review? (Admin action)')) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch(`${config.API_URL}/api/course/${courseId}/review/${encodeURIComponent(reviewEmail)}`, {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${user.token}`
        }
      });

      if (response.ok) {
        if (isOwnReview) setUserReview(null);
        setReviews(reviews.filter(r => r.userEmail !== reviewEmail));
      } else {
        const errData = await response.json();
        setError(errData.message || 'Failed to delete review');
      }
    } catch (err) {
      setError('Could not connect to server');
    } finally {
      setIsSubmitting(false);
    }
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="space-y-12">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black uppercase italic tracking-tight mb-2">Student <span className="text-[#EF4444]">Reviews</span></h2>
          <p className="text-[#9CA3AF]">What other developers are saying about this course.</p>
        </div>
        
        {reviews.length > 0 && (
          <div className="flex items-center gap-6 bg-[#111] border border-[#222] p-6 rounded-3xl">
            <div className="text-center">
              <div className="text-4xl font-black mb-1">{averageRating}</div>
              <div className="flex items-center gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < Math.round(averageRating) ? "fill-[#EF4444] text-[#EF4444]" : "text-[#333]"} />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[#222]"></div>
            <div>
              <div className="text-xl font-bold">{reviews.length}</div>
              <div className="text-[10px] font-black text-[#444] uppercase tracking-widest">Total Reviews</div>
            </div>
          </div>
        )}
      </div>

      {/* Write a Review */}
      {user && !userReview && (
        <div className="bg-[#111] border border-[#222] rounded-[32px] p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#EF4444]" />
            Write a Review
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#444] uppercase tracking-widest mb-3">Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(s)}
                    className="transition-all hover:scale-110"
                  >
                    <Star 
                      size={32} 
                      className={`transition-colors ${
                        s <= (hoverRating || rating) 
                          ? "fill-[#EF4444] text-[#EF4444]" 
                          : "text-[#222]"
                      }`} 
                    />
                  </button>
                ))}
                <span className="ml-4 text-lg font-black italic text-[#444]">
                  {rating === 5 ? 'Excellent!' : rating === 4 ? 'Great' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor'}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#444] uppercase tracking-widest mb-3">Your Feedback</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={4}
                className="w-full bg-[#0a0a0a] border border-[#222] rounded-2xl p-5 text-white focus:outline-none focus:border-[#EF4444] transition-all resize-none font-medium"
                placeholder="Share your experience with this course..."
              />
            </div>

            {error && <p className="text-[#EF4444] text-sm font-bold">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-[#EF4444]/20 transition-all flex items-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Post Review</>}
            </button>
          </form>
        </div>
      )}

      {/* User Review (Already Posted) */}
      {userReview && (
        <div className="bg-[#111] border border-[#EF4444]/30 rounded-[32px] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <CheckCircle className="w-20 h-20 text-[#EF4444]" />
          </div>
          <div className="flex justify-between items-start gap-4 sticky z-10">
            <div>

              <p className="text-[10px] font-black text-[#EF4444] uppercase tracking-[0.3em] mb-4">Your Review</p>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < userReview.rating ? "fill-[#EF4444] text-[#EF4444]" : "text-[#222]"} />
                ))}
              </div>
              <p className="text-xl font-medium text-gray-200 leading-relaxed italic">"{userReview.comment}"</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => handleDeleteReview()}
                disabled={isSubmitting}
                className="p-3 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all border border-red-500/20 group"
                title="Delete Review"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
              </button>
              {error && <span className="text-[8px] font-bold text-red-500 uppercase tracking-tighter">Error</span>}
            </div>
          </div>
        </div>
      )}

      {/* All Reviews List */}
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#222]" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20 bg-[#0d0d0d] border border-dashed border-[#222] rounded-[32px]">
             <MessageSquare className="w-12 h-12 text-[#222] mx-auto mb-4" />
             <h3 className="font-bold text-gray-500 uppercase tracking-widest text-sm">No reviews yet</h3>
             <p className="text-xs text-gray-700 mt-1">Be the first to review this course!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.filter(r => r.userEmail !== user?.email).map((review) => (
              <div key={review._id} className="bg-[#0d0d0d] border border-[#222] p-8 rounded-[32px] hover:border-[#333] transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {review.userPicture ? (
                      <img src={review.userPicture} alt={review.userName} className="w-12 h-12 rounded-2xl object-cover border border-[#222]" />
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-[#111] flex items-center justify-center border border-[#222]">
                        <User className="w-6 h-6 text-[#222]" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-sm text-white">{review.userName}</h4>
                      <p className="text-[10px] text-[#444] font-black uppercase tracking-widest">{new Date(review.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < review.rating ? "fill-[#EF4444] text-[#EF4444]" : "text-[#222]"} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <p className="text-gray-400 font-medium leading-relaxed">"{review.comment}"</p>
                  {user?.role === 'admin' && (
                    <button
                      onClick={() => handleDeleteReview(review.userEmail)}
                      className="p-2 text-[#444] hover:text-red-500 transition-colors"
                      title="Admin: Delete Review"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseReviews;

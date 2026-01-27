import React from 'react';
import { useParams } from 'react-router-dom';
import LearningPathComponent from '../LearningPath';

const LearningPath = () => {
  const { courseId } = useParams();

  // You can fetch course-specific data based on courseId here
  // For now, we'll use the component we already created

  return <LearningPathComponent courseId={courseId} />;
};

export default LearningPath;

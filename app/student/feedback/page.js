'use client'

// components/FeedbackPage.js
import React, { useState } from 'react';

const AssignmentFeedback = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md mb-4">
      <div className="flex items-center justify-between mb-2 cursor-pointer">
        <h2
          className="text-xl font-semibold"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {title}
        </h2>
        <span
          className={`transition-transform duration-300 ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
        >
          &#9654; {/* Chevron right (U+25B6) */}
        </span>
      </div>
      {isExpanded && <p className="text-gray-600 mt-2">{content}</p>}
    </div>
  );
};

const FeedbackPage = () => {
  // Hardcoded list of previous feedbacks
  const previousFeedbacks = [
    { title: 'Assignment 1', content: 'Feedback details for assignment 1...' },
    { title: 'Assignment 2', content: 'Feedback details for assignment 2...' },
    { title: 'Assignment 3', content: 'Feedback details for assignment 3...' },
    { title: 'Assignment 4', content: 'Feedback details for assignment 4...' },
    { title: 'Assignment 5', content: 'Feedback details for assignment 5...' },
  ];

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-semibold mb-8">Feedback Page</h1>

      {/* List of Previous Assignment Feedbacks */}
      {previousFeedbacks.map((feedback, index) => (
        <AssignmentFeedback key={index} title={feedback.title} content={feedback.content} />
      ))}
    </div>
  );
};

export default FeedbackPage;

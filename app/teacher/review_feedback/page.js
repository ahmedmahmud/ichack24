import React from 'react';

const AssignmentFeedback = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const SubmitAssignmentPagePage = () => {
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
      <h1 className="text-3xl font-semibold mb-4">Feedback Page</h1>

      {/* List of Previous Assignment Feedbacks */}
      {previousFeedbacks.map((feedback, index) => (
        <AssignmentFeedback key={index} title={feedback.title} content={feedback.content} />
      ))}
    </div>
  );
};

export default SubmitAssignmentPage;
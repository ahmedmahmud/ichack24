// components/StudentPage.js
import React from 'react';

const StudentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-8">Student Dashboard</h1>

        {/* Assignment Submission Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-4">
          Submit Assignment
        </button>

        {/* Speech Practice Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mb-4">
          Speech Practice
        </button>

        {/* Feedback Page Button */}
        <a href="/student/feedback" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md">
          View Feedback
        </a>
      </div>
    </div>
  );
};

export default StudentPage;

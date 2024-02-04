// components/StudentPage.js
import React from 'react';

const StudentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-md shadow-md text-center max-w-md w-full mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Student Dashboard</h1>

        {/* File Input and Submit Assignment Button */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <input
            type="file"
            id="fileInput"
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
          >
            Choose File
          </label>
          <a href="/student/submit_assignment"
            type="button"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
          >
            Submit Assignment
          </a>
        </div>

        {/* Speech Practice Button */}
        <a href="/student/speech_practice"  className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md mb-4 w-full">
          Speech Practice
        </a>

        {/* Feedback Page Button */}
        <a href="/student/feedback" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md w-full inline-block">
          View Feedback
        </a>
      </div>
    </div>
  );
};

export default StudentPage;

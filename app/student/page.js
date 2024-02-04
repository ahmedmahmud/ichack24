// components/StudentPage.js
import React from 'react';

const StudentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-8">Student Dashboard</h1>

        {/* Assignment Submission Button */}
        <ul className="menu bg-base-200 w-56">
  <li><a href="/student/submit_assignment" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Submit Assignment</a></li>
  <li><a href="/student/speech_practice" className="bg-green-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md">Speech Practice</a></li>
  <li><a href="/student/feedback" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md"> View Feedback</a></li>
</ul>
      </div>
    </div>
  );
};

export default StudentPage;

// components/TeacherHome.js
import React from 'react';
import { Button } from 'daisyui';

const TeacherHome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-md shadow-md text-center max-w-md w-full mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Teacher Home</h1>

        {/* Button to Create Assignment */}
        <a href="/teacher/create_assignment" className="btn btn-primary mb-4">
          Create Assignment
        </a>

        {/* Button to Go to Dashboard */}
        <a href="/teacher/dashboard" className="btn btn-secondary">
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default TeacherHome;

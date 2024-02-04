// components/TeacherDashboard.js
import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="p-8">
      {/* Section: Previous Assignments */}
      <div className="card mb-4">
        <h2 className="text-2xl font-semibold mb-2">Previous Assignments</h2>
        {/* Content for Previous Assignments */}
        <div className="collapse mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Assignment 1
          </div>
          <div className="collapse-content">
            <p>Details and student submissions for Assignment 1...</p>
          </div>
        </div>
        <div className="collapse mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Assignment 2
          </div>
          <div className="collapse-content">
            <p>Details and student submissions for Assignment 2...</p>
          </div>
        </div>
        {/* Add more Collapse components for additional assignments */}
      </div>

      {/* Section: Student Submissions */}
      <div className="card mb-4">
        <h2 className="text-2xl font-semibold mb-2">Student Submissions</h2>
        {/* Content for Student Submissions */}
        <div className="collapse mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Student 1 Submission
          </div>
          <div className="collapse-content">
            <p>Details of Student 1's submission...</p>
          </div>
        </div>
        <div className="collapse mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Student 2 Submission
          </div>
          <div className="collapse-content">
            <p>Details of Student 2's submission...</p>
          </div>
        </div>
        {/* Add more Collapse components for additional submissions */}
      </div>

      {/* Section: General Feedback */}
      <div className="card mb-4">
        <h2 className="text-2xl font-semibold mb-2">General Feedback</h2>
        {/* Content for General Feedback */}
        <p>Feedback for the teacher based on all assignments...</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;

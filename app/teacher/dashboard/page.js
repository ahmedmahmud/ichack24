// components/TeacherDashboard.js
import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="p-8">
      {/* Section: Assignments */}
      <div className="card mb-4">
        <h2 className="text-2xl font-semibold mb-2">Teacher Dashboard</h2>

        {/* Assignment 1 */}
        <div className="collapse mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Assignment 1
          </div>
          <div className="collapse-content">

            {/* Student Submissions for Assignment 1 */}
            <div className="card mb-2">
              <h3 className="text-lg font-semibold mb-2">Student Submissions</h3>
              <div className="collapse mb-2">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium">
                  Student 1 Submission
                </div>
                <div className="collapse-content">
                  <p>Details of Student 1's submission for Assignment 1...</p>
                  <audio controls className="w-full mt-2">
                    <source src="path/to/audio-file.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
              <div className="collapse mb-2">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium">
                  Student 2 Submission
                </div>
                <div className="collapse-content">
                  <p>Details of Student 2's submission for Assignment 1...</p>
                  <audio controls className="w-full mt-2">
                    <source src="path/to/audio-file.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
              {/* Add more Collapse components for additional submissions */}
            </div>

            {/* General Feedback for Assignment 1 */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">General Feedback</h3>
              <p>General feedback for Assignment 1...</p>
            </div>

          </div>
        </div>

        {/* Assignment 2 */}
        <div className="collapse mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Assignment 2
          </div>
          <div className="collapse-content">

            {/* Student Submissions for Assignment 2 */}
            <div className="card mb-2">
              <h3 className="text-lg font-semibold mb-2">Student Submissions</h3>
              {/* ... Similar structure for student submissions */}
            </div>

            {/* General Feedback for Assignment 2 */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">General Feedback</h3>
              {/* ... General feedback content */}
            </div>

          </div>
        </div>

        {/* Add more Collapse components for additional assignments */}
      </div>
    </div>
  );
};

export default TeacherDashboard;

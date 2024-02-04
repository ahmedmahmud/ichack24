// components/TeacherHome.js
'use client'

import React, { useState } from 'react';
import { Button } from 'daisyui';

const TeacherDashboard = () => {

  const [selected, selectedIndex] = useState(-1)


  const assignments = [
    {}, {}, {}
  ]

  const setAss = (
    <div>
      <div>
        Set Assignment
      </div>
      <div>
      </div>
    </div>
  )


  return (
    <div className="p-8  text-white h-screen w-screen">
      {/* Section: Assignments */}
      <div className="card mb-4">

        
        <div className='flex flex-row w-full h-full'>
          <div className='basis-1/5 h-full flex flex-col gap-8'>
            <h2 className="text-4xl font-semibold mb-2">Teacher Dashboard</h2>
            <div className='text-xl font-medium bg-primary/10 border border-primary/40 p-5 rounded-lg cursor-pointer'>
              Set New Assignment <span className='text-2xl'>+</span>
            </div>
            <div className='h-[30rem] flex flex-col gap-8 overflow-auto'>
              {assignments.map((items, index) => (
                <div className='text-xl font-medium bg-primary/10 border border-primary/40 p-5 rounded-lg cursor-pointer'>
                  Assignment {index}
                </div>
              ))}
            </div>
          </div>
          <div className='basis-4/5 p-10 my-auto mx-auto'>
            <div className='border-2 border-primary/40  rounded-xl h-[40rem] w-[60rem] my-auto mx-auto flex flex-col items-center justify-center'>
                <div className='text-2xl font-bold'>
                  Create a new assignment
                </div>
                <div className='grid grid-cols-3 p-5'>
                  {}
                </div>
            </div>
          </div>

        </div>

        

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

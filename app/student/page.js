// components/StudentPage.js
'use client'
import React from 'react';

const StudentPage = () => {
  return (
    <div className='h-screen'>
      <nav className='mx-4'>
        <div className='mx-auto py-5 text-center text-4xl tracking-tighter text-white/80'>
          <p><span className='font-bold'>Professor</span> Phil</p>
        </div>
      </nav>
      <div className="flex flex-col max-w-md mx-auto text-white py-8">
        <h1 className="text-2xl font-semibold">Assignments</h1>
        <p className='mb-8 mt-2 text-md'>
          A list of verbal assignments set by your teacher for you to complete
        </p>
        <button className="card bg-base-100 shadow-xl border border-primary/40 text-left">
          <div className="card-body p-4">
            <h2 className="card-title">Assignment 1</h2>
            <p>Description</p>
          </div>
        </button>
        <div className="divider mt-10 mb-10">OR</div>
        <h1 className="text-2xl font-semibold">Free practice</h1>
        <p className='mb-8 mt-2 text-md'>
          Practice a conversation with a virtual teacher in your own comfort
        </p>
        <button className='btn btn-primary'>Speech Practice</button>
        {/* <div className="bg-gray-800 p-8 rounded-md shadow-md text-center max-w-md w-full mx-auto">

        <div className="join join-vertical">
          <a href="/student/speech_practice" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md w-full inline-block">
            Speech Practice
          </a>
          <a href="/student/feedback" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md w-full inline-block">
            View Feedback
          </a>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default StudentPage;

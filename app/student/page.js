// components/StudentPage.js
'use client'
import React from 'react';

const StudentPage = () => {
  return (
    <div className='h-screen'>
      <nav className='mx-4'>
        <div className='mx-auto py-5 text-center text-4xl tracking-tighter text-white/80'>
        <p><span className='font-bold'>Lingua</span>Link AI</p>
        </div>
      </nav>
      <div className="flex flex-col max-w-md mx-auto text-white py-8">
        <h1 className="text-2xl font-semibold">Assignments</h1>
        <p className='mb-8 mt-2 text-md'>
          A list of verbal assignments set by your teacher for you to complete
        </p>
        <a href="/student/speech_practice" className="card bg-primary/10 shadow-xl border border-primary/40 text-left hover:scale-105 transition-all">
          <div className="card-body p-4">
            <h2 className="card-title text-sm font-bold tracking-tighter">Assignment 1</h2>
            <p className='text-md tracking-tigher'>A Casual conversation with Conor Kiernan</p>
          </div>
        </a>
        <div className="divider mt-10 mb-10">OR</div>
        <h1 className="text-2xl font-semibold">Free practice</h1>
        <p className='mb-8 mt-2 text-md'>
          Practice a conversation with a virtual teacher in your own comfort
        </p>
        <a href="/student/speech_practice_free" className='btn btn-primary'>Speech Practice</a>
      </div>
    </div>
  );
};

export default StudentPage;

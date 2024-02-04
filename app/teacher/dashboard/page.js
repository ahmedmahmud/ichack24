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
      <nav className='mx-4'>
        <div className='mx-auto py-5 text-center text-4xl tracking-tighter text-white/80'>
          <p><span className='font-bold'>Professor</span> Phil</p>
        </div>
      </nav>
      <div className="flex flex-col max-w-2xl mx-auto text-white py-8">
        <div className="collapse mb-2 bg-primary/10 border border-primary/40">
          <input type="checkbox" />
          <div className="collapse-title ">
            <p className='font-bold tracking-tighter text-sm mb-2'>Assignment 1</p>
            <p className='text-md tracking-tigher'>A Casual conversation with Conor Kiernan</p>
          </div>

          <div className="collapse-content">
            <p className='text-sm text-tighter'>Here are the feedback reports for the students who have submitted the assignment</p>
            <div className="bg-primary/10  collapse mt-4">
              <input type="checkbox" />
              <div className="collapse-title text-md font-bold tracking-tighter">
                Student 1 Submission
              </div>
              <article className="collapse-content prose">
                <p>
                  <b>"Comment ca va?"</b> → Correct form: <b>"Comment ça va ?"</b><br />
                  The student should practice recognizing and applying accent marks correctly to enhance written communication skills.
                  Verb Conjugation:
                </p><p>
                  <b>"Je ne savons pas"</b> → Correct form: <b>"Je ne sais pas"</b><br />
                  The student needs reinforcement in conjugating verbs accurately, particularly in matching the subject with the appropriate verb form.
                  Subject-Verb Agreement and Tense:
                </p><p>

                  <b>"Comment tu va faire ce weekend"</b> → Correct form: <b>"Comment tu vas faire ce weekend"</b><br />
                  The errors indicate challenges with subject-verb agreement and tense formation. The student should focus on mastering verb conjugations and understanding verb tenses in context.
                  Spelling and Vocabulary:
                </p><p>

                  <b>"j'ai redard le tele"</b> → Correct form: <b>"J'ai regardé la télé"</b><br />
                  The mistakes suggest a need for improvement in spelling and vocabulary. Encourage the student to expand their vocabulary and pay attention to spelling rules.
                  By addressing these specific areas of weakness, the student can make significant progress in French language proficiency. Consider providing targeted exercises and additional practice opportunities to reinforce learning and facilitate improvement.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="divider mt-10 mb-10">OR</div>

        <div className="card bg-primary/10 shadow-xl border border-primary/40 text-left">
          <div className="card-body p-4">
            <h2 className="card-title text-md font-bold tracking-tighter">Create new assignment</h2>
            <div className='flex gap-2 mt-2'>
              <input type="text" placeholder="Assignment description..." className="input input-bordered w-full" />
              <button className='btn btn-primary'>Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

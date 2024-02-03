'use client'
// pages/_app.js



import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import { Button } from 'daisyui';
import './globals.css';

 function MyApp({ Component, pageProps }) {
    const [userType, setUserType] = useState('');
    useEffect(() => {
          const storedUserType = localStorage.getItem('userType');
          if (storedUserType) {
            setUserType(storedUserType);
          }
        }, []);
          const handleUserType = (type) => {
    setUserType(type);
    localStorage.setItem('userType', type);
          }
    return (
        <>
          <div className="user-type-buttons">
        <button onClick={() => handleUserType('teacher')} variant={userType === 'teacher' ? 'primary' : 'secondary'}>
          Teacher
        </button>
        <button onClick={() => handleUserType('student')} variant={userType === 'student' ? 'primary' : 'secondary'}>
          Student
        </button>
      </div>
      <Navbar userType={userType} />
      {/* <Component {...pageProps} /> */}
        </>
      );
    }
    

{/* <Navbar userType={userType} />
          <Component {...pageProps} /> */}
export default MyApp;

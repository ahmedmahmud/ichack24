'use client'
// components/Navbar.js
import React from 'react';
import Link from 'next/link'
import { Button } from 'daisyui';

const Navbar = ({ userType }) => {
  return (
    <nav>
      {userType === 'teacher' ? (
        <>
          <Link href="/teacher">
            <button>Teacher Home</button>
          </Link>
          {/* Add additional teacher-specific navigation items */}
        </>
      ) : (
        <>
          <Link href="/student">
            <button>Student Home</button>
          </Link>
          {/* Add additional student-specific navigation items */}
        </>
      )}
    </nav>
  );
};

export default Navbar;


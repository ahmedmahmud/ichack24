'use client'
import SpeechRecorder from './SpeechRecorder';
import React, { useState } from 'react';

const SpeechPracticePage = () => {
  const [timelineItems, setTimelineItems] = useState([]);

  // Function to add a new item to the timeline
  const addTimelineItem = () => {
    const newItem = {
      title: `Event ${timelineItems.length + 1}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date().toLocaleDateString(),
    };

    // Update the state with the new item
    setTimelineItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="join">
    <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
<div className="bg-white p-8 rounded-md shadow-md text-center">
<button onClick={addTimelineItem}>Speech Practice</button>
  <SpeechRecorder />
  <ul className="timeline timeline-vertical">
        {timelineItems.map((item, index) => (
          <li key={index}>
            <div className="timeline-start timeline-box">{item.title}</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">{item.description}</div>
            <div className="timeline-middle">{item.date}</div>
            <hr />
          </li>
        ))}
      </ul>
</div>
</div>
</div>
   

    </div>
  );
};

export default SpeechPracticePage;
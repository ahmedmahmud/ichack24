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
            <div className="timeline-middle">{item.description}</div>
            <div className="timeline-end timeline-box">{item.date}</div>
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
// components/StudentPage.js
import React from 'react';
import { Heading, Button, Card, Collapse } from 'daisyui';

const StudentPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-white">
        <Heading as="h2" size="2" className="text-3xl font-bold mb-6">
          Student Dashboard
        </Heading>

        {/* Student Actions */}
        <div className="my-4">
          <Button
            onClick={() => {
              // Logic for handling assignment upload
              console.log('Logic for handling assignment upload');
            }}
            color="purple"
            className="hover:bg-purple-600"
          >
            Upload Assignment
          </Button>
          <Button
            onClick={() => {
              // Logic for speech practice
              console.log('Logic for speech practice');
            }}
            color="indigo"
            className="hover:bg-indigo-600 ml-4"
          >
            Speech Practice
          </Button>
          <Button
            onClick={() => {
              // Logic for viewing feedback
              console.log('Logic for viewing feedback');
            }}
            color="green"
            className="hover:bg-green-600 ml-4"
          >
            View Feedback
          </Button>
        </div>

        {/* Card for displaying previous feedbacks */}
        <Card className="my-4">
          <Heading as="h3" size="3" className="text-lg font-bold mb-4">
            Previous Feedbacks
          </Heading>
          {/* Add collapsible sections for each feedback */}
          <Collapse label="Feedback 1" className="mb-2">
            <p>Feedback details for assignment 1...</p>
          </Collapse>
          <Collapse label="Feedback 2" className="mb-2">
            <p>Feedback details for assignment 2...</p>
          </Collapse>
          <Collapse label="Feedback 3" className="mb-2">
            <p>Feedback details for assignment 3...</p>
          </Collapse>
          <Collapse label="Feedback 4" className="mb-2">
            <p>Feedback details for assignment 4...</p>
          </Collapse>
          <Collapse label="Feedback 5" className="mb-2">
            <p>Feedback details for assignment 5...</p>
          </Collapse>
          {/* Add more collapsible sections for additional feedbacks */}
        </Card>
      </div>
    </div>
  );
};

export default StudentPage;

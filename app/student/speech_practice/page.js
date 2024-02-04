'use client'
import SpeechRecorder from './SpeechRecorder';

const SpeechPracticePage = () => {
  return (
    <div className="join">
    <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
<div className="bg-white p-8 rounded-md shadow-md text-center">
  <h1 className="text-3xl font-semibold mb-8">Speech Practice</h1>
  <SpeechRecorder />
</div>
</div>
    </div>
    </div>
  );
};

export default SpeechPracticePage;
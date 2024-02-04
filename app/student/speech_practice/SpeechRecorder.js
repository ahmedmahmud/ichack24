'use client'
import { useState, useEffect } from 'react';

const SpeechRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => {
    if (recording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [recording]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const newMediaRecorder = new MediaRecorder(stream);

        newMediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            setAudioChunks((prevChunks) => [...prevChunks, e.data]);
          }
        };

        setMediaRecorder(newMediaRecorder);
        newMediaRecorder.start();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      // Stop the recording
      // This will trigger the 'ondataavailable' event of the MediaRecorder
      mediaRecorder.stop();

      // Convert audio chunks to Blob
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

      // Create a FormData object to send as a POST request
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recorded_audio.wav');

      // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend endpoint
      // Make sure its properly configurred 
      const backendEndpoint = 'http://your-backend-api/endpoint';

      // Send the POST request to the backend
      fetch(backendEndpoint, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from backend:', data);
        })
        .catch(error => {
          console.error('Error sending audio to backend:', error);
        });

      setAudioChunks([]);
    }
  };

  return (
    <div>
      <button onClick={() => setRecording(!recording)}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

export default SpeechRecorder;

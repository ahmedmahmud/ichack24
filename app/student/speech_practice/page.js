"use client";
import React, { useState, useEffect , useRef} from "react";

const conversation = [
  {
    speaker: "Bot",
    Text: "Bonjour! Comment puis-je vous aider aujourd'hui?",
  },
  {
    speaker: "User",
    Text: "Comment ca va?",
  },
  {
    speaker: "Bot",
    Text: "Ça va bien, merci! Et vous, comment allez-vous?",
  },
  {
    speaker: "User",
    Text: "Je ne savons pas",
  },
  {
    speaker: "Bot",
    Text: "Je ne sais pas*",
  },
  {
    speaker: "User",
    Text: "Comment tu va faire ce weekend",
  },
  {
    speaker: "Bot",
    Text: "Je suis un programme informatique, donc je n'ai pas de plans pour le weekend! Mais je suis là pour vous aider avec tout ce dont vous avez besoin. Et vous, quels sont vos projets pour le weekend?",
  },
  {
    speaker: "User",
    Text: "j'ai redard le tele",
  },
  {
    speaker: "Bot",
    Text: "Je pense que vous vouliez dire 'j'ai regardé la télé' (I watched TV). C'est bien de se détendre et regarder la télévision pendant le weekend! Avez-vous regardé quelque chose d'intéressant?",
  },
  {
    speaker: "User",
    Text: "Can u repeat that in english i dont understand",
  },
  {
    speaker: "Bot",
    Text: "Of course! I was asking if you watched something interesting on TV over the weekend. It's a nice way to relax and unwind.",
  },
];

const SpeechPracticePage = () => {
  const [timelineItems, setTimelineItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [btnMessage, setBtnMessage] = useState("Start Recording");
  const [loading, setLoading] = useState(false);
  const [playVideo , setPlayVideo] = useState(true);
  const videoRef = useRef(null);
  // Function to add a new item to the timeline
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSetCounter= () => {

    if(btnMessage === "Start Recording") {
      setBtnMessage("Stop Recording");
      setCounter( counter + 1);
      // setPlayVideo(false);
      togglePlayPause()
    } else {
      setBtnMessage("Start Recording");
      setCounter( counter + 1);
      // setPlayVideo(true);##
      togglePlayPause()

    }

  };

  useEffect(() => {
    // Update timelineItems when counter changes
    // Add your logic here to update timelineItems based on counter
    // For example, you can fetch data from an API or manipulate the existing conversation data

    // Dummy logic to demonstrate the effect
    if(typeof window !== 'undefined') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        const updatedItems = conversation.slice(0, counter + 1);
        setTimelineItems(updatedItems);
      }, 1000);
    }
  }, [counter]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#121212]">
      <div className="bg-white rounded-lg p-6 w-[600px]">
        {/* <button  onClick={() => handleSetCounter()} >goo</button> */}
        <button className="btn	btn-primary mb-4" onClick={() => handleSetCounter()}>{btnMessage}</button>
        {/* {counter} */}
        {/* <SpeechRecorder  onClick={() => handleSetCounter()} /> */}
        <div className="space-y-4 mb-4"> </div>

        {timelineItems.map((item, index) => (
          <div key={index}
            className={`chat ${
              item.speaker === "Bot" ? "chat-end" : "chat-start"
            }`}
          >


            <div className={`chat-bubble ${
              item.speaker === "Bot" ? " chat-bubble-primary" : " chat-bubble-secondary"
            }`}>{item.Text}</div>
          </div>
        ))}
        {loading && <span className="loading loading-spinner loading-xs"></span>}

      </div>
      <div className="mx-24 bg-white rounded-lg p-6 w-[600px]">
          {/* <video autoPlay loop className="w-full h-full object-cover">
            <source src="/1.mp4" type="video/mp4" />
          </video> */}
          { playVideo && (<Clip i={counter}  videoRef={videoRef} />)}
        </div>
    </div>
  );
};



function Clip({ i, videoRef }) {
  return (
    <video ref={videoRef} controls autoPlay  className="w-full h-full object-cover"  key={i}>
      <source src={`/${Math.floor(i/2)}.mp4`} type="video/mp4" />
    </video>
  );
}
export default SpeechPracticePage;

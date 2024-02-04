// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DaisyUINavbar from './components/DaisyUINavbar';
import Home from './pages/Home'; // Import your Home component
import Syllabus from './pages/Syllabus'; // Import your Syllabus component
import ReviewFeedback from './pages/ReviewFeedback'; // Import your ReviewFeedback component

function App() {
  return (
    <Router>
      <div className="App">
        <DaisyUINavbar />
        <Routes>
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/review-feedback" component={ReviewFeedback} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

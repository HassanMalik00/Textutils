
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2c3e50'; // Dark mode background
      showAlert("Dark mode is enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background
      showAlert("Light mode is enabled", "Success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <Router>
      <Navbar Title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className={`container my-3 ${mode}`}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



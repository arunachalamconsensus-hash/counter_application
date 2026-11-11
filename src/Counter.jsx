// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from "react";
import "./Counter.css";

export default function Counter() {
   // Counter State
  const [count, setCount] = useState(0);

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Increment Function
  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  // Decrement Function
  const handleDecrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  // Reset Function
  const handleReset = () => {
    setCount(0);
  };

  // Theme Toggle Function
  const handleThemeToggle = () => {
    setIsDarkMode((previousTheme) => !previousTheme);
  };

  return (
    <div className={`counter-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>

      <div className="counter-card">

        {/* Header Section */}

        <div className="header-section">

          <div>
            <p className="subtitle">REACT USESTATE PROJECT</p>
            <h1>Counter Application</h1>
          </div>

          <button
            className="theme-btn"
            onClick={handleThemeToggle}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

        </div>

        {/* Theme Status */}

        <div className="theme-status">
          Current Theme:
          <span>{isDarkMode ? " Dark Mode" : " Light Mode"}</span>
        </div>

        {/* Counter Display */}

        <div className="counter-display">

          <p>Current Count</p>

          <h2>{count}</h2>

          <span className="counter-message">
            {count === 0
              ? "Ready to Start!"
              : count > 0
              ? "Positive Count"
              : "Negative Count"}
          </span>

        </div>

        {/* Counter Buttons */}

        <div className="button-container">

          <button
            className="increment-btn"
            onClick={handleIncrement}
          >
            + Increment
          </button>

          <button
            className="decrement-btn"
            onClick={handleDecrement}
          >
            − Decrement
          </button>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            ↻ Reset
          </button>

        </div>

        {/* Information Section */}

        <div className="info-section">

          <div className="info-box">
            <span>Current Value</span>
            <h3>{count}</h3>
          </div>

          <div className="info-box">
            <span>Theme Mode</span>
            <h3>{isDarkMode ? "Dark" : "Light"}</h3>
          </div>

        </div>

        {/* Footer */}

        <p className="footer-text">
          Built with React useState Hook
        </p>

      </div>

    </div>
  )
}

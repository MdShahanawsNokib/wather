// Importing required libraries and components
import React from "react";
import CurrentLocation from "./currentLocation"; // This is your main weather component
import "./App.css"; // This includes your styling

// Main App Component
function App() {
  return (
    <>
      {/* Main container for weather display */}
      <div className="container">
        <CurrentLocation />
      </div>

      {/* Footer section with useful links */}
      <div className="footer-info">

      </div>
    </>
  );
}

export default App;

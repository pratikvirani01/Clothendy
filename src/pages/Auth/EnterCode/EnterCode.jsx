import React from "react";
import "./EnterCode.css";

const EnterCode = () => {
  return (
    <div className="EnterCode-container">
      <div className="EnterCode-card">
        <div className="logoContainer">
          <img src="/logo.png" alt="Logo" className="EnterCode-logo" />
        </div>
        <h2>Sign in</h2>
        <p>Enter your email and we'll send you a verification code</p>
        <input type="email" placeholder="Email" className="EnterCode-input" />
        <button className="EnterCode-button">Continue</button>
        <div className="EnterCode-footer">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default EnterCode;

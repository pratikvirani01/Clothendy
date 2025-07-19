import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom"; 

const SignIn = () => {
  const navigate = useNavigate();
  
  const handleContinue = () => {
    // You can also validate email before navigating
    navigate("/EnterCode");
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="logoContainer">
          <img src="/logo.png" alt="Logo" className="signin-logo" />
        </div>
        <h2>Sign in</h2>
        <p>Enter your email and we'll send you a verification code</p>
        <input type="email" placeholder="Email" className="signin-input" />
        <button className="signin-button" onClick={handleContinue}>
          Continue
        </button>
        <div className="signin-footer">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

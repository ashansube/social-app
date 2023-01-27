import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mycard">
    <div className="signup-card">
      <div className="card auth-card">
        <h4 className="cardheader-signup">Sign Up</h4>
        <div className="signupcard-inputs">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="User Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn primary-button">
          SignUp
        </button>
        <h6><Link to="/signin">Already have an account?</Link></h6>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Signup;

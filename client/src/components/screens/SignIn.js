import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mycard">
    <div className="container">
      <div className="card auth-card">
        <div className="row">
        <div className="col s6">
        <h4 className="cardheader">Sign In</h4>
        <div className="logincard-inputs">
        <input className="signin-up-input" type="email" placeholder="Email" />
        <input className="signin-up-input" type="password" placeholder="Password" />
        <button className="btn primary-button">
          SignIn
        </button>
        <h6><Link to="/signup">Don't have an account?</Link></h6>
        </div>
        </div>
        <div className="col s6 logincard-right">
            <div className="logincard-right-text">
            <h4>Surge SE Internship</h4>
            <h5>March 2023</h5>
            <p>Ashan Subawickrama</p>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;

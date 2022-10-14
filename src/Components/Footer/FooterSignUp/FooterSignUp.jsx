import React from "react";
import "./FooterSignUp.sass";

const FooterSignUp = () => {
  return (
    <div className="FooterSignUp">
      <div className="FooterSignUpLeft">
        <h2 className="FooterSignUpLeft-title">Sign Up To Our Newsletter.</h2>
        <p className="FooterSignUpLeft-text">
          Be the first to hear about the latest offers.
        </p>
      </div>
      <div className="FooterSignUpRight">
        <input
          className="FooterSignUpRight-input"
          placeholder="Your Email"
        ></input>
        
          <button className="FooterSignUpRight-button"><a href="google.com">Subscribe</a></button>
        
      </div>
    </div>
  );
};

export default FooterSignUp;

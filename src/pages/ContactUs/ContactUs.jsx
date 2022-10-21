import { useState } from "react";
import UniversalButton from "../../Components/UniversalButton/UniversalButton";
import { Mail, Phone, Place, Time } from "../PagesImages/ContactUsImg";
import "./ContactUs.sass";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="ContactUsMain">
        <div className="ContactUsMainWay">Home › Contact Us</div>
        <h2 className="ContactUsMainTitle">Contact Us</h2>
        <p className="ContactUsMainText">
          We love hearing from you, our Shop customers. Please contact us and we
          will make sure to get back to you as soon as we possibly can.
        </p>
        <div className="ContactUsMainInputs">
          <div className="InputName">
            <h3>Your Name *</h3>
            <input className="Input" placeholder="Your Name"></input>
          </div>
          <div className="InputEmail">
            <h3>Your Email *</h3>
            <input className="Input" placeholder="Your Email"></input>
          </div>
          <div className="InputPhone">
            <h3>Your Email *</h3>
            <input className="Input" placeholder="Your Phone"></input>
          </div>
        </div>
        <div className="BigInputContainer">
          <h3>What’s on your mind? *</h3>
          <input
            className="BigInput"
            placeholder="Jot us a note and we’ll get back to you as quickly as possible"
          ></input>
        </div>
        <UniversalButton text="Submit" />
      </div>
      <div className="ContactUsInfo">
        <div className="ContactUsInfoItem">
          {Place}
          <p className="InfoItemText">
            <h4>Address:</h4>
            <span>1234 Street Adress City Address, 1234</span>
          </p>
        </div>
        <div className="ContactUsInfoItem">
          {Phone}
          <p className="InfoItemText">
            <h4>Phone:</h4>
            <span>(00)1234 5678</span>
          </p>
        </div>
        <div className="ContactUsInfoItem">
          {Time}
          <p className="InfoItemText">
            <h4>We are open:</h4>
            <p>Monday - Thursday: 9:00 AM - 5:30 PM</p>
            <p>Friday 9:00 AM - 6:00 PM</p>
            <p>Saturday: 11:00 AM - 5:00 PM</p>
          </p>
        </div>
        <div className="ContactUsInfoItem">
          {Mail}
          <p className="InfoItemText">
            <h4>E-mail:</h4>
            <span>
              <a href="mailto:shop@email.com">shop@email.com</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

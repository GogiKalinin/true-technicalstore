import React from "react";
import {
  AmericanExpressImage,
  DiscoverImage,
  FacebookIcon,
  InstaIcon,
  MastercardImage,
  PayPalImage,
  VisaImage,
} from "../../../Images/Footer";
import "./FooterEnd.sass";

const FooterEnd = () => {
  return (
    <div className="FooterEnd">
      <div className="FooterEndSocial">
        <a href="google.com">
          <div className="FooterEndSocial-fb">{FacebookIcon}</div>
        </a>
        <a href="google.com">
          <div className="FooterEndSocial-insta">{InstaIcon}</div>
        </a>
      </div>
      <div className="FooterEndBankPay">
        <a href="google.com">
          <div className="FooterEndBankPay-item">{PayPalImage}</div>
        </a>
        <a href="google.com">
          <div className="FooterEndBankPay-item">{VisaImage}</div>
        </a>
        <a href="google.com">
          <div className="FooterEndBankPay-item">{MastercardImage}</div>
        </a>
        <a href="google.com">
          <div className="FooterEndBankPay-item">{DiscoverImage}</div>
        </a>
        <a href="google.com">
          <div className="FooterEndBankPay-item">{AmericanExpressImage}</div>
        </a>
      </div>
      <div className="FooterEndAuthor">
        <span className="FooterEndAuthor-text">
          <span>Copyright © 2020 </span>
          <a href="google.com">Shop Pty. Ltd.</a>
        </span>
      </div>
    </div>
  );
};

export default FooterEnd;

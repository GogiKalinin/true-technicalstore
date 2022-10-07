import React from "react";
import "./Footer.sass";
import FooterSignUp from "./FooterSignUp/FooterSignUp";
import FooterNavig from "./FooterNavig/FooterNavig";
import FooterEnd from "./FooterEnd/FooterEnd";
// import PreFooter from "./PreFooter/PreFooter";

const Footer = () => {
  return (
    <div className="Footer">
      {/* <PreFooter /> */}
      <FooterSignUp />
      <FooterNavig />
      <FooterEnd />
    </div>
  );
};

export default Footer;

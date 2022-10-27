import React from "react";
import "./Footer.sass";
import FooterSignUp from "./FooterSignUp/FooterSignUp";
import FooterNavig from "./FooterNavig/FooterNavig";
import FooterEnd from "./FooterEnd/FooterEnd";
import PreFooter from "../PreFooter/PreFooter";
// import PreFooter from "./PreFooter/PreFooter";

const Footer = (setChangePage) => {
  return (
    <div className="Footer">
      <FooterSignUp />
      <FooterNavig setChangePage={setChangePage} />
      <FooterEnd />
    </div>
  );
};

export default Footer;

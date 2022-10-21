import React from "react";
import "./Inform.sass";
import { FacebookIcon, InstaIcon } from "../../Images/Footer/";
import { TabletLogo } from "../../TabletImages/TabletHeader/Logo";

const Inform = (props) => {
  const ChangeThemeOnContactUs = () => {
    props.setChangePage("ContactUs");
  };

  return (
    <>
      <div className="Inform">
        <div className="Inform__worktime">
          <p>Mon-Thu: </p>
          <time>9:00 AM - 5:30 PM</time>
        </div>
        <address className="Inform__adress">
          <p>Visit our showroom in 1234 Street Adress City Address, 1234 </p>
          <div className="ContactUsInform" onClick={ChangeThemeOnContactUs}>
            Contact Us
          </div>
        </address>
        <div className="Inform__media">
          <p className="Inform__media-call">
            Call us:
            <a href="tel:00 1234 5678"> (00) 1234 5678</a>
          </p>
          <a className="Inform__media-fb" href="google.com">
            <div>{FacebookIcon}</div>
          </a>
          <a className="Inform__media-insta" href="google.com">
            <div>
              <div>{InstaIcon}</div>
            </div>
          </a>
        </div>
      </div>
      <div className="TabletInform">
        <div className="InformTabletLogo">{TabletLogo}</div>
        <div className="TabletWorkTime">
          <p>Mon-Thu: </p>
          <time>9:00 AM - 5:30 PM</time>
        </div>
        <div className="TabletContactUs" onClick={ChangeThemeOnContactUs}>
          Contact Us
        </div>
      </div>
    </>
  );
};
export default Inform;

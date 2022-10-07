import React from "react";
import {
  AccountImage,
  SavingImage,
  SupportImage,
} from "../../Images/Footer/PreFooterImages/PreFooterImg";
import "./PreFooter.sass";

const PreFooter = () => {
  return (
    <div className="PreFooter">
      <div className="PreFooterItem">
        <div className="ItemImageContainer">{SupportImage}</div>
        <h3 className="ItemTitle">Product Support</h3>
        <p className="ItemText">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>
      <div className="PreFooterItem">
        <div className="ItemImageContainer">{AccountImage}</div>
        <h3 className="ItemTitle">Personal Account</h3>
        <p className="ItemText">
          With big discounts, free delivery and a dedicated support specialist.
        </p>
      </div>
      <div className="PreFooterItem">
        <div className="ItemImageContainer">{SavingImage}</div>
        <h3 className="ItemTitle">Amazing Savings</h3>
        <p className="ItemText">
          Up to 70% off new Products, you can be sure of the best price.
        </p>
      </div>
    </div>
  );
};

export default PreFooter;

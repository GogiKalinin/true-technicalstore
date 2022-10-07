import React from "react";
import { InstaIcon } from "../../Images/Header";
import { QuoteImage } from "../../Images/Quote/index.js";
import "./Quote.sass";

const Quote = () => {
  return (
    <div className="Quote">
      <div className="QuoteMainContainer">
        {QuoteImage}
        <blockquote className="QuoteBlockquote">
          My first order arrived today in perfect condition. From the time I
          sent a question about the item to making the purchase, to the shipping
          and now the delivery, your company, Tecs, has stayed in touch. Such
          great service. I look forward to shopping on your site in the future
          and would highly recommend it.
        </blockquote>
      </div>
      <p className="QuoteP">- Tama Brown</p>
      <div className="QuoteNavigationContainer">
        <a className="QuoteA" href="google.com">
          <button className="QuoteButton">Leave Us A Review</button>
        </a>
      </div>
    </div>
  );
};

export default Quote;

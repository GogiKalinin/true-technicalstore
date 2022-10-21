import { useState } from "react";
import "./AboutUs.sass";
import Image1 from "../PagesImages/AboutUs/Image1.png";
import Image2 from "../PagesImages/AboutUs/Image2.png";
import Image3 from "../PagesImages/AboutUs/Image3.png";
import Image4 from "../PagesImages/AboutUs/Image4.png";
import Image5 from "../PagesImages/AboutUs/Image5.png";

const AboutUs = () => {
  const AboutUsArray = [
    {
      id: 0,
      title: "A Family That Keeps On Growing",
      text: "We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.",
      image: Image1,
    },
    {
      id: 1,
      title: "shop.com",
      text: "Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.",
      image: Image2,
    },
    {
      id: 2,
      title: "You're In Safe Hands",
      text: "Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.*Performance compared to i7-9700. Specs varies by model.",
      image: Image3,
    },
    {
      id: 3,
      title: "The Highest Quality of Products",
      text: "We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.",
      image: Image4,
    },
    {
      id: 4,
      title: "Delivery to All Regions",
      text: "We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.",
      image: Image5,
    },
  ];

  const [reversItem, setReverseItem] = useState(true);

  return (
    <div className="AboutUs">
      <div className="AboutUsItems">
        {AboutUsArray.map((about) => {
          return (
            <>
              {/* <div className="AboutUsItem" key={about.id}> */}
              <div className="AboutUsItem" key={about.id}>
                <div className="AboutUsItemImage">
                  <img src={about.image} alt=""></img>
                </div>
                <div className="AboutUsItemTextSide">
                  <div className="AboutUsItemTitle">{about.title}</div>
                  <div className="AboutUsItemText">{about.text}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;

import { useState } from "react";
import "./MyBannerSlider.sass";
import Image1 from "../../Images/MyBannerSlider/image1.png";
import Image2 from "../../Images/MyBannerSlider/image2.png";
import Image3 from "../../Images/MyBannerSlider/image3.png";
import Image4 from "../../Images/MyBannerSlider/image4.png";
import Image5 from "../../Images/MyBannerSlider/image5.png";

import { NewArrow } from "../../Images/MyBannerSlider/MyBannerSlider";

const MyBannerSlider = () => {
  const bannerImages = [Image1, Image2, Image3, Image4, Image5];
  // console.log(bannerImages)
  const [currentImage, setCurrentImage] = useState(bannerImages[0]);

  const func = () => {
    return bannerImages.length - 1;
  };

  const prev = () => {
    const currentImageIndex = bannerImages.indexOf(currentImage);
    if (currentImageIndex > 0) {
      setCurrentImage(bannerImages[currentImageIndex - 1]);
    } else {
      setCurrentImage(bannerImages[func()]);
    }
  };

  const next = () => {
    const currentImageIndex = bannerImages.indexOf(currentImage);
    if (currentImageIndex === bannerImages.length - 1) {
      setCurrentImage(bannerImages[0]);
    } else {
      setCurrentImage(bannerImages[currentImageIndex + 1]);
    }
  };

  return (
    <>
      <div
        className="MyBannerSlider"
        style={{
          backgroundImage: "url(" + currentImage + ")",
          // background: `url(${currentImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // transitionDuration: "200ms",
          // transitionProperty: true
        }}
      >
        <button className="SliderButtonPrev" onClick={prev}>
          {NewArrow}
        </button>
        <button className="SliderButtonNext" onClick={next}>
          {NewArrow}
        </button>
      </div>
    </>
  );
};

export default MyBannerSlider;

import React from "react";
import "./BannerSlider.sass";
import SimpleImageSlider from "react-simple-image-slider";
import Banner1 from "../../Images/Banner/banner1.png";
import Banner2 from "../../Images/Banner/banner2.png";

const BannerSlider = () => {
  const images = [{ url: Banner1 }, { url: Banner2 }];
  // console.warn("rerender");
  return (
    <div className="SimpleImageSliderContainer">
      <SimpleImageSlider
        width={"1070px"}
        height={350}
        images={images}
        showNavs={true}
        autoPlay={true}
        slideDuration={2}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default BannerSlider;

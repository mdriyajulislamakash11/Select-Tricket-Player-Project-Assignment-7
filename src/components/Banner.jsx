import React from "react";
import BannerProfile from "../assets/Images/banner-main.png";
import BannerBg from "../assets/Images/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className="hero h-[500px] }"
      style={{
        borderRadius: "30px",
        backgroundColor: "#000", 
        backgroundImage: `url(${BannerBg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <img className="mx-auto mb-6" src={BannerProfile} alt="" />
          <h1 className="mb-5 text-5xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5">Beyond Boundaries Beyond Limits</p>
          <button className="btn btn-primary mr-2">
          Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import ImageCarousel from "./ImageCarousel";

const ScreenShots: React.FC = () => {
  return (
    <div
      id="screenshot-container"
      className="realtive w-[100%] ml-[40%] m-3  bg-custom-dark text-white rounded-lg"
    >
      <div className="h-auto w-auto ">
        <div className="px-6 py-2">Screenshots</div>
        <hr />
        <div id="ImageCarousel" className="h-[45vh] w-auto">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default ScreenShots;

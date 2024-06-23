import React from "react";
import ImageCarousel from "./ImageCarousel";

const ScreenShots: React.FC = () => {
  return (
    <div
      id="screenshot-container"
      className="realtive w-[800px] ml-[400px] m-1 bg-custom-dark text-white rounded-lg"
    >
      <div className="h-[400px] w-[800px]">
        <div className="px-6 py-2">Screenshots</div>
        <hr />
        <div id="ImageCarousel" className="h-[350px]">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default ScreenShots;

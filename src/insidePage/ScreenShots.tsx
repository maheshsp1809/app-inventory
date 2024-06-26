import React from "react";
import ImageCarousel from "./ImageCarousel";

const ScreenShots: React.FC = () => {
  return (
    <div id="screenshot-container" className="realtive m-1  bg-custom-dark text-white rounded-lg">

      <div className="px-6 py-2">Screenshots</div>
      <hr />
      <div id="ImageCarousel" className="h-[45vh] w-fit p-2">
        <ImageCarousel />
      </div>

    </div>
  );
};

export default ScreenShots;

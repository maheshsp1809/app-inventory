import React from "react";
import ImageCarousel from "./ImageCarousel";

interface ScreenShotsProps {
  screenshots: string[];
}

const ScreenShots: React.FC<ScreenShotsProps> = ({ screenshots }) => {
  return (
    <div
      id="screenshot-container"
      className="relative m-1 bg-custom-dark text-white rounded-lg"
    >
      <div className="px-6 py-2">Screenshots</div>
      <hr />
      <div id="ImageCarousel" className="h-[45vh] w-fit p-2">
        <ImageCarousel screenshots={screenshots} />
      </div>
    </div>
  );
};

export default ScreenShots;

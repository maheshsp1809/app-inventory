import React from "react";
import ImageCarousel from "./ImageCarousel";

const ScreenShots: React.FC = () => {
  return (
    <div className="relative ml-[390px] m-1 bg-custom-dark text-white rounded-lg">
      <div className="h-[400px] w-[73vw]">
        <div className="px-6 py-2">Screenshots</div>
        <hr />
        <div className="h-[350px]">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default ScreenShots;

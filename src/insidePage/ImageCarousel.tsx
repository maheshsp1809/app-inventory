import React from "react";
import Carouseli from "./Carouseli";

interface ImageCarouselProps {
  screenshots: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ screenshots }) => {
  return (
    <div className="h-full">
      <Carouseli slides={screenshots} />
    </div>
  );
};

export default ImageCarousel;

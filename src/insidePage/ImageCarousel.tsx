import React from "react";
import Carouseli from "./Carouseli";

const ImageCarousel: React.FC = () => {
  const slides: string[] = ["/image3.png", "/image2.png", "/image3.png"];

  return (
    <div className="h-full">
      <Carouseli slides={slides} />
    </div>
  );
};

export default ImageCarousel;

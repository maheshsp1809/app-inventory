// src/components/ImageCarousel.js
import React from "react";
import Carousel from "./Carousel";

function ImageCarousel() {
  const slides = ["/image3.png", "/image2.png", "/image3.png"];

  return (
    <div className="relative ml-4">
      <div className="w-1185 h-473">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default ImageCarousel;

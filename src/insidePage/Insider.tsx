import React from "react";
import Sidebar from "./Sidebar";
import ScreenShotes from "./ScreenShots";
import Description from "./Description";
import RatingsAndReviews from "./RatingsAndReviews";

const Insider = () => {
  return (
    // <div className="flex flex-col ml-[390px] mr-4 space-y-4"></div>
    <div id="insider" className="relative grid  grid-cols-3   rounded-2lg  bg-custom-bg-bg-dark">
      <div className="grid  col-span-1 ml-14 mt-7 rounded-3xl">
        <Sidebar />
      </div>
      <div className=" grid col-span-2 p-2 m-4">
        <ScreenShotes />
        <Description />
        <RatingsAndReviews />
      </div>
      
    </div>
  );
};

export default Insider;

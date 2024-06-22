import React from "react";
import Sidebar from "./Sidebar";
import ScreenShotes from "./ScreenShots";
import Description from "./Description";
import RatingsAndReviews from "./RatingsAndReviews";

const Insider = () => {
  return (
    // <div className="flex flex-col ml-[390px] mr-4 space-y-4"></div>
    <div className="flex-col  bg-custom-bg-bg-dark">
      <Sidebar />
      <div>
        <ScreenShotes />
        <Description />
        <RatingsAndReviews />
      </div>
    </div>
  );
};

export default Insider;

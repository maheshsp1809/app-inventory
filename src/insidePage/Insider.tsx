import React from "react";
import Sidebar from "./Sidebar";
import ScreenShotes from "./ScreenShots";
import Description from "./Description";
import RatingsAndReviews from "./RatingsAndReviews";

interface InsiderProps {
  icon: string;
  name: string;
  screenshots: string[];
  description: string;
  average: number;
  total: string;
  ratings_reviews: {
    averageRating: number;
    totalRatings: number;
    ratingCounts: { [key: number]: number };
    topReview: {
      title: string;
      rating: number;
      comment: string;
      author: string;
      date: string;
      likes: number;
      dislikes: number;
    };
  };
}

const Insider: React.FC<InsiderProps> = ({
  icon,
  name,
  screenshots,
  description,
  average,
  total,
  ratings_reviews,
}) => {
  return (
    <div
      id="insider"
      className="relative grid grid-cols-3 rounded-2lg bg-custom-bg-bg-dark"
    >
      <div className="grid relative row-span-1 ml-14 mt-7 rounded-3xl">
        <div className="fixed relative">
          <Sidebar icon={icon} name={name} average={average} total={total} />
        </div>
      </div>
      <div className="grid row-span-2 w-[60vw] p-2 m-4">
        <ScreenShotes screenshots={screenshots} />
        <Description description={description} />
        <RatingsAndReviews ratings_reviews={ratings_reviews} />
      </div>
    </div>
  );
};

export default Insider;

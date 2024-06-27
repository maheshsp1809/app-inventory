import React from "react";
import { FaStar } from "react-icons/fa";

interface RatingsAndReviewsProps {
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

const RatingsAndReviews: React.FC<RatingsAndReviewsProps> = ({
  ratings_reviews,
}) => {
  const { averageRating, totalRatings, ratingCounts, topReview } =
    ratings_reviews;

  return (
    <div className="w-full bg-custom-dark text-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Ratings and reviews</h2>
        <span className="text-gray-400">&gt;</span>
      </div>

      <div className="flex items-start mb-6">
        <div className="mr-8">
          <span className="text-6xl font-bold">{averageRating.toFixed(1)}</span>
          <p className="text-sm text-gray-400">
            {totalRatings.toLocaleString()} RATINGS
          </p>
        </div>
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
              <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{
                    width: `${(ratingCounts[rating] / totalRatings) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg mb-2">{topReview.title}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${
                i < topReview.rating ? "text-yellow-400" : "text-gray-600"
              } mr-1`}
            />
          ))}
          <span className="text-purple-400 ml-2">
            MOST HELPFUL FAVOURABLE REVIEW
          </span>
        </div>
        <p className="mb-2">{topReview.comment}</p>
        <div className="flex items-center text-sm text-gray-400">
          <span>{topReview.author}</span>
          <span className="mx-2">•</span>
          <span>{topReview.date}</span>
          <div className="ml-auto flex items-center">
            <span className="mr-4">👍 {topReview.likes}</span>
            <span className="mr-4">👎 {topReview.dislikes}</span>
            <span>🚩</span>
          </div>
        </div>
      </div>

      <button className="mt-4 text-gray-400">See all</button>
    </div>
  );
};

export default RatingsAndReviews;

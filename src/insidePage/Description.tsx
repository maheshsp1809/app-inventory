import React, { useState } from "react";

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full bg-custom-dark text-white rounded-lg mb-4">
      <div className="h-auto w-full">
        <div className="px-4 py-2">Description</div>
        <hr />
        <div className="px-4 py-2 max-h-auto overflow-auto">
          <p>
            {description}

            {showMore && (
              <>
                <p>
                  Bringing you closer to the people and things you love. —
                  Instagram from Meta.
                  <br />
                  <br />
                  Connect with friends, share what you're up to or see what's
                  new from others all over the world. Explore our community
                  where you can feel free to be yourself and share everything
                  from your daily moments to life's highlights.
                  <br />
                  <br />
                  Express yourself and connect with friends
                  <br />
                  <br />
                  * Post photos and videos to your feed that you want to show on
                  your profile. * Message your friends with Messenger. Share and
                  connect over what you see on feed and Stories.
                  <br />
                  * Watch videos from your favourite creators and discover new
                  content through Instagram video.
                  <br />
                  * Be inspired by photos and videos from new accounts in
                  Explore.
                  <br />
                  Some Instagram features may not be available in your country
                  or region.
                  <br />
                  <br />
                  Connect with friends, share what you're up to or see what's
                  new from others all over the world. Explore our community
                  where you can feel free to be yourself and share everything
                  from your daily moments to life's highlights.
                  <br />
                  <br />
                  Connect with friends, share what you're up to or see what's
                  new from others all over the world. Explore our community
                  where you can feel free to be yourself and share everything
                  from your daily moments to life's highlights.
                  <br />
                  <br />
                  Connect with friends, share what you're up to or see what's
                  new from others all over the world. Explore our community
                  where you can feel free to be yourself and share everything
                  from your daily moments to life's highlights.
                  <br />
                  <br />
                  Connect with friends, share what you're up to or see what's
                  new from others all over the world. Explore our community
                  where you can feel free to be yourself and share everything
                  from your daily moments to life's highlights.
                  <br />
                  <br />
                  Connect with friends, share what you're up to or see what's
                  new from others all over the world. Explore our community
                  where you can feel free to be yourself and share everything
                  from your daily moments to life's highlights.
                  <br />
                  <br />
                </p>
              </>
            )}
            <br />
            <button
              onClick={handleShowMore}
              className="my-2 text-cyan-500 translate-x-2"
            >
              {showMore ? "Show Less..." : "Show More..."}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;

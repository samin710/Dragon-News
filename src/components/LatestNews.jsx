import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-4 bg-base-200 items-center p-3">
      <p className="bg-secondary px-3 py-2 text-white">Latest</p>
      <Marquee
        className="flex gap-4"
        speed={100}
        direction="left"
        pauseOnHover={true}
      >
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda
          quis neque magni. Ex pariatur voluptates placeat voluptate nostrum
          facere libero adipisci quidem perferendis ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda
          quis neque magni. Ex pariatur voluptates placeat voluptate nostrum
          facere libero adipisci quidem perferendis ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda
          quis neque magni. Ex pariatur voluptates placeat voluptate nostrum
          facere libero adipisci quidem perferendis ratione!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;

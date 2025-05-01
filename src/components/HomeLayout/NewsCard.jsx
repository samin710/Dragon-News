import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  const formattedDate = new Date(author?.published_date).toLocaleDateString(
    "en-US"
  );

  return (
    <div className="shadow-md rounded-xl p-4 space-y-4 bg-base-200">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold leading-snug">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-60 object-cover rounded-lg"
      />

      {/* Details */}
      <p className="text-gray-600">
        {details.length > 300 ? details.slice(0, 300) + "..." : details}
        <span className="text-red-500 font-semibold cursor-pointer">
          {" "}
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-t-gray-300 pt-3 text-gray-600 text-sm">
        <div className="flex items-center space-x-1">
          {Array.from({ length: Math.round(rating?.number || 0) }).map(
            (_, idx) => (
              <FaStar key={idx} className="text-orange-400" />
            )
          )}
          <span className="ml-1 font-semibold">{rating?.number}</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

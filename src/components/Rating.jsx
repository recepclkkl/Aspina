import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ rating = 0, reviewCount = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill("full"),
    ...(hasHalfStar ? ["half"] : []),
    ...Array(emptyStars).fill("empty")
  ];

  return (
    <div className="flex items-center gap-1 ">
      {stars.map((type, index) => (
        <span key={index} className="text-[#F3CD03]">
          {type === "full" && <FontAwesomeIcon icon={faSolidStar} />}
            {type === "half" && <FontAwesomeIcon icon={faStarHalfStroke} />}
            {type === "empty" && <FontAwesomeIcon icon={faRegularStar} />}

        </span>
      ))}
      <span className="text-sm text-gray-600 ml-2">
        {rating.toFixed(1)} / 5 ({reviewCount} Reviews)
      </span>
    </div>
  );
};

export default Rating;
import React from "react";
import "./Review.css";
import Image from "next/image";
import images from "../../../../public/assets/images";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

type ReviewProps = {
  review: {
    helpful_yes: number;
  };
};

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="review-item">
      <div className="user-icon">
        <Image
          src={images.clientele}
          alt="user-logo"
          className="clientele-image"
        />
        <div className="info">
          <div className="identity_wrapper flex items-center gap-2">
            <span>Lolade</span>
            <div className="country">
              <Image
                src={images.nigeriaImage}
                alt="logo of nigeria"
                className="logo-nigeria"
              />
            </div>
          </div>
          <span className="block">Nigeria</span>
        </div>
      </div>
      <div className="stars">
        <FaStar className="star-seller" />
        <FaStar className="star-seller" />
        <FaStar className="star-seller" />
        <FaStar className="star-seller" />
        <FaStar className="star-seller" />
        <span>5</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        natus rerum repudiandae minus dolor ad! Repellat similique libero
        incidunt labore? Reiciendis perferendis asperiores quam libero natus in
        ullam sunt, itaque magni voluptas magnam rem, aperiam sapiente
        cupiditate quidem beatae tempore? Dignissimos natus similique vero
        tempore quaerat totam architecto quisquam. Neque.
      </p>
      <div className="helpful">
        <span>Helpful?</span>
        <FaThumbsUp />
        <span>
          {review && review.helpful_yes !== undefined
            ? `${review.helpful_yes} users found this helpful`
            : "No information available"}
        </span>
        <FaThumbsDown />
        <span>No</span>
      </div>
      <hr />
    </div>
  );
};

export default Review;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../../../../public/assets/images";
import "./AboutSeller.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Review from "../Review/Review";
import {
  faStar,
  faComment,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaArrowLeft,
  FaComment as CommentIcon,
  FaStar as StarIcon,
  FaThumbsDown as ThumbsDownIcon,
  FaThumbsUp as ThumbsUpIcon,
} from "react-icons/fa";

library.add(faStar, faComment, faThumbsUp, faThumbsDown);

type AboutSellerProps = {};

const AboutSeller: React.FC<AboutSellerProps> = (props) => {
  // Mock review data, replace this with your actual review data
  const sampleReview = {
    helpful_yes: 10,
    // Add other properties as needed
  };

  return (
    <div>
      <h4 className="about-seller-text">About The Seller</h4>
      <div className="user-profile-image">
        <Image
          src={images.userLogo}
          alt="user logo"
          className="logo-of-the-user"
        />
        <div className="about-user-section">
          <div className="user-name-info">
            <div className="stars">
              <StarIcon className="star-seller" />
              <StarIcon className="star-seller" />
              <StarIcon className="star-seller" />
              <StarIcon className="star-seller" />
              <StarIcon className="star-seller" />
              <span>5</span>
            </div>
          </div>
          <div className="user-btn">
            <Link href="/message/123">
              <button className="seller-about-button">
                Contact Me
                <CommentIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="user-description-box">
        <div className="user-description-items">
          <div className="user-description-item">
            <span className="desc-title">from</span>
            <span className="desc-desc ml-3">Nigeria</span>
          </div>
          <div className="user-description-item">
            <span className="desc-title">Member since</span>
            <span className="desc-desc ml-3">Aug 2022</span>
          </div>
          <div className="user-description-item">
            <span className="desc-title">Avg. response time</span>
            <span className="desc-desc ml-3">4 hours</span>
          </div>
          <div className="user-description-item">
            <span className="desc-title">Last Delivery</span>
            <span className="desc-desc ml-3">1 Day</span>
          </div>
          <div className="user-description-item">
            <span className="desc-title">Languages</span>
            <span className="desc-desc ml-3 mb-4">English</span>
          </div>
        </div>
        <hr className="mt-3" />
        <p className="item-name">
          My name is Oluwasegun Mogbojuri consectetur, adipisicing elit. Harum
          labore totam placeat eius non praesentium earum odit accusantium culpa
          quos est ea possimus corporis, omnis hic dicta doloremque doloribus
          esse!
        </p>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <Review review={sampleReview} />
        <Review review={sampleReview} />
        <Review review={sampleReview} />
      </div>
    </div>
  );
};

export default AboutSeller;

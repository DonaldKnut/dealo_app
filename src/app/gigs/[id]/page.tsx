import React from "react";
import "./page.css";
import images from "../../../../public/assets/images";
import Link from "next/link";
import Image from "next/image";
import Carousel from "../../utils/Carousel/Carousel";
import AboutSeller from "../../utils/AboutSeller/AboutSeller";
import { FaArrowsRotate } from "react-icons/fa6";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCircle,
  FaClock,
  FaInfo,
  FaStar,
} from "react-icons/fa";
// import Ab

const slides = [
  "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Gig = () => {
  return (
    <div className="gig-parent font-sans">
      <Link href="/" className="link_my_link">
        <span className="link_my_link">
          <FaArrowLeft className="arrow-left" />
        </span>
      </Link>
      <h1 className="gig_text_header">
        I will create graphics design for you{" "}
      </h1>
      <div className="user-section">
        <Image
          src={images.userLogo}
          alt="logo of user"
          className="user-image"
        />
        <span className="username">Segun Mogbojuri</span>
        <div className="stars">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <span>5</span>
        </div>
      </div>
      <div className="gig-left">
        {/* <div className="bread-crumbs"></div> */}
      </div>
      <Carousel>
        {slides.map((s, index) => (
          <img
            src={s}
            className="slide-images"
            alt="image of slide"
            key={index}
          />
        ))}
      </Carousel>
      <div className="gig-item_wrapper">
        <div className="gig-wrapper">
          <div className="first-gig_section-wrapper">
            <div className="gig-left_wrapper">
              <h3 className="slide-label_text">
                About this Gig
                <FaInfo className="about-icon" />
              </h3>
              <p className="gig_about_decription_tag">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                beatae magnam delectus unde. Incidunt, facilis voluptatibus
                consequuntur suscipit fuga, ipsam, magnam quas tempore
                laboriosam officiis asperiores? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Ratione recusandae laboriosam unde
                quos, corporis quae alias eos. Quas corrupti voluptate maiores
                saepe ad laudantium, ex nemo libero unde totam dignissimos!
              </p>
            </div>
            <div className="gig-right_wrapper">
              <div className="gig-right">
                <div className="gig-details-price">
                  <h3>Graphics Designed Image</h3>
                  <h4 className="cash-flow">
                    <span>
                      <Image
                        src={images.cash}
                        alt="image of a cash icon"
                        className="cash-icon_image"
                      />
                    </span>
                    $ 59.80
                  </h4>
                </div>
                <p>
                  I create unique high quality images designed with photoshop
                  based on a description you give me.
                </p>
                <div className="gig-details">
                  <div className="gig-details_item">
                    <FaClock />
                    <span className="perks">2 Days Delivery</span>
                  </div>
                  <div className="gig-details_item">
                    <FaArrowsRotate />
                    <span className="perks">3 Revisions</span>
                  </div>
                </div>
                <div className="details-features">
                  <div className="gig-details_item">
                    <FaCheck />
                    <span>Prompt Writing</span>
                  </div>
                  <div className="gig-details_item">
                    <i className="fa-regular fa-circle-check"></i>
                    <FaCheck />
                    <span>Prompt Writing</span>
                  </div>
                  <div className="gig-details_item">
                    <FaCheck />
                    <span>Prompt Writing</span>
                  </div>
                  <div className="gig-details_item">
                    <FaCheck />
                    <span>Prompt Writing</span>
                  </div>
                </div>
                <button className="gig_btn">
                  Continue
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <AboutSeller />
        </div>
      </div>
    </div>
  );
};

export default Gig;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoSearchCircle } from "react-icons/io5";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import "./page.css";

type Props = {};

const education = (props: Props) => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Cojones", "Worth", "Value", "Virtue", "Forte"];
  const word = words[wordIndex];
  const [typing, setTyping] = useState("");
  const typingSpeed = 200; // Adjust the speed as needed

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (typing.length < word.length) {
      timeoutId = setTimeout(() => {
        setTyping(word.slice(0, typing.length + 1));
      }, typingSpeed);
    } else {
      timeoutId = setTimeout(() => {
        setTyping("");
        setWordIndex((wordIndex + 1) % words.length);
      }, typingSpeed * 15); // Delay before clearing and switching to the next word
    }

    return () => clearTimeout(timeoutId);
  }, [typing, word, wordIndex]);
  return (
    <div>
      <div className="mobile-advert-container_wrapper">
        <div className="mobile_advert-wrap_">
          <a href="/" className="link_my_link">
            <span className="breadcrumbs_ link_my_link">
              <FaArrowLeft className="arrow-left" />
            </span>
          </a>
          <div className="label-text_wrapper">
            <div className="label-text_wrapper-left">
              <Image
                src="/assets/dealo-learn_image.png"
                alt="image of a phone with dealo"
                className="mobile-img_learn"
                width={455}
                height={455}
              />
            </div>
            <div className="label-text_wrapper-section_right">
              <h3 className="mobile-h3-text font-sans">
                Improve your Online Learning
                <span className="typing_text"> {typing}</span>
              </h3>
              <h5 className="mobile-h5-text font-sans">Do more on the go.</h5>
              <div className="search">
                {/* <div className="search-input"> */}
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search Preferred Course?"
                  className="font-sans"
                />
                {/* </div> */}
                <button className="search-btn font-sans">
                  Search
                  <IoSearchCircle className="io-circle" />
                </button>
              </div>

              <div className="encapsulating_wrapper relative 1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
                <Image
                  src="/assets/yekpa_green.png"
                  alt="user icon image1"
                  className="clientele_image absolute"
                  width={45}
                  height={39}
                />
                <Image
                  src="/assets/aviation-image.png"
                  alt="user icon image1"
                  className="clientele_image2 absolute"
                  width={45}
                  height={39}
                />
                <Image
                  src="/assets/user.jpeg"
                  alt="user icon image1"
                  className="clientele_image3 absolute"
                  width={45}
                  height={39}
                />
              </div>
              <p className="label_for_courses font-sans">
                500k+ people already trust us{" "}
                <Link
                  href="/courses"
                  className="courses_link_highlight font-sans"
                >
                  View Courses <CiViewList />
                </Link>
              </p>
              <p className="label-text_wrapper-text font-sans">
                We have 40k plus online courses & 500k+ Online registered
                Students. Find your desired courses from them.
              </p>
              {/* <div className="label-btn_wrapper">
                <Link to="/signup">
                  <button className="label-btn">
                    Open a free account{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default education;

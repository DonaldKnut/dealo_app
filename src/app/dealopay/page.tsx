"use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import Image from "next/image";
import { IoSearchCircle } from "react-icons/io5";
import Button from "../explore/exploreComponents/Button/Button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { LuCheckCircle2 } from "react-icons/lu";
import { FaReddit } from "react-icons/fa";
import { PiTwitchLogoFill } from "react-icons/pi";
import { BsMedium } from "react-icons/bs";

type Props = {};

const page = (props: Props) => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Pay", "Send", "Receive"];
  const word = words[wordIndex];
  const [typing, setTyping] = useState("");
  const typingSpeed = 200; // Adjust the speed as needed
  const [image, setImage] = useState(1);

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
    <>
      <div className="featured_">
        <div className="featured-container_">
          <div className="left">
            <h1 className="home-text font-sans">
              freelance advancely,
              <span className="freelance"> {typing}</span> crypto for premium
              services
            </h1>
            <div className="skill_feature flex items-start text_desc m-4">
              <span>
                {" "}
                <LuCheckCircle2 />
              </span>
              <p className="font-sans text_desc_text">
                These courses not only elevate your travel experience but also{" "}
                position you as a sought-after candidate upon your return.
              </p>
            </div>
            <div className="popular">
              <div className="btn_wrapper_wrap">
                <Button
                  type="button"
                  title="Trade Now"
                  icon={<FaSquareArrowUpRight />}
                  variant="btn_green_rounded"
                  to="/dealopay/crypto"
                />
              </div>
            </div>

            <div className="right">
              {/* <Image
              src={require("../../../public/assets/major_image.png")}
              alt="main image"
              className="main-image"
              width={800}
              height={600}
            /> */}
              <div className="crypto_image_wrapper">
                <Image
                  src={require("../../../public/cryptoAssets/value-of-ethereum-technology.webp")}
                  alt="main image"
                  className="main-image_ rounded-xl"
                  width={800}
                  height={600}
                />
                {/* <div className="overlay"></div> */}
              </div>
              {/* <p>Supported by: </p> */}
              <div className="company_support_wrappers gap-4 flex mt-5">
                <FaReddit className="text-4xl" />
                <PiTwitchLogoFill className="text-4xl" />
                <BsMedium className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

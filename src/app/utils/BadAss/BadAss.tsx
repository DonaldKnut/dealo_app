"use client";
import React from "react";
import images from "../../../../public/assets/images";
import "./BadAss.css";
import { Reveal } from "@/app/reveal";
import Image from "next/image";
import { IoSearchCircle } from "react-icons/io5";

type Props = {};

const BadAss = (props: Props) => {
  return (
    <div className="client-image badass_bg">
      {" "}
      <div className="client-advert_wrapper">
        <div className="left__">
          <div className="video-item_">
            <h1 className="advert-header-text font-sans">
              Dealo{" "}
              <span className="freelance business-freelance">Business</span>
            </h1>
            <h4 className="font-sans">
              A business solution designed for teams
            </h4>
            <p className="upgrade_text font-sans">
              Upgrade to curated experiences packed with and benefits, dedicated
              to businesses
            </p>
            <div className="video_concept_wrapper">
              <div className="video-item_title-wrapper">
                <div className="video-item_title">
                  <Image
                    src={images.checkLogo}
                    alt="chec image"
                    className="check"
                    width={29}
                  />
                  <h4 className="font-sans">The best for every budget</h4>
                </div>
              </div>
              <div className="btn-wrap">
                <button className="business-btn btn font-sans">
                  Explore Dealo business{" "}
                  <IoSearchCircle className="search-circle" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="video-item_main_img">
          <Reveal>
            <Image
              src={images.badass}
              className="video_img badass_"
              alt="dealo business image"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default BadAss;

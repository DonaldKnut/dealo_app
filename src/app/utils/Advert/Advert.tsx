import React from "react";
import images from "../../../../public/assets/images";
import "./Advert.css";
import Link from "next/link";
import Image from "next/image";
import { CgMoreO } from "react-icons/cg";

type Props = {};

const Advert = (props: Props) => {
  return (
    <div className="advert-parent">
      <div className="advert-container">
        {/* <div className="grid-wrapper"> */}
        <div className="ad-left">
          <Image
            src={images.AdvertImage}
            alt="advert image"
            className="advert-image"
          />
        </div>
        <div className="ad-right">
          <h1 className="bait-text font-sans">
            Get Awarded Projects as a{" "}
            <span className="freelance">Freelancer</span>
          </h1>
          <p className="bait-desc font-sans">
            At the heart of Dealo's platform lies our innovative Learning and
            Connection Hub, a central feature that sets us apart. This hub
            serves as a multifaceted solution to address the pressing issue of
            unemployment in Nigeria and Africa.
          </p>
          <Link href="/about-us">
            <button className="learn-btn font-sans">
              Learn More
              <CgMoreO />
            </button>
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Advert;

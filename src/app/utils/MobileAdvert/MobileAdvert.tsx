import React from "react";
import images from "../../../../public/assets/images";
import Image from "next/image";
import { Reveal } from "@/app/reveal";
import "./MobileAdvert.css";

type Props = {};

const MobileAdvert = (props: Props) => {
  return (
    <>
      <div className="mobile-advert-container">
        <div className="mobile_advert-wrap">
          <div className="label-text_wrapper">
            <div className="label-text_wrapper-left">
              <Reveal>
                <Image
                  src={images.dealoLogoIcon}
                  alt="image of a phone with dealo"
                  className="mobile-img"
                />
              </Reveal>
            </div>
            <div className="label-text_wrapper-section_right">
              <Reveal>
                <h3 className="mobile-h3-text font-sans">
                  Join the new age Freelancers and Job Seekers.
                </h3>
              </Reveal>
              <Reveal>
                <h5 className="mobile-h5-text font-sans">Do more on the go.</h5>
              </Reveal>
              <Reveal>
                <p className="label-text_wrapper-text font-sans">
                  Expand your horizons by offering your skills to those who are
                  willing to invest in them. Enhance your principles and turn
                  them into a source of income.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAdvert;

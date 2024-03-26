import React from "react";
import "./Partners.css";
import images from "../../../../public/assets/images";
import Image from "next/image";
import { Reveal } from "@/app/reveal";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="partners-wrapper">
      <div className="partners">
        <Reveal>
          <h3>Trusted By: </h3>
        </Reveal>
        <div className="logo-wrap">
          <Reveal>
            <Image src={images.google_logo} alt="" className="partner-logo" />
          </Reveal>
        </div>
        <div className="logo-wrap">
          <Reveal>
            <Image src={images.netflix} alt="" className="partner-logo" />
          </Reveal>
        </div>
        <div className="logo-wrap">
          <Reveal>
            <Image src={images.facebook} alt="" className="partner-logo" />
          </Reveal>
        </div>
        <div className="logo-wrap">
          <Reveal>
            <Image src={images.paypal} alt="" className="partner-logo" />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Partners;

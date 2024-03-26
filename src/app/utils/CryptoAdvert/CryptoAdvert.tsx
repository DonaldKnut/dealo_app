import React from "react";
import Image from "next/image";
import { LuCheckCircle2 } from "react-icons/lu";
import Button from "../../../app/explore/exploreComponents/Button/Button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import "./CryptoAdvert.css";
import { SiCashapp } from "react-icons/si";
import { Reveal } from "@/app/reveal";

type Props = {};

const CryptoAdvert = (props: Props) => {
  return (
    <div className="background_dealo_world mt-20">
      <div className="dealo_world_wrapper">
        <div className="dealo_world_right">
          <Reveal>
            <Image
              src="/cryptoImages/bic_Ethereum_3-covers_coins_neutral-850x478.png"
              alt="world dealo"
              width={800}
              height={800}
            />
          </Reveal>
          <div className="apply_btn_wrap">
            <Reveal>
              <Button
                type="button"
                title="Apply Now"
                icon={<FaSquareArrowUpRight />}
                variant="btn_green_rounded"
                to="/apply"
              />
            </Reveal>
          </div>
        </div>
        <div className="dealo_world_left">
          <Reveal>
            <SiCashapp className="text-4xl" />
          </Reveal>
          <Reveal>
            <h6 className="freelance text-white dealoworld_text">
              Ethereum is the cornerstone <br />
              of decentralized , <br />
              Finance
            </h6>
          </Reveal>
          <div className="skill_feature flex items-start">
            <Reveal>
              <span>
                {" "}
                <LuCheckCircle2 />
              </span>
            </Reveal>
            <Reveal>
              <p className="font-sans my-2">
                These courses not only elevate your travel experience but also
                position you as a sought-after candidate upon your return.
              </p>
            </Reveal>
          </div>
          <div className="skill_feature">
            <Reveal>
              <span>
                {" "}
                <LuCheckCircle2 />
              </span>
            </Reveal>
            <Reveal>
              <p className="font-sans my-2">
                These courses not only elevate your travel experience but also
                position you as a sought-after candidate upon your return.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoAdvert;

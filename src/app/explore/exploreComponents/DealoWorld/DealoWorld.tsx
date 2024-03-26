import React from "react";
import "./DealoWorld.css";
import Image from "next/image";
import { Reveal } from "@/app/reveal";
import { LuCheckCircle2 } from "react-icons/lu";
import Button from "../Button/Button";
import { FaSquareArrowUpRight } from "react-icons/fa6";

type Props = {};

const DealoWorld = (props: Props) => {
  const worldImage = `https://res.cloudinary.com/dtujpq8po/image/upload/v1704478910/cryptoAssets/travelImages/img__zmmbad.png`;
  return (
    <div className="background_dealo_world mt-20">
      <div className="dealo_world_wrapper">
        <div className="dealo_world_left">
          {/* <LiaGlobeAfricaSolid className="text-4xl" /> */}
          <Reveal>
            <h6 className="freelance text-white dealoworld_text">
              Embark on the Journey to <br />
              Transform your Life, <br />
              Travel the world and Earn Money.
            </h6>
          </Reveal>
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
        <div className="dealo_world_right">
          <Reveal>
            <Image
              src={worldImage}
              alt="world dealo"
              width={600}
              height={600}
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
      </div>
    </div>
  );
};

export default DealoWorld;

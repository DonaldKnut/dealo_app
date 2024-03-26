import React from "react";
import "./FlightAdvert.css";
import Image from "next/image";
import { GiCash } from "react-icons/gi";
import "./FlightAdvert.css";
import { LuCheckCircle2 } from "react-icons/lu";
import { Reveal } from "@/app/reveal";

type Props = {};

const FlightAdvert = (props: Props) => {
  const paylaterImage = `https://res.cloudinary.com/dtujpq8po/image/upload/v1704479346/cryptoAssets/travelImages/paylater_image_r6iyb6.png`;

  return (
    <>
      <div className="background_flight_advert">
        <div className="flight_advert_wrapper">
          <div className="dealo_world_left">
            <Reveal>
              <GiCash className="text-4xl" />
            </Reveal>
            <Reveal>
              <h6 className="freelance text-white dealoworld_text">
                Seamless Travel Loans <br />@ Competitive Rates.
              </h6>
            </Reveal>
            <div className="skill_features">
              <div className="skill_feature">
                <Reveal>
                  <span>
                    {" "}
                    <LuCheckCircle2 />
                  </span>
                </Reveal>
                <Reveal>
                  <p className="font-sans my-2">
                    Transform into a digital nomad with courses on remote work,
                    online entrepreneurship, and digital marketing.
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
                    Transform into a digital nomad with courses on remote work,
                    online entrepreneurship, and digital marketing.
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
                    Transform into a digital nomad with courses on remote work,
                    online entrepreneurship, and digital marketing.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="dealo_world_right">
            <Image
              src={paylaterImage}
              alt="world dealo"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightAdvert;

"use client";
import React, { FC } from "react";
import "./not-found.css";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

type Props = {};

const notFound: FC = (props: Props) => {
  return (
    <div>
      <div className="mobile-advert-container">
        <div className="mobile_advert-wrap">
          <div className="label-text_wrapper">
            <div className="label-text_wrapper-left">
              <Reveal>
                <Image
                  src={require("../../public/assets/not_found.png")}
                  alt="image of a phone with dealo"
                  className="mobile-img"
                  width={455}
                  height={455}
                />
              </Reveal>
            </div>
            <div className="label-text_wrapper-section_right">
              <Reveal>
                <p className="">ERROR COCC 404</p>
              </Reveal>
              <Reveal>
                <h1 className="mobile-h1-text freelance">Oops!!</h1>
              </Reveal>
              <Reveal>
                <h5 className="mobile-h5-text">
                  This is not the page you are looking for.
                </h5>
              </Reveal>
              <Reveal>
                <p className="label_for_courses">
                  Here is a helpful link instead.{" "}
                  <Link href="/" className="courses_link_highlight">
                    Home
                  </Link>
                </p>
              </Reveal>
              {/* <p className="label-text_wrapper-text">
                We have 40k plus online courses & 500k+ Online registered
                Students. Find your desired courses from them.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;

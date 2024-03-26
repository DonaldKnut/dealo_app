"use client";
import React from "react";
import Link from "next/link";
import "./DealoArt.css";
import Image from "next/image";
import { CgChevronRightO } from "react-icons/cg";
import { Reveal } from "../reveal";

type Props = {};

const DealoArt = (props: Props) => {
  return (
    <div>
      <div className="dealo-art font-sans">
        <div className="first-wrap">
          <h1 className="label-top">
            Empowering Through Skills and Connection
          </h1>
          <p className="bait-label_second">
            At the heart of Dealoite's platform lies our innovative Learning and
            Connection Hub, a central feature that sets us apart. This hub
            serves as a multifaceted solution to address the pressing issue of
            unemployment in Nigeria and Africa.
          </p>
          <Link href="/login">
            <button className="learn-btn_second">
              Get Started{" "}
              <CgChevronRightO className="text-2xl text-green-400" />
            </button>
          </Link>
        </div>
        <div className="second-wrap">
          <Image
            src={require("../../../public/assets/0_wMwOkM8GSyhDk0QN.png")}
            alt="art image"
            className="art-img"
          />
        </div>
      </div>
    </div>
  );
};

export default DealoArt;

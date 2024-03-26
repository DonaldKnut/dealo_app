import React from "react";
import "./Footer.css";
import { RiMailOpenFill } from "react-icons/ri";
import { IoChevronForwardCircle } from "react-icons/io5";
import Button from "../Button/Button";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import { Reveal } from "@/app/reveal";

type Props = {};

const Footer = (props: Props) => {
  const footerLogo = `https://res.cloudinary.com/dtujpq8po/image/upload/v1704478798/cryptoAssets/travelImages/dealo_travels_alt_ogacyg.png`;
  return (
    <div className="mt-10 mb-8">
      <div className="footer_to_japa_section">
        <div className="first_section">
          <div className="first_wrap">
            <Reveal>
              <RiMailOpenFill className="text-6xl footer_mail" />
            </Reveal>
            <Reveal>
              <h3 className="text-8xl freelance mt-2">
                Keep up with the <br /> latest.
              </h3>
            </Reveal>
            <Reveal>
              <p className="font-sans my-3">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </Reveal>
          </div>
          <div className="second_wrap">
            <Reveal>
              <h5 className="font-sans text-3xl">stay up to date</h5>
            </Reveal>
            <div className="input_box">
              <div className="input_wrapper">
                <Reveal>
                  <input
                    type="text"
                    placeholder="Enter your mail"
                    className="mr-1 flex items-center gap-2 border rounded-full px-14 py-4 transition duration-300 hover:bg-green-800 hover:border-green-300 text-black font-sans"
                  />
                </Reveal>
              </div>
              <Reveal>
                <Button
                  type="button"
                  title="Subscribe"
                  icon={<IoChevronForwardCircle className="text-2xl" />}
                  variant="btn_green_rounded"
                />
              </Reveal>
            </div>
            <Reveal>
              <p className="font-sans">
                by subscribing you agree with our{" "}
                <a href="#" className="text-green-500 privacy_tag">
                  privacy policy
                </a>
              </p>
            </Reveal>
          </div>
        </div>
        <hr className="my-5" />
        <div className="second_section">
          <Link href="/" passHref>
            <Image
              src={footerLogo}
              alt="dealo travels logo"
              width={90}
              height={90}
              className="footer_logo"
            />
          </Link>
        </div>
      </div>
      <div className="footer_socials">
        <Reveal>
          <h1 className="footer_subtitle font-sans">
            &copy; Dealo Group Incorporation. <span>All Rights Reserved</span>
          </h1>
        </Reveal>
        <div className="footer_social_icons">
          <Reveal>
            <Link href="/">
              <BsTwitterX className="cursor-pointer text-2xl social_font" />
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/">
              <RiInstagramFill className="cursor-pointer text-2xl social_font" />
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/">
              <GrLinkedin className="cursor-pointer text-2xl social_font" />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Menu.css";
import images from "../../../../public/assets/images";
import Link from "next/link";
import Image from "next/image";
import "./Menu.css";
import { Reveal } from "@/app/reveal";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="menu-section-wrapper">
      <div className="menu-wrapper_container text-center">
        <h1 className="freelance text-center">Menu</h1>
        <div className="gig-elements font-sans">
          <div className="label-n-image">
            <Link href="/gigs" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.graphicsDesign}
                alt="graphics logo"
                className="menu-image"
              />
              {/* </Reveal> */}
              <h3 className="img-label">Graphics Design</h3>
            </Link>
          </div>
          <div className="label-n-image">
            <Link href="/gig/123" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.techLogo}
                alt="graphics logo"
                className="menu-image tech-logo "
              />
              {/* </Reveal> */}
              <h3 className="img-label">Coding & Tech</h3>
            </Link>
          </div>
          <div className="label-n-image">
            <Link href="/gig/123" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.photographyLogo}
                alt="graphics logo"
                className="menu-image icon-logo photocopy"
              />
              {/* </Reveal> */}
              <h3 className="img-label">Photography</h3>
            </Link>
          </div>
          <div className="label-n-image">
            <Link href="/gig/123" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.lifeStyle}
                alt="graphics logo"
                className="menu-image lifestyle icon-logo"
              />
              {/* </Reveal> */}
              <h3 className="img-label">Lifestyle</h3>
            </Link>
          </div>
          <div className="label-n-image">
            <Link href="/gig/123" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.videoAnimation}
                alt="graphics logo"
                className="video-logo"
              />
              {/* </Reveal> */}
              <h3 className="img-label">Video & Animation</h3>
            </Link>
          </div>
          <div className="label-n-image">
            <Link href="/gig/123" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.writeLogo}
                alt="graphics logo"
                className="menu-image paper-logo icon-logo"
              />
              {/* </Reveal> */}
              <h3 className="img-label">Writing & Translation</h3>
            </Link>
          </div>
          <div className="label-n-image">
            <Link href="/gig/123" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.theLaw}
                alt="graphics logo"
                className="menu-image icon-logo"
              />
              {/* </Reveal> */}
              <h3 className="img-label">Law</h3>
            </Link>
          </div>
          <div className="label-n-image">
            <Link href="/gig/123" className="link-text">
              {/* <Reveal> */}
              <Image
                src={images.dataScience}
                alt="graphics logo"
                className="menu-image data-science icon-logo"
              />
              {/* </Reveal> */}
              <h3 className="img-label">Data Science</h3>
            </Link>
          </div>
          <div className="label-n-image">
            {/* <Reveal> */}
            <Image
              src={images.marketingImage}
              alt="graphics logo"
              className="menu-image data-science digital-marketing"
            />
            {/* </Reveal> */}
            <h3 className="img-label">Digital Marketing</h3>
          </div>
          <div className="label-n-image">
            {/* <Reveal> */}
            <Image
              src={images.musicAndAudio}
              alt="graphics logo"
              className="menu-image data-science icon-logo"
            />
            {/* </Reveal> */}
            <h3 className="img-label">Music</h3>
          </div>
          <div className="label-n-image">
            {/* <Reveal> */}
            <Image
              src={images.engineering}
              alt="graphics logo"
              className="menu-image icon-logo"
            />
            {/* </Reveal> */}
            <h3 className="img-label">Engineering</h3>
          </div>
          <div className="label-n-image">
            {/* <Reveal> */}
            <Image
              src={images.aviation}
              alt="graphics logo"
              className="menu-image aviation icon-logo"
            />
            {/* </Reveal> */}
            <h3 className="img-label">Aviation</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

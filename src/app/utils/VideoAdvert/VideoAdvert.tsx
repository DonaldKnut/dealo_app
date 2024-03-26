import React from "react";
import images from "../../../../public/assets/images";
import "./VideoAdvert.css";
import { Reveal } from "@/app/reveal";
import Image from "next/image";

type Props = {};

function VideoAdvert({}: Props) {
  return (
    <div className="video-advert_wrapper">
      <div className="advert-wrapper">
        <div className="left_">
          <div className="video-item">
            <Reveal>
              <h1 className="advert-header-text_ font-sans font-bold">
                A whole world of freelance talent at your fingertips
              </h1>
            </Reveal>
            <div className="video-item_title-wrapper">
              <div className="video-item_title">
                <Reveal>
                  <Image
                    src={images.check}
                    alt="chec image"
                    className="check"
                  />
                </Reveal>
                <Reveal>
                  <h4 className="font-sans">The best for every budget</h4>
                </Reveal>
              </div>
              <Reveal>
                <p className="font-sans">
                  Find High-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="video-item">
            <div className="video-item_title-wrapper">
              <div className="video-item_title">
                <Reveal>
                  <Image
                    src={images.check}
                    alt="chec image"
                    className="check"
                  />
                </Reveal>
                <Reveal>
                  <h4 className="font-sans">The best for every budget</h4>
                </Reveal>
              </div>
              <Reveal>
                <p className="font-sans">
                  Find High-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="video-item">
          {/* <video
            width="420"
            height="240"
            controls
            autoPlay
            className="video_advert_video"
          >
            <source src={} type="video/mp4" />
          </video> */}
          <Reveal>
            <video
              src="/video/The Deloitte Experience.mp4"
              width={720}
              height={640}
              loop
              autoPlay
              muted
              style={{ borderRadius: "8px" }}
            ></video>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default VideoAdvert;

"use client";
import React, { useState, useEffect, ReactNode } from "react";
import "./Hero.css";
import { Reveal } from "@/app/reveal";
import { CATEGORIES } from "@/constant";
import { LuCheckCircle2 } from "react-icons/lu";
import Link from "next/link";
import { SiStarship } from "react-icons/si";
// import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [typedText, setTypedText] = useState("");
  const originalText = `Apply for a travel loan to visit your dream destination without worrying about immediate financial constraints.`;

  const travelVideoAdvert = `https://res.cloudinary.com/dtujpq8po/video/upload/v1704673327/flght_v3hg6x.mp4`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(originalText.slice(0, index));
      index += 1;

      if (index > originalText.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-[165vh] w-full z-10 pb-12">
        <div className="max-container padding-container px-300 relative top-28 sm:top-1/3 z-10 hero-wrapper">
          <div className="hero_subwrapper">
            <div className="hero_text_container">
              <Reveal>
                <SiStarship className="text-6xl" />
              </Reveal>
              <Reveal>
                <h1 className="freelance hero-text">Japa Now</h1>
              </Reveal>
              <Reveal>
                <h2 className="later-text font-Pacifico freelance font-serif">
                  Pay Later...
                </h2>
              </Reveal>
              <Reveal>
                <p className="font-sans japa_subtitle py-5">
                  Welcome to our revolutionary platform that not only makes your
                  dream travel destinations a reality but also empowers you with
                  valuable skills for a brighter future.
                </p>
              </Reveal>
              <div className="hero_feature">
                <Reveal>
                  <span>
                    <LuCheckCircle2 />
                  </span>
                </Reveal>
                <Reveal>
                  <p className="font-sans japa_subtitle flex items-baseline gap-2">
                    {typedText}
                  </p>
                </Reveal>
              </div>
            </div>
            {/* <div className="hero_img_container">
              <Image src="/jakpa.png" alt="" width={300} height={300} />
            </div> */}
          </div>
          <Reveal>
            <h5 className="font-sans mt-2 pl-2">Explore the key points.</h5>
          </Reveal>
          <ul className="flex flex-wrap gap-4 font-sans mt-2 pl-2">
            {CATEGORIES.map((category) => (
              <CategoryItem
                title={category.title}
                icon={category.icon}
                key={category.title}
              />
            ))}
          </ul>
        </div>
        <video
          src={travelVideoAdvert}
          autoPlay
          muted
          loop
          className="video"
        ></video>
      </section>
    </>
  );
};

type CategoryItem = {
  title: string;
  icon: ReactNode;
};

const CategoryItem = ({ title, icon }: CategoryItem) => {
  return (
    <Link
      href="/"
      className="bg-[#2a523b] flex items-center gap-1 px-5 py-2 rounded-xl hover:translate-y-[2px] transition-all duration-500"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default Hero;

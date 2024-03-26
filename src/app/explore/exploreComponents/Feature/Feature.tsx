"use client";
import React from "react";
import "./Feature.css";
import Slider from "react-slick";
import Image from "next/image";
import { FEATURE } from "@/constant";
import { IoSearchCircleSharp } from "react-icons/io5";
import Link from "next/link";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
// import { Reveal } from "@/app/reveal";

type Props = {};

const Feature = (props: Props) => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/3 -right-1 z-10 hover:bg-slate-10 cursor-pointer"
      >
        <RiArrowRightSLine className="text-black" />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/3 -left-1 z-10 hover:bg-slate-10 cursor-pointer"
      >
        <RiArrowLeftSLine className="text-black" />
      </div>
    );
  };
  var settings = {
    arrows: true,
    autoplay: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: ,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="feature_tab">
      <div className="py-4">
        <h3 className="bold-32 text-center freelance text-3xl">
          Featured Destinations
        </h3>
        <p className="text-center font-sans">
          Picture yourself strolling through the vibrant streets of your dream
          destination, soaking in the culture, and creating memories that last a
          lifetime.
        </p>
        <div className="pt-16">
          <Slider {...settings}>
            {FEATURE.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                path={feature.path}
                des={feature.des}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

type FeatureItem = {
  title: string;
  path: string;
  des: string;
};

const FeatureItem = ({ title, path, des }: FeatureItem) => {
  const handleImageError = (event: any) => {
    console.error(`Error loading image: ${path}`, event);
  };
  return (
    <div className="relative overflow-hidden mx-3 group rounded-2xl">
      <div className="overflow-hidden relative">
        <Image
          src={path}
          alt="cities image"
          height={600}
          width={510}
          className="hover:scale-105 hover:rotate-2 transition-all duration-700"
          onError={handleImageError}
          style={{ height: "auto", width: "auto" }}
        />

        <Link
          href="/"
          className="absolute top-1/2 left-1/2 h-12 w-12 text-4xl -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500"
        >
          <IoSearchCircleSharp />
        </Link>
      </div>
      <div className="px-5 py-3 absolute bottom-0 w-full">
        <div className="capitalize text-[17px] text-white font-[500] font-sans">
          <BsGlobeAsiaAustralia />
          {title}
        </div>
        <div className="text-white my-2 text-[15px] font-sans">{des}</div>
      </div>
    </div>
  );
};

export default Feature;

// Testimonial.tsx
"use client";
import React from "react";
import Slider from "react-slick";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TESTIMONIALS } from "@/constant";
import Image from "next/image";
import "./Testimonial.css";

type Props = {};

const Testimonial = (props: Props) => {
  var settings = {
    arrows: false,
    autoplay: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 43,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
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
    <div className="testimnials_section_wrapper">
      <div className="mx-auto w-80%">
        <h3 className="freelance text-center">Testimonials</h3>
        <p className="font-sans text-center">
          Explore the transformative narratives of individuals who turned
          acquired skills into global opportunities.
        </p>
      </div>
      <Slider {...settings}>
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            title={testimonial.title}
            desc={testimonial.desc}
            profession={testimonial.profession}
            path={testimonial.path}
          />
        ))}
      </Slider>
    </div>
  );
};

interface TestimonialItemProp {
  title: string;
  profession: string;
  path: string;
  desc: string;
}

const TestimonialItem = ({
  title,
  profession,
  path,
  desc,
}: TestimonialItemProp) => {
  return (
    <div className="mx-4 my-12 relative px-8 py-12 rounded-2xl bg-[#2a523b] z-10">
      <span className="text-slate-10 text-9xl absolute -top-4 -right-4 z-10">
        <RiDoubleQuotesR className="text-green-600 text-center" />
      </span>
      <p className="text-white text-center font-sans z-20 mt-9">{desc}</p>
      <div className="flex items-center gap-4 mt-8 mx-auto testimonial_bio">
        <Image
          src={path}
          alt="user"
          height={55}
          width={55}
          className="testimonial_image"
          // style={{ width: "auto", height: "auto" }}
          priority={true}
        />
        <div>
          <div className="medium-14 font-sans">{title}</div>
          <div className="text-gray-20 regular-14 font-sans">{profession}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

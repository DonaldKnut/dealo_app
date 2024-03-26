"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Navbar from "./utils/Navbar";
import Featured from "./components/Featured";
import Footer from "./Footer";
import DealoArt from "./utils/DealoArt";
import Slider from "./utils/Slider/Slider";
import Menu from "./utils/Menu/Menu";
import BadAss from "./utils/BadAss/BadAss";
import Advert from "./utils/Advert/Advert";
import VideoAdvert from "./utils/VideoAdvert/VideoAdvert";
import Partners from "./utils/Partners/Partners";
import "./globals.css";
import MobileAdvert from "./utils/MobileAdvert/MobileAdvert";
import CryptoAdvert from "./utils/CryptoAdvert/CryptoAdvert";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Heading
        title="Dealo"
        description="A Multinational Freelancing Platform for Professionals"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <Navbar
        route={route}
        activeItem={activeItem}
        setOpen={setOpen}
        setRoute={setRoute}
        open={open}
      />
      <Featured />
      <Slider />
      <CryptoAdvert />
      <DealoArt />
      <Menu />
      <Advert />
      <VideoAdvert />
      <Partners />
      <BadAss />
      <MobileAdvert />
      <Footer />
    </div>
  );
};

export default Page;

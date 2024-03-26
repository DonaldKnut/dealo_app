"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";
import Button from "../Button/Button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { CgMenuRound } from "react-icons/cg";
import { RiCloseCircleFill } from "react-icons/ri";

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  return (
    <nav className="flex items-center justify-between max-container px-12 z-30 py-2 shadow-xl rounded-full ring-offset-green-500 fixed w-[95%] left-[50%] top-1 translate-x-[-50%] font-sans bg-green-900/90">
      <Link href="/" passHref>
        <Image
          src="https://res.cloudinary.com/dtujpq8po/image/upload/v1704478798/cryptoAssets/travelImages/dealo_travels_alt_ogacyg.png"
          alt="dealo travels logo"
          width={50}
          height={50}
        />
      </Link>
      <ul className="hidden lg:flex h-full space-x-8">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flex items-center">
            <a href={link.href}>
              <div className="flex items-center transition-all duration-500 ease-in-out hover:text-green-500">
                {link.icon}
                <span className="ml-2">{link.label}</span>
                <span className="inline-block absolute h-[2px] w-0 bg-green-500 -bottom-2 traansition-all duration-500 group-hover:w-full"></span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <Button
          type="button"
          title="Apply Now"
          icon={<FaSquareArrowUpRight />}
          variant="btn_green_rounded"
          to="/apply"
        />
      </div>
      {!menuOpened ? (
        <CgMenuRound
          className="lg:hidden inline-block cursor-pointer"
          style={{ fontSize: "35px" }}
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseCircleFill
          className="lg:hidden inline-block cursor-pointer"
          style={{ fontSize: "35px" }}
          onClick={toggleMenu}
        />
      )}
      <ul
        className={
          menuOpened
            ? "flex flex-col justify-center p-12 w-64 fixed top-24 right-0 bg-green-700 rounded-lg transition-all duration-500  text-center  shadow-emerald-450"
            : "flex flex-col justify-center p-12 w-64 fixed top-24 right-[-100%] bg-green-700 rounded-lg transition-all duration-500  text-center  shadow-emerald-450"
        }
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flex items-center mb-9">
            <Link href={link.href} passHref>
              <div className="flex items-center transition-all duration-500 ease-in-out hover:text-green-500">
                {link.icon}
                <span className="ml-2 text-lg">{link.label}</span>
                <span className="inline-block absolute h-[2px] w-0 bg-green-500 -bottom-2 transition-all duration-500 group-hover:w-full"></span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import GigCard from "../../app/components/GigCard/GigCard";
import { gigs } from "../data";
import "./page.css";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import MobileAdvert from "../utils/MobileAdvert/MobileAdvert";
import BadAss from "../utils/BadAss/BadAss";
import { MdOutlineTravelExplore } from "react-icons/md";
interface Gig {
  id: number;
  img: string;
  pp: string;
  username: string;
  desc: string;
  star: number;
  price: number;
}

const Gigs: React.FC = () => {
  const [sort, setSort] = useState<string>("sales");
  const [open, setOpen] = useState<boolean>(false);

  const reSort = (type: string) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="gig-mother">
        <Link href="/">
          <span className="breadcrumbs">
            <FaArrowLeft className="arrow_left_arrow" />
          </span>
        </Link>
        <h1 className="gig-title font-sans">Graphics Design</h1>
        {/* <p className="gig-subtitle">
          <MdOutlineTravelExplore className="outline_travel" />
          Explore the boundaries of art and <br /> technology with Dealo's
          Graphics Designers
        </p> */}
        <div className="controls">
          <div className="control-wrapper font-sans">
            <div className="left-controls">
              <span>Budget</span>
              <input type="text" placeholder="min" className="input_budget" />
              <input type="text" placeholder="max" className="input_budget" />
              <button className="_btn_">Apply</button>
            </div>
          </div>
          <div className="right-controls">
            <span className="sort-by">SortBy</span>
            <span
              className="sort-type"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <FaChevronDown
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="right-menu right-menu_options ">
                {sort === "sales" ? (
                  <span
                    onClick={() => {
                      reSort("createdAt");
                    }}
                    className="sort-link"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      reSort("sales");
                    }}
                    className="sort-link"
                  >
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cards_container_wrapper">
        <div className="cards">
          {gigs.map((gig: Gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
      <BadAss />
      <MobileAdvert />
    </div>
  );
};

export default Gigs;

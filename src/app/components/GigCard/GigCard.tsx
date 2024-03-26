import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import "./GigCard.css";
import { FaKissWinkHeart } from "react-icons/fa";
import images from "../../../../public/assets/images";
import Image from "next/image";

interface GigCardProps {
  item: {
    id: number;
    img: string;
    pp: string;
    username: string;
    desc: string;
    star: number;
    price: number;
  };
}

const GigCard: React.FC<GigCardProps> = ({ item }) => {
  return (
    <div className="gig-card font-sans">
      <Link href={`/gigs/${item.id}`} className="anchor-link">
        <div className="pp_image">
          <img src={item.img} alt="image of a gig" className="bg-picture" />
        </div>
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" className="user-picture" />
            <span>{item.username}</span>
          </div>
          <p className="gig-desc">{item.desc}</p>
          <div className="kisses_wrapper">
            <FaKissWinkHeart className="kisses" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <div className="star-icon">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="item-price">
            <span>Starting At</span>
            <p className="pricing">
              <span>
                <Image
                  src={images.cash}
                  alt="image of a cash icon"
                  className="cash-icon"
                />
              </span>
              ${item.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GigCard;

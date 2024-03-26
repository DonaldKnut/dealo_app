"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "../../../../public/assets/images";
import "./page.css";
import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaGreaterThan } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="message-wrapper">
      <div className="message-container_wrapper">
        <Link href="/" className="link_my_link">
          <span className="breadcrumbs_ link_my_link">
            <FaArrowLeft className="arrow-left" />
          </span>
        </Link>
        <div className="breadcrumbs">
          <Link href="/messages" className="message-link">
            <HiInboxArrowDown />
            Messages
          </Link>
          <span className="username-breadcrumbs">
            <FaGreaterThan /> Segun Mogbojuri
          </span>
        </div>
        <div className="messages">
          <div className="message-item">
            <Image
              src={images.userLogo}
              alt="logo of user"
              className="message-logo"
            />
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              magni cum dolores labore veritatis commodi placeat illo tempore
              fugiat eum iusto.
            </p>
          </div>
          <div className="message-item owner">
            <Image
              src={images.userLogo}
              alt="logo of user"
              className="message-logo"
            />
            <p className="message-text owner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              magni cum dolores labore veritatis commodi placeat illo tempore
              fugiat eum iusto.
            </p>
          </div>
        </div>
        <div className="messages">
          <div className="message-item">
            <Image
              src={images.userLogo}
              alt="logo of user"
              className="message-logo"
            />
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              magni cum dolores labore veritatis commodi placeat illo tempore
              fugiat eum iusto.
            </p>
          </div>
          <div className="message-item owner">
            <Image
              src={images.userLogo}
              alt="logo of user"
              className="message-logo"
            />
            <p className="message-text owner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              magni cum dolores labore veritatis commodi placeat illo tempore
              fugiat eum iusto.
            </p>
          </div>
        </div>
        <div className="messages">
          <div className="message-item">
            <Image
              src={images.userLogo}
              alt="logo of user"
              className="message-logo"
            />
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              magni cum dolores labore veritatis commodi placeat illo tempore
              fugiat eum iusto.
            </p>
          </div>
          <div className="message-item owner">
            <Image
              src={images.userLogo}
              alt="logo of user"
              className="message-logo"
            />
            <p className="message-text owner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              magni cum dolores labore veritatis commodi placeat illo tempore
              fugiat eum iusto.
            </p>
          </div>
        </div>
        <hr className="hr" />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols={30}
            rows={10}
            className="textarea"
          />
          <div className="btn-wrapper_container">
            <button className="message-btn">
              Send <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

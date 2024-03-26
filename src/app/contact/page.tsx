import React from "react";
import { IoIosMailOpen } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { PiAddressBookFill } from "react-icons/pi";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { PiLinkedinLogoFill } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

const Page = () => {
  return (
    <div className="page-container">
      <div className="contact_wrapper">
        <div className="contact-section p-8">
          <Link href="/" passHref>
            <Image
              src="https://res.cloudinary.com/dtujpq8po/image/upload/v1704478798/cryptoAssets/travelImages/dealo_travels_alt_ogacyg.png"
              alt="dealo travels logo"
              width={90}
              height={90}
              className="text-6xl"
            />
          </Link>
          <h1 className="freelance">Contact Us</h1>
          <p className="font-sans">
            Feel free to contact us anytime. We will get back <br />
            to you as soon as we can!
          </p>
          <form className="contact-form">
            <label htmlFor="name" className="font-sans contact_label">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="font-sans contact_input"
            />

            <label htmlFor="email" className="font-sans contact_label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="font-sans contact_input"
            />

            <label htmlFor="message" className="font-sans contact_label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="1"
              placeholder="Message"
              className="font-sans contact_input"
            ></textarea>

            <button type="submit" className="button font-sans">
              Submit <IoChevronForwardCircleSharp />
            </button>
          </form>
        </div>
        <div className="contact_info_section_wrapper">
          <div className="contact_info_section">
            <h3 className="font-sans">Info</h3>
            <div className="info_section pt-5">
              <IoIosMailOpen className="text-2xl" />
              <Link
                href="mailto:dealogroupincorporated@gmail.com"
                className="font-sans"
              >
                dealogroupincorporated@gmail.com
              </Link>
            </div>
            <div className="info_section pt-5">
              <LuPhone className="text-2xl" />
              <Link href="tel:+2348157062795" className="font-sans">
                +234 815 706 2795
              </Link>
            </div>
            <div className="info_section pt-5">
              <PiAddressBookFill className="text-2xl" />
              <h3 className="font-sans">
                23A, Bashorun Okusanya St. <br /> Off Admiralty Wy, Lekki Phase
                1, Lagos
              </h3>
            </div>
            <div className="info_section pt-5">
              <PiLinkedinLogoFill className="text-2xl" />
              <Link
                href="https://www.linkedin.com/company/dealo-group-incorporation/mycompany/?viewAsMember=true"
                className="font-sans"
              >
                Dealo Group Incorporated
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// page.tsx
"use client";
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import images from "../../../public/assets/images";
import "./page.css";
import Image from "next/image";
import { BsHourglassSplit } from "react-icons/bs";
import { countries } from "../countries";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { PiInfoDuotone } from "react-icons/pi";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { BiSolidRegistered } from "react-icons/bi";
import * as Yup from "yup";

type Props = {};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Page = (props: Props) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async (email, password) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div className="register-container">
        <div className="register-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-first-section">
              <h1 className="create_text_header freelance">
                Create a new Account
              </h1>
              <p className="text_started font-sans">
                Let's get you started!{" "}
                <span>
                  <BsHourglassSplit className="social_text_font_" />
                </span>
              </p>
              <label htmlFor="email" className="font-sans block">
                Username
              </label>
              <input
                type="name"
                placeholder="Username"
                className={`${
                  errors.name && touched.name && "border-red-500"
                } input-box_box font-sans`}
                id="email"
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="email" className="font-sans block">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className={`${
                  errors.email && touched.email && "border-red-500"
                } input-box_box font-sans`}
                id="email"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="password" className="font-sans">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className={`${
                  errors.password && touched.password && "border-red-500"
                } input-box_box font-sans block`}
                id="password"
                value={values.password}
                onChange={handleChange}
              />
              <label htmlFor="occupation" className="font-sans">
                Occupation
              </label>
              <input
                type="text"
                placeholder="What do you do for a living?"
                className="input-box_box font-sans"
                id="occupation"
                // value={values.occupation}
                onChange={handleChange}
              />
              <label htmlFor="profilePicture" className="font-sans">
                Profile Picture
              </label>
              <div className="cover-upload">
                <label htmlFor="profilePictureUpload" className="font-sans">
                  Cover Image
                </label>
                <Image
                  src={images.uploadImage}
                  alt="image upload image"
                  className="social-images"
                />
              </div>
              <input
                type="file"
                className="input-box_box font-sans"
                id="profilePictureUpload"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];
                  console.log(selectedFile);
                }}
              />
              <label htmlFor="country" className="font-sans">
                Country
              </label>
              <select
                name="country"
                className="input-box_box font-sans"
                required
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="socials-wrap">
                <div className="socials-one same-socials">
                  <FaSquareGooglePlus className="social_text_font" />
                </div>
                <div className="socials-two same-socials">
                  <BsLinkedin className="social_text_font" />
                </div>
                <div className="socials-three same-socials">
                  <FaXTwitter className="social_text_font" />
                </div>
              </div>
            </div>

            <div className="register-second-section">
              <h1 className="seller_text font-sans">
                I want to become a Seller
              </h1>
              <div className="toggle-seller">
                <p className="font-sans">Activate the seller account</p>
                <div className="toggle-container">
                  <input
                    type="checkbox"
                    id="check"
                    className="checkbox-input_"
                  />
                  <label htmlFor="check" className="button font-sans"></label>
                </div>
              </div>
              <label htmlFor="phoneNumber" className="font-sans">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="+234 8175 8960"
                className="input-box_box font-sans"
              />
              <label htmlFor="description" className="font-sans">
                Description
              </label>
              <textarea
                placeholder="A short description of yourself"
                className="input-box_box font-sans"
                cols={30}
                rows={10}
              ></textarea>
              <p className="_info_for_desc font-sans">
                <span>
                  <PiInfoDuotone className="icon_info_for_all_icons" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                molestiae aliquam aspernatur illo minus.
              </p>
              <p className="font-sans">
                Already have an Account?{" "}
                <Link href="/login">
                  <span className="anchor-text font-sans">Login</span>
                </Link>
              </p>
            </div>
            <button
              className="learn-btn btn btn-sign_in font-sans flex items-center"
              type="submit"
            >
              Register <BiSolidRegistered />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

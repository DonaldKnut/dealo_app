"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import "./page.css";
import Image from "next/image";
import { FaInfo, FaArrowLeft } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { styles } from "../styles/Styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
// import CustomModal from "../utils/CustomModal";
// import Verification from "../verification/page";
import { useRouter } from "next/navigation";

type Props = {
  route: string;
  setOpen: (open: boolean) => void;
  open: boolean;
  activeItem: any;
  setRoute?: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Login: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values.email, values.password);
      // setRoute("Verification")
      // router.push("/verification");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  // const setRoute = (route: string) => {
  //   props.setRoute(route);
  // };

  return (
    <div className="login_container_wrapper">
      <div className="container_wrap_container">
        <div className="login-container">
          <div className="form_wrapper_container">
            <div className="form-container">
              <form className="form relative" onSubmit={handleSubmit}>
                <Link href="/" className="link_my_link">
                  <span className="breadcrumbss_ link_my_link">
                    <FaArrowLeft className="arrow-left" />
                  </span>
                </Link>
                <h1 className="login-text freelance">Login</h1>
                <p className="font-sans">Welcome Back!</p>
                <label htmlFor="email" className="font-sans">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="loginmail@gmail.com"
                  className={`${
                    errors.email && touched.email && "border-red-500"
                  } input-box_box font-sans outline-none`}
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="font-sans">
                  Password
                </label>
                <div className="input_relative_box">
                  <input
                    type={!show ? "password" : "text"}
                    placeholder="password!@%"
                    className={`${
                      errors.password && touched.password && "border-red-500"
                    } input-box_box font-sans outline-none`}
                    // required
                    id="password"
                  />
                  {!show ? (
                    <AiOutlineEyeInvisible
                      className="absolute z-1 cursor-pointer toggle_password_eye"
                      size={20}
                      onClick={() => setShow(true)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="absolute z-1 cursor-pointer toggle_password_eye"
                      size={20}
                      onClick={() => setShow(false)}
                    />
                  )}
                </div>
                {errors.email && touched.email && (
                  <span className="text-red-500 pt-2 block">
                    {errors.email}
                  </span>
                )}
                <button
                  className="btn btn-sign_in font-sans"
                  type="submit"
                  value="Login"
                  // onClick={() => setRoute("Verification")}
                >
                  Sign in <RiLoginCircleFill />
                </button>
                <div className="oauth_login_wrapper">
                  <h3 className="font-sans">Or Resume with</h3>
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
                <div className="decription_container_wrapper">
                  <p className="font-sans">
                    <span>
                      {" "}
                      <FaInfo className="about-icon" />
                    </span>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <p className="anchor-shield font-sans">
                  Don't Have an Account?{" "}
                  <Link href="/register">
                    <span className="anchor-text">Signup</span>
                  </Link>
                </p>
              </form>
            </div>
            <div className="image-container">
              <Image
                src={require("../../../public/assets/yekpa_green.png")}
                alt="login-image"
              />
            </div>
          </div>
        </div>
        {/* <Link href="/" className="logo_container_link">
          <Image
            src="/assets/dealo-itself.png" // Adjust the path accordingly
            alt="dealo's logo"
            className="logo"
            width={100}
            height={40}
          />
        </Link> */}
      </div>
    </div>
  );
};

export default Login;

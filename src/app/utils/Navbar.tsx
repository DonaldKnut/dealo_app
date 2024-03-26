import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "./CustomModal";
import Login from "../login/page";
import { LuChevronDownCircle } from "react-icons/lu";

interface NavbarProps {
  route: string;
  setOpen: (open: boolean) => void;
  open: boolean;
  activeItem: any;
  setRoute?: (route: string) => void;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setRoute: (route: string) => void;
  // component: React.ComponentType<any>;
}

const Navbar: React.FC<NavbarProps> = ({
  route,
  setOpen,
  open,
  activeItem,
  setRoute,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  // const [route, setRoute] = useState("Login");
  const userImage =
    "https://res.cloudinary.com/dtujpq8po/image/upload/v1704475890/cydcfqcyolhrc3opawe7.jpg";

  const checkIfActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  const currentUser = {
    id: 1,
    username: "Mogbojuri",
    isSeller: true,
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfActive);
    return () => {
      window.removeEventListener("scroll", checkIfActive);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsOptionsDropdownOpen(true);
  };

  const toggleOptionsDropdown = () => {
    setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
  };

  const cloudinaryDealoImageUrl =
    "https://res.cloudinary.com/dtujpq8po/image/upload/v1704475472/gpxhvhbkfawgyej5dayw.png";

  return (
    <nav
      className={`navbar ${isOpen ? "is-active" : ""} ${
        isActive ? "navbar active" : "navbar"
      }`}
    >
      <div className="navbar-container font-sans">
        <div className="navbar-brand">
          <Link href="/">
            <Image
              src={cloudinaryDealoImageUrl} // Adjust the path accordingly
              alt="dealo's logo"
              className="logo"
              width={100}
              height={40}
            />
          </Link>
        </div>
        <div className="navbar-menu_sec">
          <div className="navbar-list_sec">
            <Link href="/education">
              <span className="navbar-item">Education</span>
            </Link>
            <Link href="/network">
              <span className="navbar-item">Network</span>
            </Link>
            <a href="/explore">
              <span className="navbar-item">Dealo Travels</span>
            </a>
            <Link href="/dealopay">
              <span className="navbar-item">Crypto</span>
            </Link>
            <div className="user-sec">
              <Image
                src={userImage} // Adjust the path accordingly
                alt="user logo"
                className="user-logo"
                width={30}
                height={30}
              />
              <span className="navbar-item" onClick={toggleUserDropdown}>
                {currentUser?.username}
              </span>
              <LuChevronDownCircle className="ml-2" />
            </div>
            {!currentUser?.isSeller && (
              <Link href="/register">
                <span className="navbar-item">
                  <Image
                    src={userImage}
                    alt="icon of a seller"
                    className="seller-icon"
                    width={20}
                    height={20}
                  />
                  Become a seller
                </span>
              </Link>
            )}
            {!currentUser && (
              <Link href="/about">
                <span className="navbar-item navbar-item_cta">Join</span>
              </Link>
            )}
            {currentUser && (
              <div className="user">
                {isUserDropdownOpen && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link href="/mygigs">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/gig.png"
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Gigs
                          </span>
                        </Link>
                        <Link href="/add">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/addgig.png"
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Add New Gigs
                          </span>
                        </Link>
                      </>
                    )}
                    <Link href="/orders">
                      <span className="link_for-small-icons">
                        <Image
                          src="/assets/orders.png" // Adjust the path accordingly
                          alt="icon for messaging"
                          className="small__icons"
                          width={20}
                          height={20}
                        />
                        Orders
                      </span>
                    </Link>
                    <Link href="/messages">
                      <span className="link_for-small-icons">
                        <Image
                          src="/assets/message.png"
                          alt="icon for messaging"
                          className="small__icons"
                          width={20}
                          height={20}
                        />
                        Messages
                      </span>
                    </Link>
                    <Link href="/">
                      <span className="link_for-small-icons">
                        <Image
                          src="/assets/logout.png"
                          alt="icon for logout"
                          className="small__icons"
                          width={20}
                          height={20}
                        />
                        Logout
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <div className="">
            <div className="mobile-menu">
              <Link href="/education">
                <span className="navbar-item">Education</span>
              </Link>
              <Link href="/explore">
                <span className="navbar-item">Dealo Travels</span>
              </Link>
              <Link href="/dealopay">
                <span className="navbar-item">Crypto</span>
              </Link>
              <Link href="/register" className="navbar-item special-link">
                <Image
                  src="https://res.cloudinary.com/dtujpq8po/image/upload/v1705310797/seller-icon_ptqd0i.png"
                  alt="icon of a seller"
                  className="seller-icon"
                  width={20}
                  height={20}
                />
                Become a seller
              </Link>
              <div className="user-sec user_sec">
                <Image
                  src={userImage}
                  alt="user logo"
                  className="user-logo"
                  width={30}
                  height={30}
                />

                <span className="navbar-item" onClick={toggleUserDropdown}>
                  {currentUser?.username}
                </span>
                <LuChevronDownCircle
                  onClick={toggleUserDropdown}
                  className="m-4"
                />
                {currentUser && (
                  <div className="user">
                    {isUserDropdownOpen && (
                      <div className="options">
                        {currentUser?.isSeller && (
                          <>
                            <Link href="/mygigs">
                              <span className="link_for-small-icons">
                                <Image
                                  src="/assets/gig.png" // Adjust the path accordingly
                                  alt="icon for messaging"
                                  className="small__icons"
                                  width={20}
                                  height={20}
                                />
                                Gigs
                              </span>
                            </Link>
                            <Link href="/add">
                              <span className="link_for-small-icons">
                                <Image
                                  src="/assets/addgig.png" // Adjust the path accordingly
                                  alt="icon for messaging"
                                  className="small__icons"
                                  width={20}
                                  height={20}
                                />
                                Add New Gigs
                              </span>
                            </Link>
                          </>
                        )}
                        <Link href="/orders">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/orders.png" // Adjust the path accordingly
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Orders
                          </span>
                        </Link>
                        <Link href="/messages">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/message.png" // Adjust the path accordingly
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Messages
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/logout.png" // Adjust the path accordingly
                              alt="icon for logout"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Logout
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <Link href="/login" className="navbar-item_cta-mobile">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="ham-menu_wrapper">
          <div
            className={`navbar-burger ${isOpen ? "is-active" : ""}`}
            onClick={toggleNavbar}
          >
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </div>
          {/* <ThemeSwitcher /> */}
          <Link href={"/login"}>
            <HiOutlineUserCircle
              className="user_icon_image_icon"
              onClick={() => {
                setOpen(true);
              }}
            />
          </Link>
        </div>
      </div>
      {isActive && (
        <>
          <hr />
          <div className="menu">
            <div className="menu-wrapper">
              <Link href="/" className="navbar-item">
                <span>Engineering & Law</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Graphics & Design</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Video & Animation</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Writing & Translation</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>AI Services</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Digital Marketing</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Music & Fashion</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Programming & Tech</span>
              </Link>
            </div>
          </div>
          <div>
            {route === "Login" && (
              <>
                {open && (
                  <CustomModal
                    component={Login}
                    activeItem={activeItem}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    open={open}
                  />
                )}
              </>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

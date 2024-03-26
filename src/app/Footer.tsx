"use client";
import React from "react";
import Style from "./Footer.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialGithub,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import { Reveal } from "./reveal";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className={Style.footer}>
        <div className={Style.footer_box}>
          <div className={`${Style.footer_box_social} font-sans`}>
            <Image
              src="/assets/dealo-itself.png"
              alt="dealo logo"
              width={99}
              height={38}
              className={Style.footer_image_logo}
            />
            <Reveal>
              <p>
                Dealo forges strategic partnerships with institutions,
                universities, vocational schools, and training centers to offer
                a platform for students and graduates to kickstart their
                careers.
              </p>
            </Reveal>
            <div className={Style.footer_link_container}>
              <div className={Style.company_unit}>
                <Reveal>
                  <h3>Company</h3>
                </Reveal>
                <div className={Style.company_features}>
                  <ul className={Style.company_link_wrapper}>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#" className={Style.company_link}>
                          About
                        </a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#" className={Style.company_link}>
                          Careers
                        </a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        {" "}
                        <a href="#" className={Style.company_link}>
                          Ventures
                        </a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        {" "}
                        <a href="#" className={Style.company_link}>
                          Grants
                        </a>
                      </li>
                    </Reveal>
                  </ul>
                </div>
              </div>
              <div className={Style.footer_box_section_two}>
                <div className={`${Style.footer_box_discover} font-sans`}>
                  <Reveal>
                    <h3>Discover</h3>
                  </Reveal>
                  <ul className={Style.company_link_mother}>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">Engineering & Law</a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">Graphics & Design</a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">Video & Animation</a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">Writing & Translation</a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">AI Services</a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">Digital Marketing</a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">Music & Audio</a>
                      </li>
                    </Reveal>
                    <Reveal>
                      <li className={Style.company_link_list}>
                        <a href="#">Programming & Tech</a>
                      </li>
                    </Reveal>
                  </ul>
                </div>
              </div>
              {/* <div className={Style.footer_box_help}>
                <h3>Help Center</h3>
                <ul className={Style.company_link_mother}>
                  <li className={Style.company_link_list}>
                    <a href="#">Engineering</a>
                  </li>
                  <li className={Style.company_link_list}>
                    <a href="#">Graphics & Design</a>
                  </li>
                  <li className={Style.company_link_list}>
                    <a href="#">Video & Animation</a>
                  </li>
                  <li className={Style.company_link_list}>
                    <a href="#">Writing & Translation</a>
                  </li>
                  <li className={Style.company_link_list}>
                    <a href="#">AI Services</a>
                  </li>
                  <li className={Style.company_link_list}>
                    <a href="#">Digital Marketing</a>
                  </li>
                  <li className={Style.company_link_list}>
                    <a href="#">Music & Audio</a>
                  </li>
                  <li className={Style.company_link_list}>
                    <a href="#">Programming & Tech</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className={Style.subscribe}>
            <h3 className="font-sans">Subscribe</h3>
            <div className={Style.subscribe_box}>
              <Reveal>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-sans"
                />
              </Reveal>
              <Reveal>
                <RiSendPlaneFill className={Style.subscribe_box_send} />
              </Reveal>
            </div>
            <div className={Style.footer_social}>
              <Reveal>
                <a href="#">
                  <TiSocialFacebook className={Style.socials} />
                </a>
              </Reveal>
              <Reveal>
                <a href="#">
                  <TiSocialLinkedin className={Style.socials} />
                </a>
              </Reveal>
              <Reveal>
                <a href="#">
                  <TiSocialTwitter className={Style.socials} />
                </a>
              </Reveal>
              <Reveal>
                <a href="#">
                  <TiSocialGithub className={Style.socials} />
                </a>
              </Reveal>
              <Reveal>
                <a href="#">
                  <TiSocialYoutube className={Style.socials} />
                </a>
              </Reveal>
              <Reveal>
                <a href="#">
                  <TiSocialInstagram className={Style.socials} />
                </a>
              </Reveal>
            </div>
            <div className={Style.subscribe_box_info}>
              <Reveal>
                <p className="font-sans">Bridging Talent, Breaking Borders</p>
              </Reveal>
            </div>
          </div>
        </div>
        <hr className={Style.footer_line} />
        <br></br>
        <div className={`${Style.footer_end} font-sans`}>
          <p>© 2023 Dealo Technologies, Inc</p>
          <ul className={Style.company_link_mother_footer_tags}>
            <li className={Style.company_link_mother_footer_tags}>
              <Reveal>
                <a href="#" className={Style.company_link}>
                  privacy policy
                </a>
              </Reveal>
            </li>
            <li className={Style.company_link_mother_footer_tags}>
              <Reveal>
                <a href="#" className={Style.company_link}>
                  Terms of service
                </a>
              </Reveal>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

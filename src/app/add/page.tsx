import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "../../../public/assets/images";
import "./page.css";
import { FaArrowLeft } from "react-icons/fa";
import { Reveal } from "../reveal";

type Props = {};

const add = (props: Props) => {
  return (
    <div className="add-container">
      <div className="add-container_wrapper">
        <Reveal>
          <Link href="/" className="link_my_link">
            <span className="breadcrumbs_ link_my_link">
              <FaArrowLeft className="arrow-left" />
            </span>
          </Link>
        </Reveal>
        <Reveal>
          <h1 className="gig-text">Add New Gig</h1>
        </Reveal>
        <div className="add-sections">
          <div className="add-left_section">
            <Reveal>
              <label htmlFor="">Title</label>
            </Reveal>
            <Reveal>
              <input
                type="text"
                placeholder="e.g. I will do something I'm really good at"
                className="add-input"
              />
            </Reveal>
            <Reveal>
              <label htmlFor="">Category</label>
            </Reveal>
            <select name="cats" id="cats" className="special-inputs">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="cover-upload">
              <label htmlFor="">Cover Image</label>
              <Image
                src={images.uploadImage}
                alt="upload icon"
                className="upload-image_icon"
              />
            </div>
            <input type="file" className="add-choose_input" />
            <div className="cover-upload">
              <label htmlFor="">Upload Images</label>

              <Image
                src={images.uploadImage}
                alt="upload icon"
                className="upload-image_icon"
              />
            </div>
            <input type="file" multiple className="add-choose_input" />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customers"
              className="textarea-style"
            ></textarea>
            <button className="add-btn">
              Create <i className="fa-solid fa-circle-plus"></i>
            </button>
          </div>
          <div className="add-right_section">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              placeholder="e.g One page web design"
              className="add-input"
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your service"
              className="textarea-style"
            ></textarea>
            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input type="number" min={1} className="add-input" />
            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} className="add-input" />
            <label htmlFor="">Add Features</label>
            <input
              type="text"
              placeholder="e.g page design"
              className="add-input"
            />
            <input
              type="text"
              placeholder="e.g file uploading"
              className="add-input"
            />
            <input
              type="text"
              placeholder="e.g setting up a domain"
              className="add-input"
            />
            <input
              type="text"
              placeholder="e.g hosting"
              className="add-input"
            />
            <label htmlFor="">Price</label>
            <input type="number" min={1} className="add-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default add;

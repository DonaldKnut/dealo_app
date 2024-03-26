import React from "react";
import "./page.css";
import Link from "next/link";
import images from "../../../public/assets/images";
import Image from "next/image";
import { FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="my-gigs">
      <div className="my-gig_container">
        <div className="gig-container_title">
          <div className="my-gig_wrapper">
            <Link href="/">
              <span className="breadcrumbs_ link_my_link">
                <FaArrowLeft className="arrow-left" />
              </span>
            </Link>
            <h1 className="gigs_text">Gigs</h1>
            <div className="new-gig_btn">
              <Link href="/add" className="learn-btn btn">
                Add <FaPlus />
              </Link>
            </div>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <FaTrash style={{ color: "red", cursor: "pointer" }} />
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <FaTrash style={{ color: "red", cursor: "pointer" }} />
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <FaTrash style={{ color: "red", cursor: "pointer" }} />
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <FaTrash style={{ color: "red", cursor: "pointer" }} />
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <FaTrash style={{ color: "red", cursor: "pointer" }} />
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <FaTrash style={{ color: "red", cursor: "pointer" }} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;

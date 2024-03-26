import React from "react";
import Image from "next/image";
import { PACKAGES } from "@/constant";
import { RiSearchLine } from "react-icons/ri";
import Link from "next/link";
import "./page.css";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbWorldQuestion } from "react-icons/tb";
import Button from "../explore/exploreComponents/Button/Button";
import { FaSquareArrowUpRight, FaArrowLeft } from "react-icons/fa6";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <div>
        <Link href="/explore" className="arrow_left_wrapper">
          <span className="breadcrumbs_ link_my_link">
            <FaArrowLeft className="arrow-left" />
          </span>
        </Link>
        <h3 className="bold-32 text-center freelance">Our Packages</h3>
        <p className="text-center font-sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
          perspiciatis ipsam, hic maxime doloribus blanditiis vel quam rerum
          quae assumenda.
        </p>
        <div className="package_mother_container_wrapper">
          {PACKAGES.map((card) => (
            <PackageItem
              title={card.title}
              key={card.title}
              path={card.path} // Use path instead of title for the image source
              price={card.price}
              desc={card.desc}
              wantedJobs={card.wantedJobs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type PackageItemProps = {
  path: string;
  title: string;
  price?: string;
  desc?: string;
  wantedJobs?: string[];
};

const PackageItem: React.FC<PackageItemProps> = ({
  title,
  path,
  price,
  desc,
  wantedJobs,
}) => {
  const halfDesc = desc ? desc.substring(0, desc.length / 2) : "";
  return (
    <div className="overflow-hidden border group package_wrapper">
      <div className="overflow-hidden relative">
        <Image
          src={path}
          alt={title}
          // layout="responsive"
          className="group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
          width={500}
          height={300}
        />
        <Link
          href="/"
          className="absolute top-1/2 left-1/2 h-14 w-14 bg-green-500 flex items-center rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500"
        >
          <div className="mx-auto">
            <RiSearchLine />
          </div>
        </Link>
      </div>
      <h2 className="font-sans text-2xl px-3 py-3 flex items-center gap-2">
        <TbWorldQuestion />
        {title}
      </h2>
      {price && (
        <p className="flex items-center gap-2 font-sans px-3">
          <RiMoneyDollarCircleFill className="text-2xl" />
          Price: {price}
        </p>
      )}
      {desc && <p className="font-sans py-3 px-3">{halfDesc}...</p>}
      {wantedJobs && (
        <div className="job_wrapper_wrap font-sans py-3 px-2">
          <p className="mr-3">Jobs:</p>
          <ul className="job_wrapper_lists">
            {wantedJobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="apply_btn_wrap">
        <Button
          type="button"
          title="Apply Now"
          icon={<FaSquareArrowUpRight />}
          variant="btn_green_rounded"
          to="/apply"
        />
      </div>
    </div>
  );
};

export default Page;

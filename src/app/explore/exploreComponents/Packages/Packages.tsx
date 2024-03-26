import React from "react";
import Image from "next/image";
import { PACKAGES } from "@/constant";
import { RiSearchLine } from "react-icons/ri";
import Link from "next/link";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Reveal } from "@/app/reveal";

type Props = {};

const Packages = (props: Props) => {
  return (
    <div>
      <div>
        <Reveal>
          <h3 className="bold-32 text-center">Our Packages</h3>
        </Reveal>
        <Reveal>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            perspiciatis ipsam, hic maxime doloribus blanditiis vel quam rerum
            quae assumenda.
          </p>
        </Reveal>
        <div>
          {PACKAGES.map((card) => (
            <PackageItem
              title={card.title}
              key={card.title}
              path={card.title}
              price={card.price}
              desc={card.desc}
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
  return (
    <div className="overflow-hidden rounded-tl-xl rounded-tr-xl border group">
      <div
        // style={{ position: 'relative', width: '100%', height: '200px' }}
        className="overflow-hidden relative"
      >
        <Image
          src={path}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
        />
        <Link
          href="/"
          className="absolute top-1/2 left-1/2 h-14 w-14 bg-green-500 flex items-center rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500"
        >
          <RiSearchLine />
        </Link>
      </div>
      <Reveal>
        <h2>{title}</h2>
      </Reveal>
      {price && (
        <Reveal>
          <p>
            <RiMoneyDollarCircleFill />
            Price: {price}
          </p>
        </Reveal>
      )}
      {desc && <p>{desc}</p>}
      {wantedJobs && (
        <div>
          <Reveal>
            <p>Wanted Jobs:</p>
          </Reveal>
          <ul>
            {wantedJobs.map((job, index) => (
              <Reveal>
                <li key={index}>{job}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PackageItem;

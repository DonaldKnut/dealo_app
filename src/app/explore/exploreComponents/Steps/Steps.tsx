import React from "react";
import "./Steps.css";
import { GiTwoCoins } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import { IoChevronForwardCircle } from "react-icons/io5";
import Image from "next/image";
import Button from "../Button/Button";

type Props = {};

const Steps = (props: Props) => {
  const flags = `https://res.cloudinary.com/dtujpq8po/image/upload/v1704478876/cryptoAssets/travelImages/flags__fvxk4f.png`;
  const airlineTicketImage = `https://res.cloudinary.com/dtujpq8po/image/upload/v1704478750/cryptoAssets/travelImages/airline-tickets_zsiqkv.png`;
  return (
    <div className="steps_wrapper_container">
      <div className="step_boxes">
        <MdFlight className="text-5xl coins" />
        <h2 className="font-sans text-green-800">
          Travel in premium Style
          <br />
          With our Luxury Escapade
        </h2>
        <Image
          src={airlineTicketImage}
          alt="flag"
          width={300}
          height={300}
          className="flags_of_nations"
        />
      </div>
      <div className="step_boxes">
        <GiTwoCoins className="text-5xl coins" />
        <h2 className="font-sans text-green-800">
          Let's finance your travels
          <br />
          while you pay us later.
        </h2>
        <Image
          src={flags}
          alt="flag"
          width={700}
          height={700}
          className="flags_of_nations"
        />
      </div>
      <div className="step_boxes odd_step_box">
        {/* <IoSchoolSharp className="text-5xl coins" /> */}
        <h2 className="font-sans text-green-800 mb-16 package_text text-2xl">
          Check Our Other
          <br />
          Packages
        </h2>
        {/* <Image
          src="/dealo_travels_alt.png"
          alt="flag"
          width={100}
          height={100}
          className="flags_of_nations fl_nations"
        /> */}
        <Button
          type="button"
          title="Check packages"
          icon={<IoChevronForwardCircle className="text-2xl" />}
          variant="btn_green_rounded"
          to="/packages"
        />
      </div>
    </div>
  );
};

export default Steps;

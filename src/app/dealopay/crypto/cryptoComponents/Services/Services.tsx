import React from "react";
import "./Services.css";
import cryptoImages from "../../../../../../public/cryptoAssets/cryptoImages";
import { ImageProps } from "next/image";
import Image from "next/image";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  // Add any other properties as needed
};

type ImageSource = string | StaticImageData;

interface ServiceCardProps {
  title: string;
  src: ImageSource;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, src, subtitle }) => (
  <div className="services-card_wrapper font-sans">
    <div>
      {typeof src === "string" ? (
        <img src={src} alt={`image of ${title}`} width={73} />
      ) : (
        <Image
          src={src.src}
          alt={`image of ${title}`}
          width={80}
          height={27} // Adjust the height accordingly
        />
      )}
    </div>
    <div>
      <h3 className="font-bold">{title}</h3>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 m-3 font-sans">
            <span className="freelance services">Services</span> that we
            <br />
            continue to improve.
          </h1>
        </div>
      </div>
      <div>
        <ServiceCard
          src={cryptoImages.securityImage}
          title="Guaranteed Security"
          subtitle="continue to improve Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ServiceCard
          src={cryptoImages.exchangeRates}
          title="Best Exchange Rates"
          subtitle="continue to improve Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ServiceCard
          src={cryptoImages.transactions}
          title="Fastest Transactions"
          subtitle="continue to improve Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
};

export default Services;

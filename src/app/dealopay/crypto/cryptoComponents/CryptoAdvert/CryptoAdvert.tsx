import React from "react";
import "./CryptoAdvert.css";
import cryptoImages from "../../../../../../public/cryptoAssets/cryptoImages";
import Image from "next/image";

const CryptoAdvert: React.FC = () => {
  return (
    <div>
      <>
        <div className="mobile-advert-crypto-container">
          <div className="mobile_advert-crypto-wrap font-sans">
            <div className="label-text_wrapper">
              <div className="label-text_wrapper-left">
                <Image
                  src={cryptoImages.wonderBoy}
                  alt="image of a phone with dealo"
                  className="crypto-mobile_img"
                />
              </div>
              <div className="label-text_wrapper-section_right">
                <h3 className="crypto-mobile-h3-text text-center">
                  Make Cryptocurrency payments using Ethereum.
                </h3>
                <h5 className="mobile-h5-text_crypto">
                  More options for payment.
                </h5>
                <p className="crypto-label-text_wrapper-text">
                  Explore Cryptocurrency in your payment options by offering
                  Ethereum to those who are willing to receive it as a payment
                  option.
                </p>
                {/* <div className="label-btn_wrapper">
                  <Link to="/signup">
                    <button className="label-btn">
                      Open a free account{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CryptoAdvert;

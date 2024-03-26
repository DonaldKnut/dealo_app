import React from "react";
import { RiPlayFill } from "react-icons/ri";
import "./Video.css";

type Props = {};

const Video = (props: Props) => {
  const videoAdverURL =
    "https://res.cloudinary.com/dtujpq8po/video/upload/v1704481023/cryptoAssets/travelImages/Full_Flight_Time_Lapse_g7i0os.mp4";
  return (
    <div className="relative h-[260px] md:h-[400px] xl:h-[500px] overflow-hidden travel_video_wrapper">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoAdverURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative inline-block cursor-pointer">
          <div className="h-16 w-16 bg-white rounded-full animate-ping absolute"></div>
          <div className="h-16 w-16 bg-green-500 text-white bold-32 flex items-center justify-center rounded-full cursor-pointer z-10">
            <RiPlayFill className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

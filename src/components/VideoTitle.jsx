import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[14%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black cursor-pointer p-4 px-16 text-xl rounded-lg hover:bg-opacity-70">
          ▶️Play
        </button>
        <button className="bg-white mx-2 text-black cursor-pointer p-4 px-16 text-xl rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import { TypeAnimation } from "react-type-animation";

import earth from "../assets/planet.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/fontawesome-free-solid";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black w-full h-screen gap-10 ">
      <video
        className="h-screen object-cover opacity-30 md:w-full  absolute md:block hidden"
        src={earth}
        muted
        autoPlay
        loop
      ></video>
      <video
        className="h-screen object-cover  md:w-full opacity-30 absolute md:hidden block"
        src={earth}
        muted
        autoPlay
        loop
      ></video>
      <div className="z-10 flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="font-extrabold text-3xl md:text-4xl text-white">
          All Of Your Hosting Needs Done
          <span className="text-yellow-400">
            <TypeAnimation
              sequence={[
                " Smarter!",
                2000, // Waits 1s
                " Faster!",
                2000, // Waits 2s
                " Better!",
                2000, // Waits 2s
                " Safer!",
                2000,
              ]}
              speed={10}
              deletionSpeed={10}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{}}
            />
          </span>
        </h1>
        <p className="text-sm md:text-md w-[60vw] text-center text-gray-400">
          TeroHost is a varied hosting provider, providing services from Domains
          to Game Servers to VPN's at a cheap price without any compromise in
          quality, all in one place.
        </p>
        <div className="flex flex-row items-center w-full justify-center gap-10 mt-20">
          <p className="mt-10 border-2 border-yellow-600  bg-yellow-600 hover:mb-10 absolute ml-40 hover:bg-slate-600 hover:border-slate-600 hover:border-2 pl-5 pr-5 text-white  text-xl p-2 shadow-md shadow-black hover:cursor-pointer transition-all ease-in-out duration-300 rounded-lg">
            Learn More
          </p>
          <p className="mt-10 border-2 border-yellow-600  bg-yellow-600 hover:mb-10 absolute mr-40 hover:bg-slate-600 hover:border-slate-600 hover:border-2 pl-5 pr-5 text-white  text-xl p-2 shadow-md shadow-black hover:cursor-pointer transition-all ease-in-out duration-300 rounded-lg">
            Buy Now <FontAwesomeIcon icon={faCartPlus as IconProp} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

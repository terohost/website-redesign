import { TypeAnimation } from "react-type-animation";
import bg from "../assets/bg.jpg";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black w-full h-screen gap-10 pt-10">
      <img
        className="h-screen  md:w-full opacity-30 absolute md:block hidden"
        src={bg}
      ></img>
      <img
        className="h-screen object-cover  md:w-full opacity-30 absolute md:hidden block"
        src={bg}
      ></img>
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
        <p className="mt-10 border-2 border-yellow-600 hover:border-yellow-500 bg-yellow-600 hover:bg-yellow-500 text-white  text-xl p-2 shadow-md shadow-black hover:cursor-pointer transition-all ease-in-out duration-300 rounded-lg">
          Start Hosting!
        </p>
      </div>
    </div>
  );
}

export default Hero;

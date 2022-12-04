import "./App.css";
import { TypeAnimation } from "react-type-animation";
import bg from "./assets/bg.jpg";
import { faUser, faChevronDown } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function App() {
  return (
    <div className="App bg-white h-screen pb-20">
      <NavBar />
      <Hero />
      <p className=""></p>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <div className="hidden md:flex flex-row items-center justify-between h-24 w-full fixed top-0 bg-transparent text-white verdana z-50 ">
        <div className="flex flex-row items-center justify-start w-[50%] h-[100%]">
          <h3 className="text-4xl ml-5">TeroHost</h3>
        </div>
        <div className="flex flex-row items-center justify-center gap-10 mr-5 w-[50%] h-[100%] text-xl">
          <h3 className="hover:cursor-pointer link link-underline link-underline-black pb-3 group relative">
            Hostings <FontAwesomeIcon icon={faChevronDown as IconProp} />
            <ul className="hidden group-hover:block absolute mt-10 text-white w-max rounded-lg left-0 text-lg">
              <li className="pb-2 pl-0">Minecraft Hosting</li>
              <li className="pb-2 pl-0">Discord Hosting</li>
            </ul>
          </h3>
          <h3 className="hover:cursor-pointer link link-underline link-underline-black pb-3 group">
            Domains <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </h3>
          <h3 className="hover:cursor-pointer link link-underline link-underline-black pb-3 group">
            Info <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </h3>
        </div>
        <div className="flex flex-row items-center justify-end gap-10 mr-5 w-[50%] h-[100%] text-xl">
          <FontAwesomeIcon icon={faUser as IconProp} />
          <h3 className="border-white border-2 p-2 rounded-lg text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 hover:border-2">
            Start Hosting
          </h3>
        </div>
      </div>
      <div className="flex md:hidden flex-col items-start h-fit w-screen">
        <div className="bg-[#112835] w-screen text-white ">
          <h2>TeroHost</h2>
        </div>

        <div className="w-[100vw] h-full bg-gradient-to-br from-[#2557c2] to-[#112835] verdana text-white flex flex-col justify-between items-center">
          <div className="w-full h-[50%] flex flex-col items-center justify-center">
            <h3 className="hover:cursor-pointer link link-underline link-underline-black  group relative text-2xl m-5">
              Hostings <FontAwesomeIcon icon={faChevronDown as IconProp} />
            </h3>
          </div>
          <div className="w-full h-[50%]">
            <h3 className="text-4xl ml-5 mt-5">TeroHost</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black w-full h-screen gap-10 pt-10">
      <img className="h-screen w-full opacity-30 absolute" src={bg}></img>
      <div className="z-10 flex flex-col items-center justify-center gap-10  ">
        <h1 className="font-extrabold text-5xl text-white">
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
        <p className="text-md w-[60vw] text-center">
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

export default App;

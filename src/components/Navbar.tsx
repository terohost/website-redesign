import React, { useEffect, useState } from "react";

import {
  faUser,
  faChevronDown,
  faStream,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./components.css";
function NavBar() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    console.log(nav);
  }, [nav]);
  return (
    <div>
      <div className="hidden md:flex flex-row items-center justify-between h-24 w-full fixed top-0 bg-transparent text-white verdana z-50 ">
        <div className="flex flex-row items-center justify-start w-[50%] h-[100%]">
          <h3 className="text-4xl ml-5">TeroHost</h3>
        </div>
        <div className="flex flex-row items-center justify-evenly gap-10 mr-5 w-[50%] h-[100%] text-xl">
          <h3
            className="hover:cursor-pointer link link-underline link-underline-black pb-3 group relative"
            onMouseOver={() => {
              let el = document.getElementById("hostList");
              el ? el.classList.remove("text-transparent") : "";
              el ? el.classList.add("bg-black") : "";
              el ? el.classList.remove("p-2") : "";
            }}
            onMouseOut={() => {
              let el = document.getElementById("hostList");
              el ? el.classList.add("text-transparent") : "";
              el ? el.classList.remove("bg-black") : "";
              el ? el.classList.add("p-2") : "";
            }}
            onClick={() => {
              let el = document.getElementById("hostList");
              el ? el.classList.toggle("text-transparent") : "";
              el ? el.classList.toggle("bg-black") : "";
              el ? el.classList.toggle("p-2") : "";
            }}
          >
            Hostings <FontAwesomeIcon icon={faChevronDown as IconProp} />
            <ul
              className={
                "absolute mt-5  text-transparent w-max rounded-lg text-lg transition-all ease-in-out duration-300 text-left"
              }
              id="hostList"
            >
              <li className=" pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Minecraft Hosting
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Discord Bot Hosting
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Web Hosting
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                VPN Hosting
              </li>
            </ul>
          </h3>
          <h3
            className="hover:cursor-pointer link link-underline link-underline-black pb-3 group relative"
            onMouseOver={() => {
              let el = document.getElementById("domainList");
              el ? el.classList.remove("text-transparent") : "";
              el ? el.classList.add("bg-black") : "";
              el ? el.classList.remove("p-2") : "";
            }}
            onMouseOut={() => {
              let el = document.getElementById("domainList");
              el ? el.classList.add("text-transparent") : "";
              el ? el.classList.remove("bg-black") : "";
              el ? el.classList.add("p-2") : "";
            }}
            onClick={() => {
              let el = document.getElementById("domainList");
              el ? el.classList.toggle("text-transparent") : "";
              el ? el.classList.toggle("bg-black") : "";
              el ? el.classList.toggle("p-2") : "";
            }}
          >
            Domains <FontAwesomeIcon icon={faChevronDown as IconProp} />
            <ul
              className={
                "absolute mt-5  text-transparent w-max rounded-lg text-lg transition-all ease-in-out duration-300 text-left"
              }
              id="domainList"
            >
              <li className=" pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Search Domain
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Register Domain
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Transfer Domain
              </li>
            </ul>
          </h3>
          <h3
            className="hover:cursor-pointer link link-underline link-underline-black pb-3 group relative"
            onMouseOver={() => {
              let el = document.getElementById("infoList");
              el ? el.classList.remove("text-transparent") : "";
              el ? el.classList.add("bg-black") : "";
              el ? el.classList.remove("p-2") : "";
            }}
            onMouseOut={() => {
              let el = document.getElementById("infoList");
              el ? el.classList.add("text-transparent") : "";
              el ? el.classList.remove("bg-black") : "";
              el ? el.classList.add("p-2") : "";
            }}
            onClick={() => {
              let el = document.getElementById("infoList");
              el ? el.classList.toggle("text-transparent") : "";
              el ? el.classList.toggle("bg-black") : "";
              el ? el.classList.toggle("p-2") : "";
            }}
          >
            Info <FontAwesomeIcon icon={faChevronDown as IconProp} />
            <ul
              className={
                "absolute mt-5  text-transparent w-max rounded-lg text-lg transition-all ease-in-out duration-300 text-left"
              }
              id="infoList"
            >
              <li className=" pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                About Us
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Why Us
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Contact Us
              </li>
            </ul>
          </h3>
        </div>
        <div className="flex flex-row items-center justify-end gap-10 mr-5 w-[50%] h-[100%] text-xl">
          <FontAwesomeIcon icon={faUser as IconProp} />
          <h3 className="border-white border-2 p-2 rounded-lg text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 hover:border-2">
            Start Hosting
          </h3>
        </div>
      </div>
      <div
        className={
          nav
            ? "bg-[#00102E] w-[80vw] h-[800px] z-50 md:hidden block  text-white transition-all ease-in-out duration-500 absolute"
            : "bg-[#00102E] w-[0vw]  h-[800px] z-50     md:hidden block    text-transparent transition-all ease-in-out duration-500 absolute"
        }
        id="nav"
      >
        <div className="flex flex-row items-center justify-between h-[10%] w-full">
          <h2 className="ml-5 text-2xl">TeroHost</h2>
          <FontAwesomeIcon
            icon={faTimes as IconProp}
            className="mr-5 text-xl font-thin"
            onClick={() => {
              setNav(false);
            }}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-10 mr-5 w-full h-fit mt-10">
          <h3
            className="hover:cursor-pointer pb-3 group relative ml-7 text-xl "
            onClick={() => {
              let el = document.getElementById("hostListM");
              el ? el.classList.toggle("text-transparent") : "";
              el ? el.classList.toggle("absolute") : "";
            }}
          >
            Hostings <FontAwesomeIcon icon={faChevronDown as IconProp} />
            <ul
              className={
                "absolute mt-5 w-max rounded-lg text-lg  text-left text-transparent p-2"
              }
              id="hostListM"
            >
              <li className=" pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Minecraft Hosting
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Discord Bot Hosting
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Web Hosting
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                VPN Hosting
              </li>
            </ul>
          </h3>

          <h3
            className="hover:cursor-pointer pb-3 group relative ml-7 text-xl"
            onClick={() => {
              let el = document.getElementById("domainListM");
              el ? el.classList.toggle("text-transparent") : "";
              el ? el.classList.toggle("absolute") : "";
            }}
          >
            Domains <FontAwesomeIcon icon={faChevronDown as IconProp} />
            <ul
              className={
                "absolute mt-5 w-max rounded-lg text-lg  text-left text-transparent p-2"
              }
              id="domainListM"
            >
              <li className=" pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Search Domain
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Register Domain
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Transfer Domain
              </li>
            </ul>
          </h3>
          <h3
            className="hover:cursor-pointer pb-3 group relative ml-7 text-xl"
            onClick={() => {
              let el = document.getElementById("infoListM");
              el ? el.classList.toggle("text-transparent") : "";
              el ? el.classList.toggle("absolute") : "";
            }}
          >
            Info <FontAwesomeIcon icon={faChevronDown as IconProp} />
            <ul
              className={
                "absolute mt-5 w-max rounded-lg text-lg  text-left text-transparent p-2"
              }
              id="infoListM"
            >
              <li className=" pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                About Us
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Why Us
              </li>
              <li className="  pb-2 pl-0 hover:scale-100 scale-90 transition-all ease-in-out duration-300">
                Contact Us
              </li>
            </ul>
          </h3>
        </div>
      </div>

      <div className="flex md:hidden flex-row items-center justify-between h-fit w-screen bg-black text-white verdana pt-10 fixed top-0 z-30">
        <div className="w-[35%] flex flex-row items-center justify-start ">
          <FontAwesomeIcon
            icon={faStream as IconProp}
            className="ml-5 z-30"
            onClick={() => {
              if (nav === false) setNav(true);
            }}
          />
        </div>
        <div className="w-[65%] flex flex-row items-center justify-between">
          <h3 className=" text-2xl">TeroHost</h3>
          <FontAwesomeIcon icon={faUser as IconProp} className="mr-5" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

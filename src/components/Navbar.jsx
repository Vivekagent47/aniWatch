import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Bookmark from "../assets/Bookmark";
import Event from "../assets/Event";
import File from "../assets/File";
import Home from "../assets/Home";
import Profile from "../assets/Profile";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/home") setActiveNav("home");
    else if (path === "/profile") setActiveNav("profile");
    else if (path === "/events") setActiveNav("events");
    else if (path === "/booked") setActiveNav("booked");
    else if (path === "/fav") setActiveNav("fav");
  }, [location]);

  return (
    <div className="bg-white z-[9999] w-full flex justify-around p-4 fixed bottom-0 left-0 right-0 drop-shadow-upper shadow-light-gray rounded-tl-[50px] rounded-tr-[50px]">
      <div className="p-2 flex justify-center items-center flex-col w-16 overflow-hidden">
        <Profile
          width="16px"
          height="16px"
          classSvg={`${
            activeNav === "profile" ? "fill-dark-blue" : "fill-gray"
          }`}
        />
        <span
          className={`${
            activeNav === "profile" ? "text-dark-blue" : "text-gray"
          } text-xs font-semibold mt-2`}
        >
          Profile
        </span>
      </div>
      <div className="p-2 flex justify-center items-center flex-col w-16 overflow-hidden">
        <Event
          width="16px"
          height="16px"
          classSvg={`${
            activeNav === "events" ? "fill-dark-blue" : "fill-gray"
          } rotate-90`}
        />
        <span
          className={`${
            activeNav === "events" ? "text-dark-blue" : "text-gray"
          } text-xs font-semibold mt-2`}
        >
          Events
        </span>
      </div>
      <div className="p-2 flex justify-center items-center flex-col w-16 overflow-hidden">
        <Home
          width="16px"
          height="16px"
          classSvg={`${activeNav === "home" ? "fill-dark-blue" : "fill-gray"}`}
        />
        <span
          className={`${
            activeNav === "home" ? "text-dark-blue" : "text-gray"
          } text-xs font-semibold mt-2`}
        >
          Home
        </span>
      </div>
      <div className="p-2 flex justify-center items-center flex-col w-16 overflow-hidden">
        <File
          width="16px"
          height="16px"
          classSvg={`${
            activeNav === "booked" ? "fill-dark-blue" : "fill-gray"
          }`}
        />
        <span
          className={`${
            activeNav === "booked" ? "text-dark-blue" : "text-gray"
          } text-xs font-semibold mt-2`}
        >
          Booked
        </span>
      </div>
      <div className="p-2 flex justify-center items-center flex-col w-16 overflow-hidden">
        <Bookmark
          width="16px"
          height="16px"
          classSvg={`${activeNav === "fav" ? "fill-dark-blue" : "fill-gray"}`}
        />
        <span
          className={`${
            activeNav === "fav" ? "text-dark-blue" : "text-gray"
          } text-xs font-semibold mt-2`}
        >
          Favorite
        </span>
      </div>
    </div>
  );
};

export default Navbar;

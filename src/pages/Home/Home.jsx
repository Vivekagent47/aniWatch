import React from "react";
import Calender from "../../assets/Calender";
import Search from "../../assets/Search";
import RoomLock from "../../assets/RoomLock";
import Map from "../../assets/Map";
import Heart from "../../assets/Heart";
import Card1 from "../../assets/Card1.webp";
import Star from "../../assets/Star";

const Home = () => (
  <div className="bg-light-gray pb-24">
    <div className="bg-white p-4 flex flex-col">
      <span className="text-blue text-sm leading-5">
        Hello, <span className="font-semibold text-sm leading-5">Vivek!</span>
      </span>
      <span className="text-dark-blue text-xl font-bold mt-2 mb-4">
        More Productive
        <br /> with Comfortable Place
      </span>
      <div className="flex items-center justify-center bg-light-gray p-4 rounded-lg sticky">
        <Search classSvg="fill-dark-blue mr-5" width="16px" height="16px" />
        <input
          className="flex-1 text-sm bg-light-gray rounded-lg w-full focus:outline-none text-gray"
          type="text"
          placeholder="Comfortable Coworking Space?"
        />
      </div>
    </div>

    <div className="flex justify-between px-4 py-4">
      <div className="bg-white p-2 flex justify-center items-center flex-col rounded-lg h-[90px] w-[90px]">
        <Map height="36px" width="36px" />
        <span className="text-[9px] text-dark-blue mt-2 font-bold">
          Nearest Place
        </span>
      </div>
      <div className="bg-white p-2 flex justify-center items-center flex-col rounded-lg h-[90px] w-[90px]">
        <RoomLock height="36px" width="36px" />
        <span className="text-[9px] text-dark-blue mt-2 font-bold">
          Book Room
        </span>
      </div>
      <div className="bg-white p-2 flex justify-center items-center flex-col rounded-lg h-[90px] w-[90px]">
        <Calender height="36px" width="36px" />
        <span className="text-[9px] text-dark-blue mt-2 font-bold">
          Add Event
        </span>
      </div>
    </div>

    <div className="p-4 space-y-4">
      <div className="p-2 flex items-start justify-start bg-white rounded-lg">
        <img
          className=" w-1/3 h-[110px] object-cover rounded-lg"
          src={Card1}
          alt="Office preview"
        />
        <div className="flex flex-1 align-top text-center sm:text-left h-full ml-2">
          <div className="flex flex-col relative flex-1 space-y-2 justify-start items-start text-left">
            <span className="text-dark-blue font-bold text-xs">
              Kognitif Coffee & Co-working Space
            </span>
            <p className="text-gray text-[10px] overflow-hidden text-ellipsis whitespace-nowrap w-48">
              Jl. Duwet III No.2, Karangasem, Kec. Laweyan New York, United
              State
            </p>
            <div className="flex justify-start items-center">
              <Star width="12px" height="12px" classSvg="fill-yellow" />
              <span className="ml-1 text-[9px] text-gray">4.5</span>
            </div>
            <span className="text-blue font-bold text-sm">$50-$150</span>
          </div>
          <div className=" relative">
            <Heart width="16px" height="16px" classSvg="stroke-gray" />
          </div>
        </div>
      </div>

      <div className="p-2 flex items-start justify-start bg-white rounded-lg">
        <img
          className=" w-1/3 h-[110px] object-cover rounded-lg"
          src={Card1}
          alt="Office preview"
        />
        <div className="flex flex-1 align-top text-center sm:text-left h-full ml-2">
          <div className="flex flex-col relative flex-1 space-y-2 justify-start items-start text-left mr-1">
            <span className="text-dark-blue font-bold text-xs">
              Cognitive Coffee & Co-working Space
            </span>
            <p className="text-gray text-[10px] overflow-hidden text-ellipsis whitespace-nowrap w-48">
              Jl. Duvet III No.2, Karangasem, Kec. Lawman New York, United State
            </p>
            <div className="flex justify-start items-center">
              <Star width="12px" height="12px" classSvg="fill-yellow" />
              <span className="ml-1 text-[9px] text-gray">4.5</span>
            </div>
            <span className="text-blue font-bold text-sm">$50-$150</span>
          </div>
          <div className="relative">
            <Heart width="16px" height="16px" classSvg="fill-red" />
          </div>
        </div>
      </div>

      <div className="p-2 flex items-start justify-start bg-white rounded-lg">
        <img
          className=" w-1/3 h-[110px] object-cover rounded-lg"
          src={Card1}
          alt="Office preview"
        />
        <div className="flex flex-1 align-top text-center sm:text-left h-full ml-2">
          <div className="flex flex-col relative flex-1 space-y-2 justify-start items-start text-left">
            <span className="text-dark-blue font-bold text-xs">
              Kognitif Coffee & Co-working Space
            </span>
            <p className="text-gray text-[10px] overflow-hidden text-ellipsis whitespace-nowrap w-48">
              Jl. Duwet III No.2, Karangasem, Kec. Laweyan New York, United
              State
            </p>
            <div className="flex justify-start items-center">
              <Star width="12px" height="12px" classSvg="fill-yellow" />
              <span className="ml-1 text-[9px] text-gray">4.5</span>
            </div>
            <span className="text-blue font-bold text-sm">$50-$150</span>
          </div>
          <div className=" relative">
            <Heart width="16px" height="16px" classSvg="fill-red" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

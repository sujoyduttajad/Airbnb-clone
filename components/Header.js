import Image from "next/image";
import React, { useState } from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import airbnbIcon from "../images/airbnb-icon.svg"
import airbnb from "../images/airbnb-ar21.svg"
import Dropdown from "./Dropdown";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const searchRouter = () => {
    if (router.pathname === "/") {
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests,
        },
      });
    } else {
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests,
        },
      });
      setSearchInput("");
    }
  };

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 user-select-none">
      {/* Left Container */}
      <div
        
        className="relative flex items-center justify-start h-10 my-auto"
      >
        <div className="md:flex lg:flex hidden">
          <Image
            src={airbnb}
            width={"100%"}
            height={"100%"}
            objectFit="contain"
            objectPosition="left"
            className="cursor-pointer"
            onClick={() => router.push("/")}
            alt="Airbnb logo"
          />
        </div>
        <div className="flex lg:hidden md:hidden w-fit">
          <Image 
            src={airbnbIcon}
            objectPosition="left"
            objectFit="contain"
            width='40px'
            height='50px'
            className="cursor-pointer"
            onClick={() => router.push("/")}
            alt="Airbnb logo"
          />
        </div>
      </div>

      {/* Middle Container - Search bar */}
      <div
        className={`flex items-center col-span-2 md:col-auto lg:col-auto justify-between border-2 rounded-full
        py-2 shadow-sm hover:border-red-400 ${
          searchInput ? "border-red-400" : ""
        }`}
      >
        <input
          className="flex-grow pl-5 bg-transparent text-sm text-gray-500 
          placeholder-gray-400 outline-none"
          type="text"
          placeholder={placeholder || "Start your search"}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white 
          rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right Container */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p
          className="hidden font-medium md:inline cursor-pointer py-2 px-3 mx-1
         hover:bg-gray-100 rounded-full user-select-none"
        >
          Become a host
        </p>
        <div className="md:flex lg:flex hidden">
          <GlobeAltIcon className="h-6 cursor-pointer hover:bg-gray-100 rounded-full" />
        </div>
        <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
          className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-xl 
        transition duration-150 cursor-pointer"
        >
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </button>
        <Dropdown />
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl text-gray-800 pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 text-gray-600" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow hover:bg-gray-100 py-2 rounded-full
               text-gray-500 text-xl transition duration-450 user-select-none"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              onClick={searchRouter}
              className="flex-grow hover:bg-gray-100 py-2 rounded-full 
               text-red-400 text-xl transition duration-450 user-select-none"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

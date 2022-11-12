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

const Header = () => {
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

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left Container */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center justify-start h-10 my-auto"
      >
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="cursor-pointer"
          />
      </div>

      {/* Middle Container - Search bar */}
      <div
        className={`flex items-center justify-between md:border-2 rounded-full
        py-2 md:shadow-sm hover:border-red-400 ${
          searchInput ? "border-red-400" : ""
        }`}
      >
        <input
          className="flex-grow pl-5 bg-transparent text-sm text-gray-500 
          placeholder-gray-400 outline-none"
          type="text"
          placeholder="Start your search"
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
        <GlobeAltIcon className="h-6 cursor-pointer hover:bg-gray-100 rounded-full" />
        <div
          className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-xl 
        transition duration-150 cursor-pointer"
        >
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            className="font-sans"
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

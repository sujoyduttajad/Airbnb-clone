import Image from "next/image";
import React from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left Container */}
      <div className="relative flex items-center justify-start h-10 my-auto">
        <Link href="/">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Middle Container - Search bar */}
      <div
        className="flex items-center justify-between md:border-2 rounded-full
        py-2 md:shadow-sm"
      >
        <input
          className="flex-grow pl-5 bg-transparent text-sm text-gray-500 placeholder-gray-400 outline-none"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white 
          rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right Container */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p className="hidden font-medium md:inline cursor-pointer py-2 px-3 hover:bg-gray-100 rounded-full">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:bg-gray-100 rounded-full" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-xl 
        transition duration-150 cursor-pointer">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
    </div>
  );
};

export default Header;

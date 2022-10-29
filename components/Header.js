import Image from "next/image";
import React from "react";
import { SearchIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div className="sticky top-0 z-100 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left Container */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle Container - Search bar */}
      <div className="flex">
        <input type="text" placeholder="Start your search" />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>

      {/* Right Container */}
      <div></div>
    </div>
  );
};

export default Header;

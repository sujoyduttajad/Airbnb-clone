import Image from "next/image";
import React from "react";

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
      <div>
        <input type="text" />
      </div>

      {/* Right Container */}
      <div></div>
    </div>
  );
};

export default Header;

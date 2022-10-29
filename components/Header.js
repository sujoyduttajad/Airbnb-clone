import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-100 grid grid-cols-3 bg-white shadow-md py-5 px-5">

      {/* Left Container */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle Container */}
      <div></div>

      {/* Right Container */}
      <div></div>
    </div>
  );
};

export default Header;

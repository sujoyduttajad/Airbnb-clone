import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const InfoCard = ({
  img,
  title,
  location,
  description,
  star,
  price,
  noOfGuests,
}) => {
  const calcTotal = () => {
    return price * noOfGuests;
  };

  return (
    <div className="flex-col infocard-container md:flex-row lg:flex-row ">
      <div className="relative w-100 h-80 lg:h-24 lg:w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow lg:pl-5 md:pl-5 sm:pl-3 pt-3">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500 indent-px tracking-wider">
            {location}
          </p>
          <HeartIcon className="h-7 cursor-pointer text-gray-500" />
        </div>

        <h4 className="text-xl w-fit text-[#212529] tracking-wide font-semibold">
          {title}
          <div className="border-b w-100 pt-2" />
        </h4>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <div className="flex items-center">
            <StarIcon className="h-5 text-red-400 pr-2" />
            <p className="font-medium text-sm text-gray-500">{star}</p>
          </div>

          <div className="flex flex-col justify-between items-end">
            <p className="text-lg lg:text-2xl text-gray-900 font-semibold pb-2">
              £{price} / night
            </p>
            <p className="text-right text-base text-gray-500 font-medium">
              £{calcTotal()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

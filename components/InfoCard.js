import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const InfoCard = ({
  img,
  title,
  neighborhood,
  description,
  star,
  price,
  noOfGuests,
  location,
}) => {
  const calcTotal = () => {
    return price * noOfGuests;
  };

  return (
    <div className="flex-col infocard-container md:flex-row lg:flex-row lg:pr-5">
      <div className="relative lg:h-52 lg:w-80 md:h-52 md:w-80 h-80 w-100 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow lg:pt-0 md:pt-0 lg:pl-5 md:pl-5 sm:pl-3 pt-3">
        <div className="flex justify-between user-select-none">
          <p className="text-sm text-gray-500 indent-px tracking-wider">
            {neighborhood}{" "}{location}
          </p>
          <HeartIcon className="h-7 cursor-pointer text-gray-500" />
        </div>

        <h4 className="text-lg lg:text-xl md:text-xl w-fit text-[#212529] tracking-wide font-semibold">
          {title}
          <div className="border-b w-100 pt-2" />
        </h4>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <div className="flex items-center">
            <StarIcon className="h-5 text-red-400 pr-2" />
            <p className="font-medium text-sm text-gray-500">{star}</p>
          </div>

          <div className="flex flex-col justify-between items-end user-select-none">
            <p className="text-lg lg:text-2xl text-gray-900 font-semibold pb-2">
              £{price} / night
            </p>
            <p className="text-right text-base text-gray-500 font-medium">
              £{calcTotal()} total
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

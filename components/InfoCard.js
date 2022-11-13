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
  total,
}) => {
  return (
    <div className="infocard-container">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer text-gray-500" />
        </div>

        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400 pr-2" />
            <p className="font-medium text-sm text-gray-500">{star}</p>
          </p>

          <div className="flex flex-col justify-between items-end">
            <p className="text-lg lg:text-2xl text-gray-900 font-semibold pb-2">{price}</p>
            <p className="text-right text-base text-gray-500 font-extralight ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
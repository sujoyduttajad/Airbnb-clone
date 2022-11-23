import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div 
        className="flex items-center m-2 mt-5 pl-3 py-2 space-x-4 rounded-xl cursor-pointer 
        hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out no-flickr"
    >
      {/* Left container */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt="Location logo" />
      </div>
      {/* Right container */}
      <div>
        <h2 className="no-flickr font-medium">{location}</h2>
        <h3 className="text-gray-500 no-flickr">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;

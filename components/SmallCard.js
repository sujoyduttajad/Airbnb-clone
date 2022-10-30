import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center">
      {/* Left container */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" objectFit="" className="rounded-lg" />
      </div>
      {/* Right container */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;

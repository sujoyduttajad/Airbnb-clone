import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="no-flickr cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" alt="Type of Airbnb Image" />
      </div>
      <h3 className="no-flickr text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;

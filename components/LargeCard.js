import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative my-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-11 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="font-normal text-gray-600">{description}</p>
        <button 
            className="cursor-pointer text-sm text-white bg-gray-800 
            px-4 py-2 rounded-lg mt-5 active:scale-90 transition duration-150"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;

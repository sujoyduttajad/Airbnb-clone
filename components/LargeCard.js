import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section>
        <div className="relative h-96 min-w-[300px]">
            <Image 
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"  
            />
        </div>
        <div></div>
    </section>   
  )
}

export default LargeCard
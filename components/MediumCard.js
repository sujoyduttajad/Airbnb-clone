import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="relative h-80 w-80">
        <Image 
            src={img}
            layout="fill"

        />
    </div>
  )
}

export default MediumCard
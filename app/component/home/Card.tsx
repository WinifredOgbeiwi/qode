import { IMAGES } from "@/app/util/imports"
import { CardProps } from "@/types"
import Image from "next/image"


const Card:React.FC<CardProps> = ({background, image}) => {
  return (
    <div className={`overflow-hidden object-cover w-fit rounded-md border-white ${background}`}>
   <Image src={image} alt="GH" className="object-cover"/>
    </div>
  )
}

export default Card
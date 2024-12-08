import { HeadingProps } from "@/types"

const Heading:React.FC<HeadingProps> = ({headingText,paragraphText,color}) => {
  return (
    <>
       <h2 className={`text-3xl md:text-4xl font-bold text-center ${color}`}>{headingText}</h2>
       <p className={`text-center mt-3 ${color}`}>{paragraphText}</p>
    </>
  )
}

export default Heading;
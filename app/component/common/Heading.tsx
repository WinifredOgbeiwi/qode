import { HeadingProps } from "@/types"

const Heading:React.FC<HeadingProps> = ({headingText,paragraphText}) => {
  return (
    <>
       <h2 className="text-3xl font-bold text-center">{headingText}</h2>
       <p className="text-center mt-3">{paragraphText}</p>
    </>
  )
}

export default Heading;
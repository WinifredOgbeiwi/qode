import { InputProps } from "@/types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  id,
  onchange,
  value,
  // passwordVisibility,
  // setPasswordVisibility,
  disabled,
}) => {
  return (
    <div className="flex flex-col relative ">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={`w-full  mx-auto px-3 duration-200 bg-color-white  focus:border-color-primary6 py-3 sm:py-4 border-none rounded-lg outline-none mb-6 ${
          disabled ? "text-gray-500" : "text-black"
        }`}
        onChange={onchange}
        value={value}
        required
        disabled={disabled}
      />

      {/* {id === "password" && (
        <div
          className="absolute right-2 top-[50px] hover:cursor-pointer"
          onClick={() => setPasswordVisibility(!passwordVisibility)}
        >
          {!passwordVisibility ? <FaEye /> : <FaEyeSlash />}
        </div>
      )} */}
    </div>
  );
};
export default Input;

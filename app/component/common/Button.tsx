import { ButtonProps } from "@/types";


const Button: React.FC<ButtonProps> = ({ label, variant, width,onclick }) => {
  return (
  <button
  onClick={onclick}
      className={`${width} hover:scale-105 text-xl font-semibold  py-3 px-7 rounded-md  ${
        variant === "primary" ? "bg-color-primary3 text-white  border-color-primary3 border-2 "  : "bg-color-white border-color-primary3 border-2"
      } inline-block text-center`}>
      {label}
    </button>

  );
};

export default Button;

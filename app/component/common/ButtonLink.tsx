import { LinkProps } from "@/types";
import Link from "next/link";

const ButtonLink: React.FC<LinkProps> = ({ href, label, variant, width }) => {
  return (
  <Link
      href={href}
      className={`${width} hover:scale-105  py-2 px-7 rounded-md  ${
        variant === "primary" ? "bg-[#5956E9] text-white  border-[#5956E9] border-2 "  : "bg-color-50 border-black border-2 bg-color-white"
      } inline-block text-center`}>
      {label}
    </Link>

  );
};

export default ButtonLink;

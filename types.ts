import { StaticImageData } from "next/image";

export interface ButtonProps {
    label: string;
    onclick:() => void;
    variant: 'primary' | 'secondary';
    width?: string;

}
export interface InputProps {
  label: string;
  type: 'text' | 'password';
  id: string;
  placeholder: string;
onchange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  value?: string;
  passwordVisibility?: boolean;
  setPasswordVisibility?: (value: boolean) => void;
  disabled?: boolean;
}

export interface LinkProps {
    href?: string;
    label: string;
    variant:'primary' | 'secondary';
    width?: string;
    onclick?:() => void;
}

export interface HeadingProps {
  headingText: string;
  paragraphText:string;
}

export interface CardProps{
  background:string;
    image:string | StaticImageData; 
}

export interface AuthContextProps {
  email:string;
  password:string;
}
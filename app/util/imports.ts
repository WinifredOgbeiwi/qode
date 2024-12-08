import Logo from "../../public/logo.png";
import Background from "../../public/container.png";
import LaptopBoy from "../../public/images/test.png";
import Heropic1 from "../../public/images/hero-pic1.png";
import Feature from "../../public/images/feature.png";
import BrainBoy from "../../public/images/brain-boy.png";
import PurpleBG from "../../public/images/purple-bg.png";
export const IMAGES = {
  Logo,
  Background,
  Heropic1,
  LaptopBoy,
  Feature,
  BrainBoy,
  PurpleBG
};

export const ROUTES = {
  // PUBLIC ROUTES
  HOME: "/",
  ABOUT: "/#about",
  CONTACT: "/#contact",

  // AUTHENTICATION
  REGISTER: "/register",
  LOGIN: "/login",
  CONFIRM_EMAIL: "/confirm-email",
  FORGOT_PASSWORD: "/forgot-password",

  // Protected routes
  DASHBOARD: "/dashboard",
};

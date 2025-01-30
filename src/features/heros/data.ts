import { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right.png";
import imageRightPng2 from "@/images/hero-right-2.png";
import imageRightPng3 from "@/images/hero-right-3.png";

interface HeroDataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO_DATA: HeroDataType[] = [
  {
    image: imageRightPng2,
    heading: "Sulfur8 has been trusted since 1948",
    subHeading: "Proven Medicated Formula 🔥",
    btnText: "Learn more",
    btnLink: "/products",
  },
  {
    image: imageRightPng3,
    heading: "Recognized for its effective anti-dandruff properties",
    subHeading: "Medicated hair and scalp care brand",
    btnText: "Learn more",
    btnLink: "/products",
  },
  {
    image: imageRightPng,
    heading: "Sulfur8’s sulfur-based formulation tackles the root causes of dandruff",
    subHeading: "Sulfur8 stands out from regular hair care products",
    btnText: "Learn more",
    btnLink: "/products",
  },
  {
    image: imageRightPng,
    heading: "Proven anti-fungal and anti-inflammatory, combats dandruff at the root",
    subHeading: "Sulfur8’s active ingredient, sulfur",
    btnText: "Learn more",
    btnLink: "/products",
  },
];

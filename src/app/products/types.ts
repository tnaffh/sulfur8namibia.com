import { StaticImageData } from "next/image";

export interface Sulfur8Category {
  id: number;
  name: string;
  image: StaticImageData | string | null;
}

export interface Sulfur8Variant {
  id: number;
  name: string;
  image: StaticImageData | string | null;
}

interface Sulfur8ProductDetails {
  descriptionText: string[];
  benefits: string[];
  howToUse: string[];
}

export interface Sulfur8Product {
  id: number;
  name: string;
  description: string;
  productDetails: Sulfur8ProductDetails;
  price: number;
  wholesalePrice?: number;
  image: StaticImageData | string | null;
  category: Sulfur8Category;
  categories: Sulfur8Category[];
  tags: string[];
  variants: Sulfur8Variant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  rating?: string;
  numberOfReviews?: number;
}

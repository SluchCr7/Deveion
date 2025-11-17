import { IconType } from "react-icons";

export type Package = {
  id: number;
  name: string;
  price: number;
  features: string[];
  isPopular: boolean;
  color?: string; // لتدرج لوني مختلف لكل باقة
};

export type Review = {
    id: number;
    name: string;
    img: string;
    review: string;
    rating: number;
}

export type Service = {
  id: number;
  icon: IconType
  title: string;
  description: string;
};

export type TeamMember = {
  id: number;
  name: string;
  img: string;
  job: string;
  description: string;
};

export type Feature = {
    id: number;
    title: string;
    description: string;
    icon : IconType
}
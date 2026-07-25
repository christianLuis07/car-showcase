import { MouseEventHandler } from "react";

export interface CarProps {
  id?: string;
  city_mpg: number;
  highway_mpg: number;
  combination_mpg?: number;
  class: string;
  cylinders: number;
  displacement?: number;
  drive: string; // 'rwd' | 'fwd' | 'awd' | '4wd'
  fuel_type: string; // 'gas' | 'electric' | 'hybrid' | 'diesel'
  make: string;
  model: string;
  transmission: string; // 'a' | 'm' | 'Automatic' | 'Manual'
  year: number;
  horsepower?: number;
  acceleration0to60?: number; // seconds
  rentPrice?: number; // $ per day
  msrp?: number;
  seats?: number;
  description?: string;
  features?: string[];
  images?: {
    main: string;
    angleFront?: string;
    angleSide?: string;
    angleRear?: string;
    interior?: string;
  };
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
  drive?: string;
  maxPrice?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  car: CarProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit" | "reset";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  leftIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
import { CarProps, FilterProps } from "@/types";
import { getCarShowcaseData } from "./apiWrapper";

export async function fetchCars(filters: FilterProps): Promise<CarProps[]> {
  return await getCarShowcaseData(filters);
}

export const calculateCarRent = (city_mpg: number, year: number, horsepower?: number): number => {
  const basePricePerDay = 60;
  const hpBonus = horsepower ? (horsepower / 10) * 1.2 : 25;
  const mileageFactor = (city_mpg || 20) * 0.15;
  const currentYear = new Date().getFullYear();
  const ageFactor = Math.max(0, (currentYear - (year || 2022)) * 3);

  const price = basePricePerDay + hpBonus - mileageFactor + ageFactor;
  return Math.max(50, Math.floor(price));
};

export const generateCarImageUrl = (car: CarProps, angle?: string): string => {
  if (car.images) {
    if (angle === "29" && car.images.angleFront) return car.images.angleFront;
    if (angle === "33" && car.images.angleSide) return car.images.angleSide;
    if (angle === "13" && car.images.angleRear) return car.images.angleRear;
    if (angle === "interior" && car.images.interior) return car.images.interior;
    if (car.images.main) return car.images.main;
  }
  return "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80";
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
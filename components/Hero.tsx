"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, reserve, or rent a car — quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 hover:bg-blue-700 transition-colors font-semibold py-3 px-6"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" priority />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
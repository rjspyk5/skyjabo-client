import React from "react";
import { Hero } from "../../component/Hero/Hero";
import { HowItWork } from "../../component/HowItWork/HowItWork";
import { BookNowBanner } from "../../component/BookNowBanner/BookNowBanner";
import { FAQ } from "../../component/FAQ/FAQ";

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1200px] px-10 mx-auto">
        <HowItWork />
        <FAQ />
      </div>
      <BookNowBanner />
    </div>
  );
};

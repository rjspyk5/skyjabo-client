import React from "react";
import { Hero } from "../../component/Hero/Hero";
import { HowItWork } from "../../component/HowItWork/HowItWork";
import { BookNowBanner } from "../../component/BookNowBanner/BookNowBanner";
import { FAQ } from "../../component/FAQ/FAQ";

export const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWork />

      <FAQ />
      <BookNowBanner />
    </div>
  );
};

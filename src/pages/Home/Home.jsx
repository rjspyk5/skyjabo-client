import React from "react";
import { Hero } from "../../component/Hero/Hero";
import { HowItWork } from "../../component/HowItWork/HowItWork";
import { WhyUs } from "../../component/WhyUS/WhyUs";
import { FAQ } from "../../component/FAQ/FAQ";

export const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWork />
      <WhyUs />
      <FAQ />
    </div>
  );
};

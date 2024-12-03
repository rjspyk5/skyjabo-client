import React from "react";
import { Hero } from "../../component/Hero/Hero";
import { HowItWork } from "../../component/HowItWork/HowItWork";
import { BookNowBanner } from "../../component/BookNowBanner/BookNowBanner";
import { FAQ } from "../../component/FAQ/FAQ";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <div>
      <Fade duration={1000}>
        <Hero />
      </Fade>

      <div className="max-w-[1200px] px-10 mx-auto">
        <Fade duration={1000}>
          <HowItWork />
        </Fade>
        <Fade duration={1000}>
          {" "}
          <FAQ />
        </Fade>
      </div>
      <Fade duration={1000}>
        <BookNowBanner />
      </Fade>
      <BookNowBanner />
    </div>
  );
};

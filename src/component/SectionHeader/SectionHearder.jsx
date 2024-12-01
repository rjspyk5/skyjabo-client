import React from "react";

export const SectionHearder = ({ title }) => {
  return (
    <h2 className="lg:text-4xl text-center font-bold md:text-3xl text-2xl pt-16 py-10">
      {title}
    </h2>
  );
};

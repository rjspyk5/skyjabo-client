import React from "react";

export const Loading = () => {
  return (
    <div className="min-h-[450px] flex justify-center items-center flex-col space-x-2">
      <span className="loading loading-ring loading-lg"></span>
      <p className="text-3xl">Loading..........</p>
    </div>
  );
};

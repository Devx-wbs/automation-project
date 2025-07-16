import React from "react";

const Section_e = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 lg:px-12"
      style={{ backgroundImage: "url('/commandImage.png')" }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4 items-center md:items-end">
          <img
            src="/bgImageItwork.png"
            alt="Chart stacked"
            className="w-full max-w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_e;

import React from "react";

const Section_d = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/commandImage.png')" }}
    >
      <img
        src="/bgImageItwork.png"
        alt="Foreground Chart"
        className="absolute right-0 top-1/3 -translate-y-1/2 max-w-[40%] h-auto z-10"
      />
    </div>
  );
};

export default Section_d;

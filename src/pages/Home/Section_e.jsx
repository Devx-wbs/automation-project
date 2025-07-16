import React from "react";

const Section_e = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 lg:px-12"
      style={{ backgroundImage: "url('/commandImage.png')" }}
    >
      <div className="max-w-[1059px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Text Section */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-400">How</span> It Works
          </h2>
          <p className="text-base sm:text-lg mb-4">
            The automation partner you need for the growth you’re ready to scale.”
          </p>
          <p className="text-base sm:text-lg">
            We don’t just automate tasks — we engineer custom systems that give our clients their time, focus, and energy back.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col gap-4 items-center md:items-end">
          <img
            src="/dataEngineIcon.png"
            alt="Chart 1"
            className="w-full max-w-[250px] object-contain h-auto"
          />
          <img
            src="/dataEngineIcon2.png"
            alt="Chart 2"
            className="w-full max-w-[250px] object-contain h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Section_e;

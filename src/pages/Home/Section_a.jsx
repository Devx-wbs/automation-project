import React from 'react'

const Section_a = () => {
    return (
        <div className="bg-[#050C1A] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto text-center">
         <div className="max-w-[1059px] m-auto">

          <div className="flex flex-wrap justify-center items-center gap-3 mb-6 text-sm sm:text-base text-gray-300">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                src="/firstImage.png"
                alt="User 1"
              />
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                src="/secondImage.png"
                alt="User 2"
              />
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                src="/thirdImage.png"
                alt="User 3"
              />
            </div>
            <span>Trusted by 300+ delighted customers</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="text-yellow-400">★★★★★</span>
            <span>Rating</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-yellow-400">Automate</span>{" "}
            <span>Your Business.</span>
            <br />
            <span>Scale Without Burnout</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mt-6 mb-10">
            Empowering modern businesses with smart systems, AI-driven workflows,
            and seamless integrations—designed for growth at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-black hover:text-white border border-transparent hover:border-white transition">
              Get a Free Automation Audit
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Explore Use Cases
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Section_a
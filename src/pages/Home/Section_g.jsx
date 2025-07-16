import React from "react";

const Section_g = () => {
  return (
    <div className="bg-black max-w-[1440px] mx-auto text-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1059px] m-auto">

    
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-16">
        How Our <span className="text-yellow-400">AI Workflow</span> Works
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h3 className="text-2xl font-medium mb-4">How Our AI Automation Works</h3>
          <p className="mb-6 text-gray-300">
            From detection to decision — in seconds
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-200">
            <li>
              <strong>Smart Triggers:</strong> Detect patterns, webhooks, or manual inputs
            </li>
            <li>
              <strong>AI Decision Layer:</strong> GPT-4 or custom agents analyze the data
            </li>
            <li>
              <strong>Multi-App Execution:</strong> Instantly take action across your stack
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-8">
          {["Trigger", "AI Processing", "Action Take"].map((step, index) => (
            <div key={index} className="w-[240px] px-6 py-4 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white rounded-xl shadow-lg border border-gray-700 text-center text-lg font-medium">
              {step}
            </div>
          ))}
        </div>
      </div>
        </div>
    </div>
  );
};

export default Section_g;

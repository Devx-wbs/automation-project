import React from "react";

const Section_f = () => {
    return (
        <div className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-12">
            <div className="max-w-[1440px] mx-auto items-center ">
                <div className="max-w-[1059px] m-auto">                
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug text-center">
                    How Our <span className="text-yellow-400">AI Workflow</span> Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/workflow.png"
                            alt="Workflow Illustration"
                            className="w-full max-w-[350px] h-auto object-contain"
                        />
                    </div>

                    <div className="text-left">
                        <h3 className="text-xl font-semibold mb-3">
                            How Our AI Automation Works
                        </h3>

                        <p className="text-gray-300 mb-6">
                            From detection to decision — in seconds
                        </p>

                        <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
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
                </div>
                </div>
            </div>
        </div>
    );
};

export default Section_f;

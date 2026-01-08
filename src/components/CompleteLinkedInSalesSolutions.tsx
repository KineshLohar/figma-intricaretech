import React, { useState } from "react";

const tabs = [
    "CRM Data Enrichment",
    "CRM Data Sync",
    "Bulk Export & Enrichment",
    "AI Productivity",
];

const CompleteLinkedInSalesSolutions: React.FC = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto md:px-16">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">
                        Complete LinkedIn Sales Solutions
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Everything you need for professional LinkedIn prospecting
                    </p>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-4 gap-6 mb-6">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`font-medium pb-2 border-b-4 border-radi transition ${activeTab === index
                                ? "border-blue-950 "
                                : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Sub text */}
                <div className="text-left mb-4">
                    <p className="text-sm text-gray-600">
                        It’s hard to find the accurate contact data for every prospect by{" "}
                        <span className="text-red-400 font-medium p-1 py-0.5 rounded-full bg-red-200">traditional data</span>
                    </p>

                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    {/* LEFT CARD */}
                    <div className="bg-[#f5f8ff] rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg text-gray-950 font-semibold">Here is how LeadCRM tackles that situation.</h3>
                        <p className="text-sm font-medium text-green-800 my-2 mb-6">
                            Try LeadCRM Data Enrichment →
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <img src="/ab1.png" alt="" />
                            </div>
                            <div>
                                <img src="/ab1.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-[#f5f8ff] rounded-xl p-6 shadow-sm">
                        <p className="text-lg text-gray-700 mb-4">
                            If it does not work for you ! try our{" "}
                            <span className="text-green-800 font-medium">
                                Advanced Waterfall Enrichment →
                            </span>
                        </p>
                        <div>
                            <img src="/ab2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompleteLinkedInSalesSolutions;

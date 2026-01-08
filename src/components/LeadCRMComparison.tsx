import React from "react";

const withoutCrm = [
    {
        id: 1,
        title: "Manual Data Entry",
        description: "Copying LinkedIn contacts to CRM manually plus losing conversation history",
        tag: "3+ hours wasted daily"
    },
    {
        id: 2,
        title: "Incomplete Data",
        description: "LinkedIn profiles missing Email and Phones from 700M+ contacts",
        tag: "60% Data Incomplete"
    },
    {
        id: 3,
        title: "No CRM Visibility",
        description: "Zero context available when browsing LinkedIn profiles",
        tag: "Zero context available"
    },
    {
        id: 4,
        title: "Limited Productivity",
        description: " Writing messages manually plus no AI assistant for reply, invite, or comments",
        tag: "No smart assistance"
    },
]

const withCrm = [
    {
        id: 1,
        title: "Complete Bi-Directional Sync",
        description: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real-time",
        url: "/wi1.png"
    },
    {
        id: 2,
        title: "700M+ Contacts + Enrichment",
        description: "Get verified emails and phone numbers from a vast global database",
        url: "/wi2.png"
    },
    {
        id: 3,
        title: "CRM Overlay on LinkedIn",
        description: "See full CRM insights directly on LinkedIn profiles without switching tabs",
        url: "/wi3.png"
    },
    {
        id: 4,
        title: "AI Response + Templates + Bulk Exports",
        description: "Save time with AI-crafted replies, pre-built templates, and one-click data exports",
        url: "/wi4.png"
    },
]

const LeadCRMComparison: React.FC = () => {
    return (
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
                    Every LinkedIn Prospector faces these daily challenges
                </h2>

                {/* Comparison Grid */}
                <div className="flex flex-col md:flex-row md:items-stretch md:justify-center gap-4 items-stretch">
                    {/* WITHOUT LeadCRM */}
                    <div className="relative bg-red-50 rounded-xl p-6 shadow-sm flex-1">
                        {/* Header */}
                        <div className="mb-4">
                            {/* Mock Image */}
                            <img src="/cl1.png" alt="" />
                        </div>
                        <h3 className="text-pink-700 font-semibold text-lg mb-2">
                            Without LeadCRM
                        </h3>

                        <ul className="space-y-8 text-sm">
                            {
                                withoutCrm?.map(item => (
                                    <li key={item.id} className="flex items-center gap-3">
                                        <span className="text-pink-700 text-lg font-bold mr-1">✕</span>
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                {item.title}
                                                <span className="ml-2 text-sm text-red-500 p-1 px-2 bg-red-200 rounded-full font-medium">
                                                    {item.tag}
                                                </span>
                                            </p>
                                            <p className="text-gray-600 mt-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 shrink-0">
                        <div className="h-full bg-black/10 w-0.5" />
                        <span className="text-sm font-semibold text-gray-500">VS</span>
                        <div className="h-full bg-black/10 w-0.5" />
                    </div>
                    {/* WITH LeadCRM */}
                    <div className="relative bg-green-50 border border-green-100 rounded-xl p-6 shadow-sm flex-1">
                        {/* Header */}
                        <div className="mb-4">
                            {/* Mock Image */}
                            <img src="/cl2.png" alt="" />
                        </div>
                        <h3 className="text-green-700 font-semibold text-lg mb-2 flex items-center gap-4">
                            With LeadCRM <div className="h-7 w-7 bg-slate-200 rounded-full" />  <span className="ml-2 text-sm text-green-500 p-1 px-2 bg-green-200 rounded-full font-medium">4+ Hours/day saved</span>
                        </h3>

                        <ul className="space-y-8 text-sm">
                            {
                                withCrm?.map(item => (
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-500 text-lg"><img src={item.url} alt="" className="h-12 w-12 object-contain" /></span>
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                {item.title}
                                            </p>
                                            <p className="text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-col items-center gap-4">
                    <button className="bg-lime-300 hover:bg-lime-400 text-black font-semibold px-8 py-3 rounded-lg shadow transition">
                        Start Using LeadCRM Now
                    </button>

                    <p className="text-sm text-gray-600 italic">
                        Save <span className="font-semibold">90+ hours</span> every month
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LeadCRMComparison;

import React from "react";

const JoinProfessionalsCTA: React.FC = () => {
    return (
        <section className="w-full bg-[#eef3ff] py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Top text */}
                <p className="text-2xl font-medium text-blue-950 mb-8">
                    Join Thousands of Professionals Using LeadCRM
                </p>
                <div className="w-full mx-auto">
                    <img src="/banner.png" alt="" className="w-full" />
                </div>
                <div className="w-full flex items-center justify-center">

                    <button className="bg-lime-300 hover:bg-lime-400 cursor-pointer mx-auto transition text-black font-semibold px-6 py-3 rounded-lg shadow inline-flex items-center gap-2">
                        Get Started Today
                        <span className="text-lg">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JoinProfessionalsCTA;

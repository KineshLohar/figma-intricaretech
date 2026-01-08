

const IntegrationIcon = ({ label }: { label: string }) => (
    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
        {label[0]}
    </div>
);

const Rating = ({ label }: { label: string }) => (
    <div className="flex items-center gap-2 text-gray-600">
        <span className="text-gray-400">{label}</span>
        <span className="text-yellow-400">★★★★★</span>
        <span className="font-medium">5/5</span>
    </div>
);


export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#f9fbff]">
            {/* subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5ecff_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

            <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border bg-white text-sm text-gray-600 border-blue-300 shadow-sm mb-6">
                    🚀 <span>Thousands of Professionals using LeadCRM</span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
                    LinkedIn CRM Integration <br />
                    Capture, Sync and Enrich in{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10 text-sky-500">Both Ways</span>
                        <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-300 -z-0 rounded-sm"></span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 max-w-3xl mx-auto text-gray-800 font-medium">
                    Automatically sync LinkedIn prospects to your CRM and overlay existing CRM
                    contacts on LinkedIn profiles. Complete bi-directional integration with
                    HubSpot, Salesforce, and Pipedrive.
                </p>

                {/* Integrations */}
                <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-pink-400 text-white shadow-lg">
                        <span className="text-sm font-medium">Works with</span>
                        <div className="flex gap-3">
                            <IntegrationIcon label="HubSpot" />
                            <IntegrationIcon label="Pipedrive" />
                            <IntegrationIcon label="Salesforce" />
                        </div>
                    </div>
                </div>

                {/* Ratings */}
                <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm">
                    <Rating label="Chrome Web Store" />
                    <Rating label="G2 Reviews" />
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <button className="flex items-center justify-between px-4 gap-4 py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-gray-800 transition">
                        <div className="text-left mr-4 leading-4">
                            <p className="text-gray-400 text-xs">Available in</p>
                            <p>Chrome Web Store</p>
                        </div>
                        <div className="bg-white rounded-full h-8 w-8" />
                    </button>

                    <button className="px-8 py-3 rounded-lg bg-lime-300 text-gray-900 text-sm font-bold hover:bg-lime-500 transition shadow-md">
                        Get a Free Trial Now!
                    </button>
                </div>
            </div>
        </section>
    );
};

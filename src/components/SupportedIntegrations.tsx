import React from "react";

const SupportedIntegrations: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-950">
            Our Supported LeadCRM
          </h2>
          <p className="text-sm text-gray-600 mt-3 max-w-2xl mx-auto">
            LeadCRM provides Native Integrations with popular CRM tools to make
            the most out of your LinkedIn prospecting. We don’t want you to miss
            any revenue opportunity on the internet!
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative w-full">
          {/* LEFT SIDE – LinkedIn Data */}
          {/* <div className="flex flex-col gap-8 w-full md:w-1/4">
            {[
              { label: "Conversation", icon: "💬" },
              { label: "Contacts", icon: "👤" },
              { label: "Companies", icon: "🏢" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-lg bg-white shadow-sm">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div> */}

          {/* CENTER – Integration Diagram (IMAGE) */}
          <div className="w-full flex justify-center">
            <div className="relative w-full">
              <img
                src="/suppint.png"
                alt="LeadCRM Integration Flow"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE – CRM Stack */}
          {/* <div className="w-full md:w-1/4 flex justify-center">
            <div className="bg-[#f5f8ff] rounded-2xl px-4 py-5 flex flex-col gap-4 shadow-sm">
              {[
                { name: "HubSpot", color: "bg-orange-500" },
                { name: "Pipedrive", color: "bg-green-600" },
                { name: "Salesforce", color: "bg-blue-500" },
                { name: "Zoho", color: "bg-yellow-400" },
              ].map((crm) => (
                <div
                  key={crm.name}
                  className={`w-12 h-12 rounded-full ${crm.color} flex items-center justify-center text-white text-xs font-semibold shadow`}
                >
                  {crm.name[0]}
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="bg-lime-300 hover:bg-lime-400 cursor-pointer transition text-black font-semibold px-7 py-3 rounded-lg shadow">
            Lets Integrate your CRM Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedIntegrations;

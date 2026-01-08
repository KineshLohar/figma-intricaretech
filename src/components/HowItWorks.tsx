import { ArrowRight } from "lucide-react";
import React from "react";

type Step = {
  step: number;
  title: string;
  description: string;
  imageAlt: string;
  url: string;
};

const steps: Step[] = [
  {
    step: 1,
    title: "Install the Extension",
    description:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    imageAlt: "Install extension preview",
    url: "/hiw/1.png"
  },
  {
    step: 2,
    title: "Browse LinkedIn",
    description:
      "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    imageAlt: "Browse LinkedIn preview",
    url: "/hiw/2.png"
  },
  {
    step: 3,
    title: "Get Enriched Data",
    description:
      "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
    imageAlt: "Enriched contact preview",
    url: "/hiw/3.png"
  },
  {
    step: 4,
    title: "Sync to CRM Instantly",
    description:
      "Prospect data syncs to your CRM instantly with history, tracking, and AI insights.",
    imageAlt: "CRM sync preview",
    url: "/hiw/4.png"
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-[#f2f6ff] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            How it Works
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            From setup to success in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-white rounded-xl border border-black/5  pt-8 overflow-hidden flex flex-col text-center"
            >
              {/* Connector Line (Desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-14 right-[-24px] w-12 border-t-2 border-dashed border-blue-300" />
              )}

              {/* Step Number */}
              <div className="text-5xl font-extrabold text-blue-400 leading-none mb-3">
                {step.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-950 mb-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Image Placeholder */}
              <div className="mt-auto w-full h-36 bg-gray-50 flex items-center justify-center text-xs text-gray-400">
                {/* {step.imageAlt} */}
                <img src={step.url} alt="" className="" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button className="bg-lime-300 hover:bg-lime-400 cursor-pointer transition text-black font-semibold px-7 py-3 rounded-lg shadow flex items-center gap-2">
            Try LeadCRM Now
            <span className="text-xl"><ArrowRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

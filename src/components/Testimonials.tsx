import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

type Testimonial = {
    id: number;
    text: string;
    name: string;
    role: string;
    avatar?: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        text:
            "Reliable Data Sync. I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
        name: "David Fincher",
        role: "On Capterra",
    },
    {
        id: 2,
        text:
            "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
        name: "Lillian Williams",
        role: "On Capterra",
    },
    {
        id: 3,
        text:
            "Reliable Data Sync. I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
        name: "Michael",
        role: "On Capterra",
    },
    {
        id: 4,
        text:
            "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
        name: "Lillian Williams",
        role: "On Capterra",
    },
    {
        id: 5,
        text:
            "Reliable Data Sync. I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
        name: "Michael",
        role: "On Capterra",
    },
];

const Testimonials: React.FC = () => {
    const [index, setIndex] = useState(0);

    const visibleTestimonials = testimonials.slice(index, index + 3);

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const next = () => {
        if (index < testimonials.length - 3) setIndex(index + 1);
    };

    return (
        <section className="w-full  py-16 px-4 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg md:text-2xl font-semibold text-blue-950">
                        What people are saying about LeadCRM
                    </h2>

                    {/* Navigation */}
                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full border border-blue-950 flex items-center justify-center disabled:opacity-40 cursor-pointer"
                            disabled={index === 0}
                        >
                            <ChevronLeft className="text-blue-950" />
                        </button>
                        <button
                            onClick={next}
                            className=" p-2 rounded-full bg-blue-950 text-white flex items-center justify-center disabled:opacity-40 cursor-pointer"
                            disabled={index >= testimonials.length - 3}
                        >
                            
                            <ChevronRight  className="min-h-6 min-w-6" />
                        </button>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visibleTestimonials.map((item) => (
                        <div
                            key={item.id}
                            className=" bg-[#fdeef3] rounded-xl p-6 shadow-sm flex flex-col justify-between"
                        >
                            {/* Text */}
                            <p className="font-medium text-sm leading-relaxed mb-2">
                                “{item.text}”
                            </p>

                            {/* Rating */}
                            <div className="flex mb-auto items-center">
                                <div className="h-8 w-8 rounded-lg bg-white mr-2" />
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}><Star className="h-4 fill-blue-950 text-blue-950" /></span>
                                ))}
                            </div>

                            {/* User */}
                            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-300">
                                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                                    👤
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative bubble */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-200 to-pink-300 opacity-70" />
        </section>
    );
};

export default Testimonials;

import { Mail, MessageCircleQuestionMark, PhoneCall } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#daf6fc] px-4 py-12 pb-8">
            <div className="max-w-7xl mx-auto">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="" />
                        </div>

                        <p className="text-sm text-gray-600 max-w-sm mb-5">
                            LeadCRM is LinkedIn integration tool for your CRM.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {["f", "t", "in", "yt"].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                                >
                                    {i}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Integrations */}
                    <div>
                        <h4 className="font-semibold text-blue-950 mb-4">
                            Integrations
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>HubSpot</li>
                            <li>Salesforce</li>
                            <li>Pipedrive</li>
                            <li>Close.io <span className="bg-green-200 rounded-full px-1 py-0.5 text-xs text-black/90">Coming soon</span></li>
                            <li>Insightly <span className="bg-green-200 rounded-full px-1 py-0.5 text-xs text-black/90">Coming soon</span></li>
                        </ul>
                    </div>

                    {/* Alternative */}
                    <div>
                        <h4 className="font-semibold text-blue-950 mb-4">
                            Alternative
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Surfe vs LeadCRM</li>
                            <li>LinkedIn Alternatives</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-blue-950 mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-blue-950 mb-4">
                            Contact Us
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 mb-4">
                            <li className="flex items-center gap-2"><Mail className="text-cyan-500" /> support@leadcrm.io</li>
                            <li className="flex items-center gap-2"><PhoneCall className="text-cyan-500" />+1 323-356-7468</li>
                            <li className="flex items-center gap-2"><MessageCircleQuestionMark className="text-cyan-500" /> Help Center</li>
                        </ul>

                        {/* Chrome Badge */}
                        <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg text-xs">
                            <span className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[10px]">
                                ⬤
                            </span>
                            Available in Chrome
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <p className="text-center mt-8 mb-2 text-sm text-gray-500">Disclaimer: LeadCRM is not endorsed or affiliated with LinkedIn. All LinkedIn logos and trademarks displayed on this site are property of LinkedIn.</p>
                <div className="border-t border-gray-300 text-center text-xs pt-2 text-gray-500">
                    Copyright © 2023 LeadCRM. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";

const FinalCTA: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-md px-4 py-4">
          {/* Top CTA Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#fdeef8] rounded-lg px-5 py-4">
            <div className="flex items-center gap-3">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs"
                  >
                    👤
                  </div>
                ))}
              </div>

              <p className="text-sm font-medium text-gray-900">
                Join with our Thousands of professionals Now !
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-lime-400 hover:bg-lime-500 transition text-black font-semibold px-6 py-2.5 rounded-lg shadow">
              Get a Free Trial Now!
            </button>
          </div>

          {/* Trust Row */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">💳</span>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">⏱</span>
              14 Days Free Trial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

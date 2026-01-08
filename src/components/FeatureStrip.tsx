export const FeatureStrip = () => {
    const features = [
      {
        id: 1,
        title: <p>Access to <span className="text-black font-bold">700M+ Contacts</span></p>,
        icon: "👤",
    },
    {
        id: 2,
        title: <p><span className="text-black font-bold">One click push</span> to CRM</p>,
        icon: "🖱️",
    },
    {
        id: 3,
        title: <p><span className="text-black font-bold">Custom Field</span> Mapping</p>,
        icon: "🔗",
    },
    {
        id: 4,
        title: <p>Advanced <span className="text-black font-bold">Waterfall Enrichment</span></p>,
        icon: "📱",
      },
    ];
  
    return (
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="flex items-center gap-2 text-sm text-gray-700 font-medium"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-base">
                  {feature.icon}
                </span>
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
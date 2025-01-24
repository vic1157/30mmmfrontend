const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Access to devotionals",
      starter: "Limited selection",
      essentials: "Full access",
      leadership: "Full access",
      vessels: "Full access",
    },
    {
      feature: "Online community",
      starter: "Public forum",
      essentials: "Private community",
      leadership: "Private community",
      vessels: "Premium closed community",
    },
    {
      feature: "Group format",
      starter: "Asynchronous",
      essentials: "Asynchronous",
      leadership: "Synchronous small groups",
      vessels: "Synchronous exclusive group",
    },
    {
      feature: "Physical materials",
      starter: "None",
      essentials: "None",
      leadership: "Physical book + journal",
      vessels: "Physical book + journal + certification",
    },
    {
      feature: "Coaching",
      starter: "None",
      essentials: "Optional add-ons: Group coaching, 1 on 1 coaching",
      leadership: "2 sessions with program leader",
      vessels: "Monthly consultation + live sessions with Donovan Anderson",
    },
    {
      feature: "Leadership development",
      starter: "None",
      essentials: "None",
      leadership: "Advanced training",
      vessels: "Customized men's ministry development",
    },
    {
      feature: "Exclusive Access",
      starter: "None",
      essentials: "None",
      leadership: "None",
      vessels: "Backstage access + Carpenter's son case study",
    },
  ];

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="mb-10 text-4xl font-bold text-center text-gray-800">
          Plan Comparison
        </h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-sm font-medium text-left text-gray-700 uppercase">
                  Feature
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-gray-700 uppercase">
                  CLEAN Starter
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-gray-700 uppercase">
                  CLEAN Essentials
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-gray-700 uppercase">
                  CLEAN Leadership
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left text-gray-700 uppercase">
                  CLEAN Vessels
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.starter}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.essentials}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.leadership}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.vessels}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;

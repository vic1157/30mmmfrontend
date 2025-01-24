import { Cross, Heart, MapPin, Navigation, Network } from "lucide-react";

const metrics = [
  {
    id: "men-served",
    icon: "heart",
    value: 118,
    label: "men served",
    subtitle: "(46 unique men)",
  },
  {
    id: "groups",
    icon: "network",
    value: 13,
    label: "groups facilitated",
    subtitle: "(7 unique group types)",
  },
  {
    id: "leadership",
    icon: "navigation",
    value: 42,
    label: "leadership opportunities",
    subtitle: "(13 unique)",
  },
  {
    id: "churches",
    icon: "cross",
    value: 11,
    label: "churches touched",
    subtitle: "(key partners)",
  },
  {
    id: "states",
    icon: "mapPin",
    value: 11,
    label: "states reached",
    subtitle: "(geographic reach)",
  },
];

const iconMap = {
  heart: Heart,
  network: Network,
  navigation: Navigation,
  cross: Cross,
  mapPin: MapPin,
};

export default function MetricsDashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center mt-8 text-4xl">Our Impact</div>
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3 lg:grid-cols-5">
        {metrics.map((metric) => {
          const Icon = iconMap[metric.icon];

          return (
            <div
              key={metric.id}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                <Icon className="w-8 h-8 text-primary-red" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <div className="text-5xl font-bold text-primary-red">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {metric.label}
                </div>
                {metric.subtitle && (
                  <div className="text-xs italic text-gray-500">
                    {metric.subtitle}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

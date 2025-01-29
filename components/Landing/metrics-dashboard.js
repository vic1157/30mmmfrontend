import { Cross, Heart, MapPin, Navigation, Network } from "lucide-react";

const metrics = [
  {
    id: "men-served",
    icon: "heart",
    value: 595,
    label: "men served",
    subtitle: "(239 unique men)",
  },
  {
    id: "groups",
    icon: "network",
    value: 50,
    label: "groups facilitated",
    subtitle: "(7 unique group types)",
  },
  {
    id: "leadership",
    icon: "navigation",
    value: 207,
    label: "leadership opportunities",
    subtitle: "(52 unique)",
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
    value: 15,
    label: "states reached",
    subtitle: "(national reach)",
  },
  {
    id: "flag",
    icon: "mapPin",
    value: 3,
    label: "states reached",
    subtitle: "(international reach)",
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
    <div className="py-10 bg-primary-red">
      <div className="flex justify-center mb-8 text-6xl font-bold text-white">
        Our Impact
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {metrics.map((metric) => {
          const Icon = iconMap[metric.icon];

          return (
            <div
              key={metric.id}
              className="flex flex-col items-center space-y-1 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                <Icon className="w-8 h-8 text-primary-red" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <div className="text-5xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-lg font-medium text-white">
                  {metric.label}
                </div>
                {metric.subtitle && (
                  <div className="italic text-white text-md">
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

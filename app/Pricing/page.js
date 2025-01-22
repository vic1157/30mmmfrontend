import Image from "next/image";

const PricingPage = () => {
  const resourceDetails = [
    {
      title: "bronze",
      description: [
        "Gain asynchronous access to the Clean program community platform",
        "The ebook",
        "Inspiring video devotionals",
        "Perfect for those seeking encouragement from a supportive Christian community while working at their own pace",
        "Ideal for men taking their first steps toward sexual integrity",
      ],
      price: "$200",
      link: "/basic.webp",
    },
    {
      title: "silver",
      description: [
        "All the benefits of the Bronze package",
        "Live guidance from personally vetted and experienced facilitators delivering the content directly",
        "3-month program with deeper engagement through a structured approach",
        "Offers tools and accountability needed for lasting transformation",
      ],
      price: "$1500",
      link: "/1st-tier.webp",
    },
    {
      title: "gold",
      description: [
        "All benefits of the Silver package",
        "Extended access to the program for six months",
        "Greater immersion and sustained growth",
        "Work closely with facilitators and engage deeply with the community",
      ],
      price: "$2500",
      link: "/2nd-tier.webp",
    },
    {
      title: "platinum",
      description: [
        "Ultimate Clean program led by Dr. Donovan Anderson himself",
        "Direct involvement of the founder and his hand-selected team",
        "Unparalleled guidance, personal insight, and mentorship",
        "Premium 6-month program designed for men ready to fully commit to transformation",
      ],
      price: "$3000",
      link: "/3rd-tier.webp",
    },
  ];

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="mb-10 text-4xl font-bold text-center text-gray-800">
          Our Pricing Plans
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resourceDetails.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 text-center bg-white rounded-lg shadow-md"
            >
              <div>
                <Image
                  src={resource.link}
                  alt={resource.title}
                  width={200}
                  height={150}
                  className="mb-4 rounded"
                />
                <h2 className="mb-2 text-2xl font-semibold text-gray-700 capitalize">
                  {resource.title}
                </h2>
                <ul className="mb-4 text-gray-600 list-disc list-inside">
                  {resource.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between w-full gap-4 mt-4">
                <span className="text-xl font-bold text-gray-800">
                  {resource.price}
                </span>
                <button className="px-4 py-2 text-sm text-white uppercase transition rounded  bg-primary-red hover:bg-red-800">
                  Start Free Trial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

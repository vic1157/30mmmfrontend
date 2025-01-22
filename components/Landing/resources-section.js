import Image from "next/image";

export function ResourcesSection() {
  const resourceDetails = [
    {
      title: "bronze",
      description:
        "Gain asynchronous access to the Clean program community platform, the ebook, and inspiring video devotionals. Perfect for those seeking encouragement from a supportive Christian community while working at their own pace. This package is ideal for men taking their first steps toward sexual integrity.",
      price: "$200",
      link: "/basic.webp",
    },
    {
      title: "silver",
      description:
        "Build on the foundation of the Bronze package with live guidance from personally vetted and experienced facilitators delivering the content directly. This 3-month program provides deeper engagement through a structured approach, offering the tools and accountability needed for lasting transformation.",
      price: "$1500",
      link: "/1st-tier.webp",
    },
    {
      title: "gold",
      description:
        "Enjoy all the benefits of the Silver package with extended access to the program for six months. This tier allows for greater immersion and sustained growth as you work closely with facilitators and engage deeply with the community.",
      price: "$2500",
      link: "/2nd-tier.webp",
    },
    {
      title: "platinum",
      description:
        "Experience the ultimate Clean program led by Dr. Donovan Anderson himself. This exclusive tier includes the direct involvement of the founder and his hand-selected team, providing unparalleled guidance, personal insight, and mentorship. This premium 6-month program is designed for men ready to fully commit to transformation.",
      price: "$3000",
      link: "/3rd-tier.webp",
    },
  ];
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          Our Resources
        </h2>
        <p className="mb-12 text-xl text-center md:text-xl">
          Each package has a maximum of 10 people, and will be split into two
          groups of 5 for effective and personal discipleship.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {resourceDetails.map((resource, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <Image
                src={`${resource.link}`}
                width={300}
                height={200}
                alt={resource.title}
                className="items-center object-cover w-full h-70"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold uppercase">
                  {resource.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between w-full gap-4 mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-white rounded-md bg-primary-red"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

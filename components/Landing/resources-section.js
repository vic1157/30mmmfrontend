import Image from "next/image";

export function ResourcesSection() {
  const resourceDetails = [
    {
      title: "Courses",
      description:
        "Engage in transformative programs designed to help you align with God’s purpose. From conquering personal struggles like lust through CLEAN, to serving your community through hands-on training in The Carpenter’s Son, these courses equip you for a God-centered life of purpose, integrity, and service.",
    },
    {
      title: "Books",
      description:
        "Immerse yourself in actionable guides and devotionals like the 5-day video devotional or the 35-day CLEAN devotional. These resources provide the tools to deepen your relationship with Christ and live in alignment with His teachings.",
    },
    {
      title: "Podcasts",
      description:
        "Hear real stories, practical advice, and spiritual insights from men who’ve walked the path you’re stepping into. Let these conversations inspire and equip you to thrive in faith, purpose, and brotherhood.",
    },
  ];
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          Our Resources
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {resourceDetails.map((resource, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <Image
                src={`/placeholder.svg?height=200&width=400&text=${resource.title}`}
                width={400}
                height={200}
                alt={resource.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{resource.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {resource.description}
                </p>
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-blue-600 rounded-md"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

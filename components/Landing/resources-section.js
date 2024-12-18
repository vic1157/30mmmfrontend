import Image from "next/image";

export function ResourcesSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          Our Resources
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {["Courses", "Books", "Podcasts"].map((resource, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <Image
                src={`/placeholder.svg?height=200&width=400&text=${resource}`}
                width={400}
                height={200}
                alt={resource}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{resource}</h3>
                <p className="mb-4 text-muted-foreground">
                  Explore our {resource.toLowerCase()} designed to help you grow
                  emotionally and spiritually.
                </p>
                <button type="submit">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

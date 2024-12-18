import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600&text=About+Us"
              width={600}
              height={400}
              alt="About 30 Mighty Men Ministries"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              About 30 Mighty Men Ministries
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Emotionally Healthy is dedicated to helping individuals and
              communities grow in emotional and spiritual maturity. Our mission
              is to equip people with the tools and resources they need to live
              fulfilling, balanced lives.
            </p>
            <button
              type="submit"
              className="px-2 text-white rounded-md bg-primary-red hover:bg-red-800"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

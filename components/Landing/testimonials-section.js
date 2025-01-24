import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "CLEAN has transformed our men’s ministry. Men are opening up, seeking help, and finding freedom like never before.",
      name: "Pastor John Doe, Zion Church",
    },
    {
      quote:
        "The CLEAN program gave me the tools and support I needed to break free from pornography and rebuild trust with my wife.",
      name: "Clean Participant",
    },
    {
      quote:
        "I was dating with no purpose...it broke unholy convenants with women",
      name: "Clean Participant",
    },
  ];

  return (
    <section className="py-16 text-white bg-primary-red">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          What People Are Saying
        </h2>
        <p className="mb-12 text-xl text-center md:text-xl">
          These testimonials are kept anonymous for the privacy and safety of
          our community.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 text-gray-800 bg-white rounded-lg shadow-md"
            >
              <blockquote className="mb-4 text-lg">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <blockquote className="mb-4 text-md">
                {testimonial.name}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

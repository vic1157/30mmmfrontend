import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Emotionally Healthy has transformed my approach to discipleship and personal growth.",
      author: "John Doe",
      role: "Pastor",
    },
    {
      quote:
        "The resources provided by Emotionally Healthy have been invaluable to our church community.",
      author: "Jane Smith",
      role: "Church Leader",
    },
    {
      quote:
        "I've seen remarkable changes in my life since starting this journey with Emotionally Healthy.",
      author: "Mike Johnson",
      role: "Participant",
    },
  ];

  return (
    <section className="py-16 text-white bg-primary-red">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 text-gray-800 bg-white rounded-lg shadow-md"
            >
              <blockquote className="mb-4 text-lg">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=50&width=50&text=${testimonial.author[0]}`}
                  width={50}
                  height={50}
                  alt={testimonial.author}
                  className="mr-4 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 bg-white text-primary-red">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ready to Transform Your Life?
        </h2>
        <p className="mb-8 text-xl">
          Join us in becoming men who lead with purpose, integrity, and faith.
        </p>
        <Link
          href="/Pricing"
          className="p-2 bg-white border-4 rounded-md text-prmary-red hover:bg-primary-red/90 border-primary-red hover:text-white"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}

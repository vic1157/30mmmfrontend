export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-primary-red"
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=1600)",
          backgroundBlendMode: "multiply",
        }}
      />
      <div className="container relative px-4 py-20 mx-auto">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Make Mature Disciples.
        </h1>
        <p className="mb-12 text-xl italic sm:text-2xl md:text-3xl text-white/90">
          Start a Discipleship Journey that Deeply Changes Lives.
        </p>
        <button className="inline-flex flex-col items-center gap-2 transition-transform group hover:-translate-y-1">
          <span className="text-lg font-medium">START YOUR JOURNEY</span>
          <span className="animate-bounce">↓</span>
        </button>
      </div>
    </section>
  );
}

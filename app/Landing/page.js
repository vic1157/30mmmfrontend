import Head from "next/head";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>30 Mighty Men Ministries</title>
        <meta
          name="description"
          content="A landing page for 30 Mighty Men Ministries"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <div className="text-2xl font-bold text-gray-800">YourBrand</div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-white bg-blue-600">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to YourBrand</h1>
          <p className="mb-6 text-lg">
            Helping you achieve financial freedom and clarity.
          </p>
          <a
            href="#contact"
            className="px-4 py-2 font-bold text-blue-600 bg-white rounded hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">About Us</h2>
          <p className="leading-relaxed text-gray-600">
            We are dedicated to providing resources and tools to help you manage
            your finances with wisdom and purpose.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-white rounded shadow-md">
              <h3 className="mb-4 text-xl font-bold">Financial Counseling</h3>
              <p className="text-gray-600">
                Get expert advice tailored to your unique situation.
              </p>
            </div>
            <div className="p-6 text-center bg-white rounded shadow-md">
              <h3 className="mb-4 text-xl font-bold">Educational Resources</h3>
              <p className="text-gray-600">
                Access courses and materials to expand your knowledge.
              </p>
            </div>
            <div className="p-6 text-center bg-white rounded shadow-md">
              <h3 className="mb-4 text-xl font-bold">Community Support</h3>
              <p className="text-gray-600">
                Join a network of like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
          <p className="mb-6 text-gray-600">
            Ready to start your journey? Contact us today.
          </p>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-white bg-gray-800">
        <div className="container px-4 mx-auto text-center">
          <p>&copy; 2024 YourBrand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

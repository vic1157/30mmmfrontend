import Image from "next/image";
import Link from "next/link";

export function ResourcesSection() {
  const resourceDetails = [
    {
      title: "clay tier",
      headline: "Start Your Journey with CLEAN",
      subheadline:
        "Explore the CLEAN program with free access to introductory resources and a supportive community.",
      description:
        "Introductory Resources: Access a selection of video devotionals and teaching content. Public Community Forum: Join a network of men on the same journey. Weekly Email Newsletters: Receive tips, encouragement, and updates.",
      price: "Free",
      link: "/clay-vessel.webp",
      cta1: "Ready to take the first step? Join CLEAN Starter today and start your transformation journey.",
      cta2: "Start Today",
    },
    {
      title: "wood tier",
      headline: "CLEAN Essentials: Transform at Your Own Pace",
      subheadline:
        "Access all the core resources of the CLEAN program—video devotionals, teaching content, and a supportive community—on your own schedule. Add coaching for personalized guidance.",
      description:
        "Self-Paced Learning: Complete the 5-week devotional journey at your own pace. Full Access to Resources: Video devotionals, electronic book, and downloadable tools. Private Online Community: Join a supportive network of like-minded men. Monthly Live Q&A: Participate in recorded live sessions with CLEAN leaders. Add Coaching: Enhance your experience with group or one-on-one coaching sessions.",
      price: "$99/month",
      link: "/wooden-vessel.webp",
      cta1: "Ready to start your transformation? Join CLEAN Essentials today and take the first step at your own pace.",
      cta2: "Start Today",
    },
    {
      title: "silver tier",
      headline: "Step into Leadership with CLEAN",
      subheadline:
        "Join a 5-week journey designed to equip you with the tools, training, and support to lead a thriving men’s ministry in your church.",
      description:
        "Advanced Training: Learn how to recruit, train, and disciple leaders within your church. Live Group Coaching: Participate in synchronous small group sessions for real-time interaction and support. Proven Resources: Access exclusive video content, downloadable tools, and a physical CLEAN book. Community Support: Join a private online community for networking and encouragement.",
      price: "Coming Soon",
      link: "/silver-vessel.webp",
      cta1: "Ready to grow as a leader? Join CLEAN Leadership today and take the next step in your transformation journey.",
      // cta2: "Start Today",
    },
    {
      title: "gold tier",
      headline: "Become a CLEAN Vessel: Refined for Honorable Use",
      subheadline:
        "Join an exclusive, high-touch program designed to transform your church’s men’s ministry through customized strategies, proven programming, and personalized coaching.",
      description:
        "Customized Approach: Tailored strategies to fit your church’s unique needs. Proven Results: Grow attendance, tithing, and volunteerism through authentic brotherhood. Leadership Development: Equip men to disciple others and sustain the ministry long-term. Exclusive Access: Live sessions with Donovan Anderson and personalized coaching from the program creator.",
      price: "Coming Soon",
      link: "/gold-vessel.webp",
      cta1: "Ready to build a men’s ministry that transforms lives? Join CLEAN Vessels today!",
      // cta2: "Start Today",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl">
          Our Resources
        </h2>
        <p className="mb-8 text-xl text-center md:text-xl">
          Each package has a maximum of 10 people, and will be split into two
          groups of 5 for effective and personal discipleship.
        </p>
        <p className="mb-8 text-xl text-center md:text-xl">
          Clean also offers{" "}
          <a href="/Scholarship" className="text-blue-600 hover:text-blue-800">
            scholarship opportunities
          </a>{" "}
          to find cost-effective ways to continue this mission.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resourceDetails.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md"
            >
              {/* Top Section: Image, Title, Headline, Subheadline, Description */}
              <div>
                <Image
                  src={resource.link}
                  width={300}
                  height={200}
                  alt={resource.title}
                  className="object-cover w-full rounded-t-lg h-100"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-center uppercase">
                    {resource.title}
                  </h3>
                  <h4 className="mt-2 text-lg font-bold text-center text-gray-800">
                    {resource.headline}
                  </h4>
                  <p className="mt-2 text-sm text-center text-gray-600">
                    {resource.subheadline}
                  </p>
                  <p className="mt-4 text-center text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
              </div>

              {/* Bottom Section: Price and Button */}
              <div className="mt-6">
                <div className="flex flex-col items-center justify-between gap-4">
                  <span>{resource.cta1}</span>
                  <span className="text-xl font-bold text-gray-800">
                    {resource.price}
                  </span>
                  <Link
                    href="/Pricing"
                    className="w-full px-4 py-2 text-center text-white rounded-md bg-primary-red hover:bg-red-800"
                  >
                    {resource.cta2}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

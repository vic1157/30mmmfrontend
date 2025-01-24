import Image from "next/image";

const PricingPage = () => {
  const resourceDetails = [
    {
      title: "clay tier",
      headline: "CLEAN Starter: Begin Your Transformation Journey",
      subheadline:
        "A free, introductory tier designed to help men explore the CLEAN program and take the first step toward spiritual growth and integrity.",
      description: [
        "Introductory Video Devotionals: Access to a selection of video devotionals and teaching content.",
        "Public Community Forum: Join a public online forum for general discussion and support.",
        "Weekly Email Newsletters: Receive weekly emails with tips, encouragement, and updates.",
        "Value Proposition: Explore the CLEAN program with no financial commitment, connect with a community of like-minded men, and receive weekly encouragement to stay motivated on your journey.",
      ],
      price: "Free",
      link: "/clay-vessel.webp",
      cta1: "Ready to take the first step? Join CLEAN Starter today and start your transformation journey.",
      cta2: "Join Today",
    },
    {
      title: "wood tier",
      headline: "CLEAN Essentials: Grow in Faith and Brotherhood",
      subheadline:
        "A self-paced program designed to help men grow spiritually, build authentic relationships, and live with integrity. Add coaching for personalized guidance.",
      description: [
        "Self-Paced, Asynchronous Access: Access to all video devotionals and teaching content on-demand.",
        "Full Access to Online Community: Join a private online community for CLEAN Essentials participants.",
        "Digital Materials: Electronic book (eBook) included with your membership.",
        "Progress Tracking Tools: Access to tools to monitor your growth and goals throughout the program.",
        "Bonus Content: Exclusive video content, such as interviews with guest speakers and advanced teachings.",
        "Upsell Options: Group Coaching Add-On ($99/month) or One-on-One Coaching Add-On ($199/session).",
      ],
      price: "$99/month",
      link: "/wooden-vessel.webp",
      cta1: "Ready to start your transformation? Join CLEAN Essentials today and take the first step at your own pace. Add coaching for personalized guidance!",
      cta2: "Join Today",
    },
    {
      title: "silver tier",
      headline: "CLEAN Leadership: Equip, Lead, Transform",
      subheadline:
        "A 5-week program designed to equip men with the tools and training to lead thriving men’s ministries in their churches.",
      description: [
        "Advanced Leadership Training: Learn how to recruit and train leaders within your church.",
        "Live Group Coaching: Participate in synchronous small group sessions led by a seasoned CLEAN leader.",
        "Proven Resources: Access exclusive video content, actionable templates, and physical copies of the CLEAN book and Leadership journal.",
        "Private Online Community: Join a private online platform for CLEAN Leadership participants.",
        "Two Coaching Sessions with the Program Creator: Receive personalized guidance on leadership development and ministry building.",
      ],
      price: "$1500",
      link: "/silver-vessel.webp",
      cta1: "Ready to lead? Join CLEAN Leadership today and equip yourself to transform your church.",
      cta2: "Join Today",
    },
    {
      title: "gold tier",
      headline: "CLEAN Vessels: Refined for Honorable Use",
      subheadline:
        "An exclusive, high-touch program designed to transform your church’s men’s ministry through customized strategies, proven programming, and personalized coaching.",
      description: [
        "Customized Men’s Ministry Development: Work directly with the program creator to tailor CLEAN’s approach to your church’s unique needs.",
        "Exclusive Access to Donovan Anderson: Participate in live, interactive sessions focused on advanced teachings and leadership development.",
        "Personalized Coaching and Consultation: Receive monthly consultation to address challenges and develop strategies.",
        "Closed, Premium Community: Join a private online platform for deep discussions and networking.",
        "Practical Physical Materials: Receive a personalized certificate of completion and physical copies of the CLEAN book for your group.",
      ],
      price: "$3000",
      link: "/gold-vessel.webp",
      cta1: "Ready to transform your church? Join CLEAN Vessels today and refine your ministry for honorable use.",
      cta2: "Join Today",
    },
  ];

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Our Pricing Plans
        </h1>
        <p className="mb-8 text-center">
          Ready to get started? Here are our options to start your Clean Journey
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resourceDetails.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 text-center bg-white rounded-lg shadow-md"
            >
              <div>
                <Image
                  src={resource.link}
                  alt={resource.title}
                  width={200}
                  height={150}
                  className="mb-4 rounded"
                />
                <h2 className="mb-2 text-2xl font-semibold text-gray-700 capitalize">
                  {resource.title}
                </h2>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {resource.headline}
                </h3>
                <p className="mb-4 text-gray-600">{resource.subheadline}</p>
                <ul className="mb-4 text-gray-600 list-disc list-inside">
                  {resource.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center justify-between w-full gap-4 mt-4">
                <span>{resource.cta1}</span>
                <span className="text-xl font-bold text-gray-800">
                  {resource.price}
                </span>
                <button className="w-full px-4 py-2 text-sm text-white uppercase transition rounded bg-primary-red hover:bg-red-800">
                  {resource.cta2}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

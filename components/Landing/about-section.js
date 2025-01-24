import Image from "next/image";
import Link from "next/link";
import { YTButton } from "../common/Footer/SocialButtons";
import YouTubeVideo from "../common/YouTubeVideoEmbedding";

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Left Column: Video Embed */}
          <div className="md:w-1/2">
            <YouTubeVideo videoId="tXCZLYmgmVc" />
            <div className="flex items-center mt-8">
              For more videos please see{" "}
              <Link
                href="//linktr.ee/30mmm"
                className="ml-2 text-blue-600 underline transition-colors duration-200 hover:text-blue-800"
              >
                our linktree
              </Link>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="mx-16 md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              About 30 Mighty Men Ministries
            </h2>
            <p className="mb-8 text-xl italic md:text-2xl">
              30MMM: A Ministry for Men, by Men
            </p>

            {/* Paragraph 1: Academic Background */}
            <p className="mb-6 text-lg text-muted-foreground">
              Founded by Dr. Donovan Anderson, a visionary leader with a
              distinguished academic and ministerial background, 30MMM exists to
              guide men toward a life of obedience, purpose, and brotherhood.
              Dr. Anderson earned his BA in History from Howard University in
              2004, graduating magna cum laude, followed by an MA in History
              from Howard University in 2006, also magna cum laude. He further
              pursued his passion for urban development, earning a PhD in City
              and Regional Planning from UNC Chapel Hill in 2015.
            </p>

            {/* Paragraph 2: Theological Training and Awards */}
            <p className="mb-6 text-lg text-muted-foreground">
              Driven by a calling to ministry, Dr. Anderson completed an MA from
              Wesley Theological Seminary in 2024 with honors. During his time
              at Wesley, he was recognized with the Harry Hoosier Spirit Award
              and the Margaret Pittman Award in Urban Ministry, reflecting his
              dedication to spiritual growth and community service.
            </p>

            {/* Paragraph 3: Ministry Experience */}
            <p className="mb-6 text-lg text-muted-foreground">
              Dr. Anderson’s journey in ministry is marked by deep commitment
              and hands-on leadership. He served as a small group leader at Zion
              Church in Landover for 4.5 years and participated in the
              Brothers-in-Discipleship program at First Baptist Church of
              Glenarden for 2 years. He also completed the Deacon-in-Training
              program at Zion Church, further solidifying his foundation in
              pastoral care and discipleship.
            </p>

            {/* Paragraph 4: Community Engagement and Coaching */}
            <p className="mb-6 text-lg text-muted-foreground">
              His passion for community engagement was honed as a fellow at
              Wesley Theological Seminary and through his participation in the
              Ministry Incubators Coaching Program. These experiences equipped
              him with the tools to address the unique challenges faced by men
              in today’s world.
            </p>

            {/* Paragraph 5: Founding 30MMM */}
            <p className="mb-6 text-lg text-muted-foreground">
              Combining his theological expertise, academic rigor, and a heart
              for discipleship, Dr. Anderson founded Thirty Mighty Men
              Ministries to equip men to grow into the leaders, husbands, and
              fathers God intended them to be. Through 30MMM, he continues to
              inspire and empower men to live lives of integrity, purpose, and
              faith.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

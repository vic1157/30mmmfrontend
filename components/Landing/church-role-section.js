import Image from "next/image";
import Link from "next/link";
import YouTubeVideo from "../common/YouTubeVideoEmbedding";

export function ChurchRoleSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Left Column: Video Embed */}
          <div className="md:w-1/2">
            <YouTubeVideo videoId="3reik8Pkt60" />
          </div>

          {/* Right Column: Content */}
          <div className="mx-16 md:w-1/2">
            <h1>The Church’s Role in Healing</h1>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Why CLEAN Matters
            </h2>

            {/* The Problem Section */}
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold">The Problem</h3>
              <p className="mb-4 text-lg text-muted-foreground">
                Pornography is one of the most pervasive and damaging issues
                facing men and families today. Yet:
              </p>
              <ul className="pl-6 mb-4 text-lg list-disc text-muted-foreground">
                <li>
                  Only 9% of pastors say their church has a program to address
                  pornography—up just 2% since 2015.
                </li>
                <li>
                  Pornography consumption continues to rise, yet churches have
                  made little progress in equipping leaders and congregants to
                  address it.
                </li>
                <li>
                  For every porn user, there’s a partner experiencing betrayal
                  trauma, but most churches lack support programs.
                  <a
                    href="https://www.barna.com/trends/church-and-porn/"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    [1]
                  </a>
                </li>
              </ul>
              <p className="mb-4 text-lg text-muted-foreground">
                Who else but the church can address this issue with grace,
                truth, and lasting impact?
              </p>
            </div>

            {/* The Solution Section */}
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold">The Solution</h3>
              <p className="mb-4 text-lg text-muted-foreground">
                The CLEAN program empowers churches:
              </p>
              <ul className="pl-6 mb-4 text-lg list-disc text-muted-foreground">
                <li>
                  Break the silence around pornography and betrayal trauma.
                </li>
                <li>
                  Equip leaders with tools to address this issue effectively.
                </li>
                <li>Restore families and strengthen communities.</li>
              </ul>
              <p className="mb-4 text-lg text-muted-foreground">
                Churches with programs like CLEAN are four times more likely to
                help men overcome pornography. CLEAN integrates counseling,
                community engagement, and accountability to address the complex
                realities of sexual struggles.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex gap-4">
              <Link
                href="/Pricing"
                className="px-6 py-2 text-white rounded-md bg-primary-red hover:bg-red-800"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

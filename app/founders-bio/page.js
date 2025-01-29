"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function FounderBio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const Timeline = ({ children }) => (
    <div className="pl-6 ml-4 space-y-6 border-l-2 border-primary-red">
      {children}
    </div>
  );

  const TimelineItem = ({ year, title, children }) => (
    <div className="relative">
      <div className="absolute -left-[2.19rem] w-4 h-4 rounded-full bg-primary-red" />
      <div>
        <span className="text-sm text-gray-500">{year}</span>
        <h4 className="text-lg font-semibold">{title}</h4>
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative px-4 mx-auto">
          <motion.div
            {...fadeIn}
            className="flex flex-col items-center max-w-4xl gap-8 mx-auto md:flex-row"
          >
            <div className="mt-16 md:w-1/3">
              {/* Replace with actual image path */}
              <div className="w-64 h-64 overflow-hidden bg-gray-300 rounded-full">
                <Image
                  src="/placeholder-founder.jpg"
                  alt="Dr. Donovan Anderson"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center md:w-2/3 md:text-left">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Dr. Donovan Anderson
              </h1>
              <p className="text-xl text-gray-300 md:text-2xl">
                Visionary Leader and Founder of 30 Mighty Men Ministries
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700">
              Dr. Donovan Anderson is a trailblazer in the fields of ministry,
              academia, and urban development. With a passion for guiding men
              toward lives of obedience, purpose, and brotherhood, he founded 30
              Mighty Men Ministries (30MMM) as a beacon for men seeking
              transformation and empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">
              Academic Excellence
            </h2>
            <Timeline>
              <TimelineItem year="2004" title="Bachelor of Arts in History">
                <p className="text-gray-600">
                  Howard University, magna cum laude
                </p>
              </TimelineItem>
              <TimelineItem year="2006" title="Master of Arts in History">
                <p className="text-gray-600">
                  Howard University, magna cum laude
                </p>
              </TimelineItem>
              <TimelineItem
                year="2015"
                title="PhD in City and Regional Planning"
              >
                <p className="text-gray-600">UNC Chapel Hill</p>
              </TimelineItem>
              <TimelineItem year="2024" title="Master of Arts in Theology">
                <p className="text-gray-600">
                  Wesley Theological Seminary, with honors
                </p>
                <div className="mt-2">
                  <p className="font-semibold">Awards:</p>
                  <ul className="ml-4 text-gray-600 list-disc">
                    <li>Harry Hoosier Spirit Award</li>
                    <li>Margaret Pittman Award in Urban Ministry</li>
                  </ul>
                </div>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </div>
      </section>

      {/* Ministry Leadership Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">
              Leadership at Zion Church
            </h2>
            <div className="p-8 rounded-lg bg-gray-50">
              <h3 className="mb-4 text-xl font-semibold">
                Lead Shepherd for the Men&apos;s Ministry
              </h3>
              <p className="mb-6 text-gray-700">
                At Zion Church&apos;s Greenbelt Campus, the largest in the Zion
                network, Dr. Anderson built the men&apos;s ministry from the
                ground up, growing it into a vibrant community of over 450 men.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold">
                  Innovative Programs Developed:
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-white rounded shadow">
                    <h5 className="font-semibold text-primary-red">CLEAN</h5>
                    <p className="text-sm text-gray-600">
                      Tools to Achieve Sexual Integrity for the Christian Man
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded shadow">
                    <h5 className="font-semibold text-primary-red">
                      Get FIT Bootcamp
                    </h5>
                    <p className="text-sm text-gray-600">
                      Physical and spiritual wellness program
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded shadow">
                    <h5 className="font-semibold text-primary-red">
                      Living Word Bible Study
                    </h5>
                    <p className="text-sm text-gray-600">
                      In-depth Scripture study and application
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">
              Ministry Journey
            </h2>
            <Timeline>
              <TimelineItem title="Small Group Leader">
                <p className="text-gray-600">6 years at Zion Church</p>
              </TimelineItem>
              <TimelineItem title="Brothers-in-Discipleship Program">
                <p className="text-gray-600">
                  3 years at First Baptist Church of Glenarden
                </p>
              </TimelineItem>
              <TimelineItem title="Training Programs">
                <ul className="ml-4 text-gray-600 list-disc">
                  <li>Completed Deacon-in-Training Program at Zion Church</li>
                  <li>Completed Minister-in-Training Program at Zion Church</li>
                </ul>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 text-white bg-primary-red">
        <div className="container px-4 mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">A Vision for the Future</h2>
            <p className="mb-8 text-xl leading-relaxed">
              Dr. Anderson&apos;s vision is clear: to create a world where men
              lead with integrity, families are restored, and communities
              flourish. Through 30 Mighty Men Ministries, he continues to
              inspire and empower men to become the leaders, husbands, and
              fathers God intended them to be.
            </p>
            <Link href="/Pricing">
              <button className="px-8 py-3 mt-8 transition-colors bg-white rounded-md text-primary-red hover:bg-gray-100">
                Join the Movement
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FounderBio;

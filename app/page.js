import Head from "next/head";
import Image from "next/image";
import { AboutSection } from "@/components/Landing/about-section";
import { ChurchRoleSection } from "@/components/Landing/church-role-section";
import { CTASection } from "@/components/Landing/cta-section";
import { HeroSection } from "@/components/Landing/hero-section";
import MetricsDashboard from "@/components/Landing/metrics-dashboard";
import { ResourcesSection } from "@/components/Landing/resources-section";
import { TestimonialsSection } from "@/components/Landing/testimonials-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ChurchRoleSection />
      <MetricsDashboard />
      <ResourcesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import LeadHunterSpotlight from "../components/landing/LeadHunterSpotlight";
import Agents from "../components/landing/Agents";
import Safety from "../components/landing/Safety";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export const metadata: Metadata = {
  title: { absolute: "Miracle — Creative Studio Lead Generation & Outreach" },
  description:
    "Free open-source scraper for Google Maps and LinkedIn, visual creative gap tagging, and 1-click automated outreach tailored for Graphic Design & Video Editing Studios.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <LeadHunterSpotlight />
        <Agents />
        <Safety />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

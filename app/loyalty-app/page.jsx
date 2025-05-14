"use client";
import Faq from "@/components/common/Faq";
import Features from "@/components/loyalty-app/Features";
import Hero from "@/components/loyalty-app/Hero";
import Pricing from "@/components/common/Pricing";
import Header from "@/components/common/Header";
import KeyFeatures from "@/components/loyalty-app/KeyFeatures";
import Footer from "@/components/common/Footer";

export default function LoyaltyApp() {
  return (
    <>
    <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
      <Header />
      <Hero />
      <Features />
      <KeyFeatures />
      <Pricing />
      <Faq />
      <Footer />
      </div>
    </>
  );
}

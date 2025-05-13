import Header from "@/components/common/Header";
import Features from "@/components/innerpages/HowItWorks/Features";
import Hero from "@/components/innerpages/HowItWorks/Hero";
import React from "react";
import Footer from "@/components/common/Footer";
export const metadata = {
  title:
    "Home 3 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage3() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <Hero />
        <Features />
        
      </div>
      <Footer />
    </>
  );
}

import Header from "@/components/common/Header";
import Features from "@/components/innerpages/HowItWorks/Features";
import Hero from "@/components/innerpages/HowItWorks/Hero";
import Faq from "@/components/common/Faq";
import React from "react";
import Footer from "@/components/common/Footer";
export const metadata = {
  title: "Jak to działa | Loyster - Profesjonalne aplikacje lojalnościowe",
  description: "Dowiedz się, jak działa Loyster i jak nasza platforma może pomóc Ci stworzyć skuteczny program lojalnościowy dla Twoich klientów.",
};
export default function HomePage3() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <Hero />
        <Features />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

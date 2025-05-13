import Header from "@/components/common/Header";
import Features from "@/components/innerpages/implementation/Features";
import Hero from "@/components/innerpages/implementation/Hero";
import React from "react";
import Footer from "@/components/common/Footer";
export const metadata = {
  title: "Wdrożenie | Loyster - Kompleksowe wdrożenie aplikacji lojalnościowej",
  description: "Sprawdź, jak przebiega proces wdrożenia aplikacji lojalnościowej Loyster. Profesjonalne wsparcie na każdym etapie implementacji.",
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

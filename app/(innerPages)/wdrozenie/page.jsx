import Header from "@/components/common/Header";
import Features from "@/components/innerpages/implementation/Features";
import Hero from "@/components/innerpages/implementation/Hero";
import React from "react";
import Faq from "@/components/common/Faq";
import Footer from "@/components/common/Footer";
export const metadata = {
  title: "Wdrożenie | Loyster - Kompleksowe wdrożenie aplikacji lojalnościowej",
  description: "Wdrożenie Loyster w 7 dni. Pełne wsparcie techniczne, szkolenie dla zespołu, import danych klientów. Profesjonalne wdrożenie programu lojalnościowego bez stresu.",
  keywords: ["wdrożenie aplikacji lojalnościowej", "implementacja programu lojalnościowego", "szkolenie loyalty"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/wdrozenie',
  },
  openGraph: {
    title: "Wdrożenie | Loyster - Kompleksowe wdrożenie aplikacji lojalnościowej",
    description: "Wdrożenie Loyster w 7 dni. Pełne wsparcie techniczne, szkolenie dla zespołu, import danych klientów. Profesjonalne wdrożenie programu lojalnościowego bez stresu.",
    url: 'https://www.loyster.pl/wdrozenie',
    siteName: 'Loyster',
    images: [
      {
        url: '/assets/images/og.png',
        width: 640,
        height: 427,
        alt: 'Logo Loyster',
      }
    ],
    locale: 'pl_PL',
    type: 'website',
  }
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

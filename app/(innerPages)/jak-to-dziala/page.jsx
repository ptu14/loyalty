import Header from "@/components/common/Header";
import Features from "@/components/innerpages/HowItWorks/Features";
import Hero from "@/components/innerpages/HowItWorks/Hero";
import Faq from "@/components/common/Faq";
import React from "react";
import Footer from "@/components/common/Footer";
export const metadata = {
  title: "Jak działa program lojalnościowy Loyster",
  description: "Zobacz, jak działa Loyster: cyfrowa karta lub własna aplikacja oraz prosta obsługa programu przez zespół albo system POS.",
  keywords: ["jak działa program lojalnościowy", "cyfrowa karta lojalnościowa", "aplikacja lojalnościowa"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/jak-to-dziala',
  },
  openGraph: {
    title: "Jak działa program lojalnościowy Loyster",
    description: "Cyfrowa karta lub własna aplikacja oraz wygodny sposób obsługi programu po stronie firmy.",
    url: 'https://www.loyster.pl/jak-to-dziala',
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
        <main>
          <Hero />
          <Features />
          <Faq />
        </main>
      </div>
      <Footer />
    </>
  );
}

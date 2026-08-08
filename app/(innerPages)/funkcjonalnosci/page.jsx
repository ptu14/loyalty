import Header from "@/components/common/Header";
import Features from "@/components/innerpages/features/Features";
import Footer from "@/components/common/Footer";
import Hero from "@/components/innerpages/features/Hero";
import Faq from "@/components/common/Faq";
export const metadata = {
  title: "Funkcjonalności programu lojalnościowego | Loyster",
  description: "Poznaj funkcje Loyster: punkty, pieczątki, nagrody, komunikacja, automatyzacje, analityka oraz cyfrowa karta lub własna aplikacja.",
  keywords: ["funkcje programu lojalnościowego", "cyfrowa karta lojalnościowa", "system punktowy", "aplikacja lojalnościowa"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/funkcjonalnosci',
  },
  openGraph: {
    title: "Funkcjonalności programu lojalnościowego | Loyster",
    description: "Punkty, nagrody, komunikacja i wyniki w jednym miejscu — z cyfrową kartą, własną aplikacją lub oboma rozwiązaniami.",
    url: 'https://www.loyster.pl/funkcjonalnosci',
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
export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <main id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}

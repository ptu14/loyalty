import Header from "@/components/common/Header";
import Features from "@/components/innerpages/features/Features";
import Footer from "@/components/common/Footer";
import Hero from "@/components/innerpages/features/Hero";
import Faq from "@/components/common/Faq";
import Cta from "@/components/innerpages/features/Cta";
export const metadata = {
  title: "Funkcjonalności | Loyster - Tworzenie aplikacji lojalnościowych dla Twojego biznesu",
  description: "Funkcje Loyster: system punktowy, nagrody i promocje, powiadomienia push, SMS marketing, analityka klientów, integracje z POS. Zobacz pełną listę możliwości.",
  keywords: ["funkcje aplikacji lojalnościowej", "powiadomienia push", "system punktowy", "analityka klientów", "loyalty features"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/funkcjonalnosci',
  },
  openGraph: {
    title: "Funkcjonalności | Loyster - Tworzenie aplikacji lojalnościowych dla Twojego biznesu",
    description: "Funkcje Loyster: system punktowy, nagrody i promocje, powiadomienia push, SMS marketing, analityka klientów, integracje z POS. Zobacz pełną listę możliwości.",
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
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Faq />
          <div className="pt-6 xl:pt-9"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

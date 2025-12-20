import Header from "@/components/common/Header";
import Hero from "@/components/innerpages/features/Hero";
import Footer from "@/components/common/Footer";
import Faq from "@/components/common/Faq";
import Pricing from "@/components/common/Pricing";
export const metadata = {
  title: "Cennik | Loyster - Elastyczne plany cenowe dla aplikacji lojalnościowych",
  description: "Cennik Loyster - pakiety Start, Pro i Enterprise. Bez ukrytych kosztów, bezpłatny okres próbny. Porównaj funkcje i wybierz idealny plan dla swojego biznesu.",
  keywords: ["cennik aplikacji lojalnościowej", "program lojalnościowy cena", "loyalty app pricing"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/cennik',
  },
  openGraph: {
    title: "Cennik | Loyster - Elastyczne plany cenowe dla aplikacji lojalnościowych",
    description: "Cennik Loyster - pakiety Start, Pro i Enterprise. Bez ukrytych kosztów, bezpłatny okres próbny. Porównaj funkcje i wybierz idealny plan dla swojego biznesu.",
    url: 'https://www.loyster.pl/cennik',
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
export default function PricingPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <Pricing />
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}

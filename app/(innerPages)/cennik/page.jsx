import Header from "@/components/common/Header";
import Hero from "@/components/innerpages/features/Hero";
import Footer from "@/components/common/Footer";
import Faq from "@/components/common/Faq";
import Pricing from "@/components/common/Pricing";
export const metadata = {
  title: "Cennik | Loyster - Program lojalnościowy z aplikacją lub bez",
  description: "Porównaj pakiety Loyster: Mini z kartą Apple Wallet i Google Wallet, Poznajmy się z własną aplikacją oraz Premium dla rozwijających się marek.",
  keywords: ["cennik programu lojalnościowego", "program lojalnościowy bez aplikacji", "karta lojalnościowa Apple Wallet", "Google Wallet", "aplikacja lojalnościowa cena"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/cennik',
  },
  openGraph: {
    title: "Cennik | Loyster - Program lojalnościowy z aplikacją lub bez",
    description: "Porównaj pakiety Mini, Poznajmy się i Premium. Zacznij od karty Wallet bez własnej aplikacji i rozwijaj program razem z biznesem.",
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

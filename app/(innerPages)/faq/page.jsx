import Header from "@/components/common/Header";

import Footer from "@/components/common/Footer";
import Contact from "@/components/innerpages/contact/Contact";
import Faq from "@/components/common/Faq";
import FaqShortcut from "@/components/innerpages/faq/Faqshortcut";
export const metadata = {
  title: "FAQ | Loyster - Najczęściej zadawane pytania",
  description: "Odpowiedzi na najczęstsze pytania o Loyster. Jak zacząć? Ile kosztuje? Jakie integracje są dostępne? Znajdź odpowiedź lub skontaktuj się z nami.",
  keywords: ["FAQ program lojalnościowy", "pytania aplikacja lojalnościowa", "pomoc Loyster"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/faq',
  },
  openGraph: {
    title: "FAQ | Loyster - Najczęściej zadawane pytania",
    description: "Odpowiedzi na najczęstsze pytania o Loyster. Jak zacząć? Ile kosztuje? Jakie integracje są dostępne? Znajdź odpowiedź lub skontaktuj się z nami.",
    url: 'https://www.loyster.pl/faq',
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
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <FaqShortcut />
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}

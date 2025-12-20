import Header from "@/components/common/Header";

import Footer from "@/components/common/Footer";
import Contact from "@/components/innerpages/contact/Contact";
import Faq from "@/components/common/Faq";
export const metadata = {
  title: "Kontakt | Loyster - Aplikacje lojalnościowe dla Twojego biznesu",
  description: "Skontaktuj się z Loyster - bezpłatna konsultacja i demo. Odpowiadamy w ciągu 24h. Telefon, email lub formularz kontaktowy. Porozmawiaj z ekspertem.",
  keywords: ["kontakt Loyster", "demo aplikacji lojalnościowej", "konsultacja program lojalnościowy"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/kontakt',
  },
  openGraph: {
    title: "Kontakt | Loyster - Aplikacje lojalnościowe dla Twojego biznesu",
    description: "Skontaktuj się z Loyster - bezpłatna konsultacja i demo. Odpowiadamy w ciągu 24h. Telefon, email lub formularz kontaktowy. Porozmawiaj z ekspertem.",
    url: 'https://www.loyster.pl/kontakt',
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
          <Contact />
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}

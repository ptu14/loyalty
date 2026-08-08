import LoyaltyApp from "./loyalty-app/page";
export const metadata = {
  title: "Loyster - Program lojalnościowy z kartą Wallet lub własną aplikacją",
  description: "Uruchom program lojalnościowy z kartą Apple Wallet i Google Wallet bez budowania własnej aplikacji. Zacznij prosto i dodaj aplikację, gdy potrzebujesz więcej możliwości.",
  keywords: ["program lojalnościowy", "program lojalnościowy bez aplikacji", "Apple Wallet", "Google Wallet", "aplikacja lojalnościowa", "system punktowy", "karta lojalnościowa"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/',
  },
  openGraph: {
    title: "Loyster - Program lojalnościowy z kartą Wallet lub własną aplikacją",
    description: "Uruchom program lojalnościowy z kartą Apple Wallet i Google Wallet bez budowania własnej aplikacji. Zacznij prosto i rozwijaj program razem z firmą.",
    url: 'https://www.loyster.pl/',
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
  },
};
export default function HomePage() {
  return (
    <>
      <LoyaltyApp />
    </>
  );
}

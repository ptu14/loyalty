import LoyaltyApp from "./loyalty-app/page";
export const metadata = {
  title: "Loyster - Profesjonalne aplikacje lojalnościowe dla Twojego biznesu",
  description: "Loyster - stwórz własną aplikację lojalnościową w 7 dni. System punktowy, nagrody, powiadomienia push i analityka. Zwiększ powracalność klientów o 40%.",
  keywords: ["aplikacja lojalnościowa", "program lojalnościowy", "system punktowy", "karty lojalnościowe", "nagrody dla klientów", "loyalty app"],
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  alternates: {
    canonical: 'https://www.loyster.pl/',
  },
  openGraph: {
    title: "Loyster - Profesjonalne aplikacje lojalnościowe dla Twojego biznesu",
    description: "Loyster - stwórz własną aplikację lojalnościową w 7 dni. System punktowy, nagrody, powiadomienia push i analityka. Zwiększ powracalność klientów o 40%.",
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

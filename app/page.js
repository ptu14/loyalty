import LoyaltyApp from "./loyalty-app/page";
export const metadata = {
  title: "Loyster - Profesjonalne aplikacje lojalnościowe dla Twojego biznesu",
  description: "Loyster to kompleksowa platforma do tworzenia i zarządzania programami lojalnościowymi, która pomoże Ci zwiększyć zaangażowanie klientów i rozwinąć biznes.",
  icons: {
    icon: 'assets/images/loyster.svg',
  },
  openGraph: {
    title: "Loyster - Profesjonalne aplikacje lojalnościowe dla Twojego biznesu",
    description: "Loyster to kompleksowa platforma do tworzenia i zarządzania programami lojalnościowymi, która pomoże Ci zwiększyć zaangażowanie klientów i rozwinąć biznes.",
    url: 'https://www.loyster.pl/', // Zamień na swój URL
    siteName: 'Loyster',
    images: [
      {
        url: '/assets/images/logo.svg',
        width: 117,
        height: 40,
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

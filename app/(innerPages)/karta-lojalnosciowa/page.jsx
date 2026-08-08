import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WalletCardLanding from "@/components/wallet-card/WalletCardLanding";

export const metadata = {
  title: "Cyfrowa karta lojalnościowa | Apple Wallet i Google Wallet | Loyster",
  description:
    "Uruchom program lojalnościowy bez własnej aplikacji. Cyfrowa karta w Apple Wallet i Google Wallet, punkty lub pieczątki, nagrody i panel Loyster.",
  keywords: [
    "cyfrowa karta lojalnościowa",
    "karta lojalnościowa Apple Wallet",
    "karta lojalnościowa Google Wallet",
    "program lojalnościowy bez aplikacji",
  ],
  icons: {
    icon: "/assets/images/loyster.svg",
  },
  alternates: {
    canonical: "https://www.loyster.pl/karta-lojalnosciowa",
  },
  openGraph: {
    title: "Cyfrowa karta lojalnościowa bez własnej aplikacji | Loyster",
    description:
      "Punkty lub pieczątki, nagrody i karta z Twoim logo w Apple Wallet i Google Wallet.",
    url: "https://www.loyster.pl/karta-lojalnosciowa",
    siteName: "Loyster",
    images: [
      {
        url: "/assets/images/og.png",
        width: 640,
        height: 427,
        alt: "Loyster",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function WalletCardPage() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <Header />
      <WalletCardLanding />
      <Footer />
    </div>
  );
}

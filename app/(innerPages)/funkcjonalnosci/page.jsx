import Header from "@/components/common/Header";
import Features from "@/components/innerpages/features/Features";
import Footer from "@/components/common/Footer";
import Hero from "@/components/innerpages/features/Hero";
import Faq from "@/components/common/Faq";
import Cta from "@/components/innerpages/features/Cta";
export const metadata = {
  title: "Funkcjonalności | Loyster - Tworzenie aplikacji lojalnościowych dla Twojego biznesu",
  description: "Odkryj wszystkie funkcjonalności Loyster - kompleksowego narzędzia do tworzenia i zarządzania programami lojalnościowymi dla Twojej firmy.",
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

import Header from "@/components/common/Header";
import Hero from "@/components/innerpages/features/Hero";
import Footer from "@/components/common/Footer";
import Faq from "@/components/common/Faq";
import Pricing from "@/components/common/Pricing";
export const metadata = {
  title: "Cennik | Loyster - Elastyczne plany cenowe dla aplikacji lojalnościowych",
  description: "Zapoznaj się z ofertą cenową Loyster. Wybierz plan idealnie dopasowany do potrzeb i możliwości Twojego biznesu.",
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

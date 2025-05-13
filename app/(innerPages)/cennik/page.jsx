import Header from "@/components/common/Header";

import Footer from "@/components/common/Footer";
import Faq from "@/components/common/Faq";
import Pricing from "@/components/common/Pricing";
export const metadata = {
  title:
    "Cennik",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
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

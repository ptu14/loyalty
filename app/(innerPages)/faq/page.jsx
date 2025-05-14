import Header from "@/components/common/Header";

import Footer from "@/components/common/Footer";
import Contact from "@/components/innerpages/contact/Contact";
import Faq from "@/components/common/Faq";
import FaqShortcut from "@/components/innerpages/faq/Faqshortcut";
export const metadata = {
  title: "Kontakt | Loyster - Aplikacje lojalnościowe dla Twojego biznesu",
  description: "Skontaktuj się z nami, aby dowiedzieć się więcej o aplikacjach lojalnościowych Loyster i jak mogą pomóc w rozwoju Twojego biznesu.",
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

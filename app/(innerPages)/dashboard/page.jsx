import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/innerpages/dashboard/Hero";
import Promotions from "@/components/innerpages/dashboard/Promotions";
import PromotionsCard from "@/components/innerpages/dashboard/PromotionsCard";

export const metadata = {
    title: "Dashboard | Loyster - Twój panel lojalnościowy",
    description: "Sprawdź swoje punkty, nagrody i najnowsze promocje w panelu lojalnościowym Loyster.",
    icons: {
        icon: 'assets/images/loyster.svg',
    },
    openGraph: {
        title: "Cennik | Loyster - Elastyczne plany cenowe dla aplikacji lojalnościowych",
        description: "Zapoznaj się z ofertą cenową Loyster. Wybierz plan idealnie dopasowany do potrzeb i możliwości Twojego biznesu.",
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
    }
};

export default function DashboardPage() {
    return (
        <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
            <Header />
            <div id="wrapper" className="wrap">
                <Hero />
                <PromotionsCard />
                <Promotions />
            </div>
            <Footer />
        </div>
    );
}

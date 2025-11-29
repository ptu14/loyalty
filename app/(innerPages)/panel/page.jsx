import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import UserPanel from "@/components/innerpages/panel/UserPanel";

export const metadata = {
    title: "Panel Użytkownika | Loyster - Twoje Ustawienia",
    description: "Zarządzaj swoimi danymi osobistymi i preferencjami powiadomień w panelu Loyster.",
    icons: {
        icon: 'assets/images/loyster.svg',
    },
    openGraph: {
        title: "Panel Użytkownika | Loyster - Twoje Ustawienia",
        description: "Zarządzaj swoimi danymi osobistymi i preferencjami powiadomień w panelu Loyster.",
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

export default function PanelPage() {
    return (
        <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
            <Header />
            <div id="wrapper" className="wrap">
                <UserPanel />
            </div>
            <Footer />
        </div>
    );
}

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QrCode from "@/components/innerpages/qr-code/QrCode";

export const metadata = {
    title: "Twój Kod QR | Loyster - Aktywuj Promocje",
    description: "Pokaż swój kod QR przy kasie aby aktywować promocje i zbierać punkty lojalnościowe.",
    icons: {
        icon: 'assets/images/loyster.svg',
    },
    openGraph: {
        title: "Twój Kod QR | Loyster - Aktywuj Promocje",
        description: "Pokaż swój kod QR przy kasie aby aktywować promocje i zbierać punkty lojalnościowe.",
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

export default function QrCodePage() {
    return (
        <div className="page-wrapper uni-body qr-code bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
            <Header />
            <div id="wrapper" className="wrap">
                <QrCode />
            </div>
            <Footer />
        </div>
    );
}

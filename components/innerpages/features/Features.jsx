"use client";

import Image from "next/image";
import Link from "next/link";
import { openContactModal } from "@/utlis/toggleContactModal";
import styles from "./FeaturesPage.module.css";

const coreFeatures = [
  {
    id: "feature-2",
    label: "Punkty i nagrody",
    title: "Nagradzaj zachowania, które mają znaczenie.",
    description:
      "Ustalaj zasady zdobywania punktów lub pieczątek za zakupy, wizyty i inne aktywności. Klienci wymieniają je na wybrane przez Ciebie nagrody.",
    image: "/assets/images/features/earnburn.png",
    alt: "Punkty i nagrody w Loyster",
  },
  {
    id: "feature-3",
    label: "Komunikacja",
    title: "Docieraj do klientów z właściwą wiadomością.",
    description:
      "Informuj o punktach, nagrodach i promocjach w kanałach dostępnych w wybranym pakiecie. Personalizuj treści i planuj komunikację w jednym miejscu.",
    video: "/assets/images/features/communication2.webm",
    alt: "Komunikacja z klientami w Loyster",
  },
  {
    id: "feature-4",
    label: "Automatyzacje i scenariusze",
    title: "Program pracuje także wtedy, gdy Ty zajmujesz się biznesem.",
    description:
      "Uruchamiaj powitania, akcje urodzinowe, happy hours i kolejne scenariusze bez ręcznego wykonywania każdej czynności.",
    video: "/assets/images/features/automation2.webm",
    alt: "Automatyzacje programu lojalnościowego",
    link: { href: "/#scenariusze", text: "Zobacz przykładowe scenariusze" },
  },
  {
    id: "feature-5",
    label: "Dane klientów",
    title: "Poznawaj klientów w jednym miejscu.",
    description:
      "Porządkuj informacje o uczestnikach programu, ich aktywności i preferencjach. Buduj pełniejszy obraz relacji z klientem.",
    video: "/assets/images/features/crm.webm",
    alt: "Dane klientów w Loyster",
  },
  {
    id: "feature-6",
    label: "Wyniki programu",
    title: "Sprawdzaj, co naprawdę działa.",
    description:
      "Obserwuj aktywność klientów i skuteczność programu na czytelnych dashboardach. Podejmuj kolejne decyzje na podstawie wyników.",
    video: "/assets/images/features/analytics.webm",
    alt: "Analityka programu lojalnościowego",
  },
];

const channels = [
  {
    label: "Prosty start",
    title: "Cyfrowa karta lojalnościowa",
    description:
      "Klient dodaje kartę do Apple Wallet lub Google Wallet i korzysta z programu bez pobierania aplikacji.",
    href: "/karta-lojalnosciowa",
    link: "Poznaj cyfrową kartę",
    featured: true,
  },
  {
    id: "feature-1",
    label: "Pełne doświadczenie marki",
    title: "Własna aplikacja iOS i Android",
    description:
      "Więcej miejsca na treści, promocje i komunikację oraz doświadczenie dopasowane do Twojej marki.",
    href: "/cennik#poznajmy-sie",
    link: "Zobacz pakiet z aplikacją",
  },
];

const growthFeatures = [
  {
    id: "feature-7",
    label: "Segmentacja",
    title: "Kieruj działania do odpowiednich klientów.",
    description:
      "Twórz grupy odbiorców na podstawie ich aktywności, historii i preferencji, aby lepiej dopasowywać komunikację oraz oferty.",
    image: "/assets/images/features/synerise_segment.png",
    alt: "Segmentacja klientów",
  },
  {
    id: "feature-8",
    label: "Testy A/B",
    title: "Porównuj pomysły i wybieraj skuteczniejsze.",
    description:
      "Testuj warianty wiadomości, nagród i scenariuszy. Wyniki pomagają rozwijać program na podstawie zachowań klientów.",
    video: "/assets/images/features/abtests2.webm",
    alt: "Testy A/B w Loyster",
  },
  {
    id: "feature-9",
    label: "Własna aplikacja",
    title: "Aktualizuj treści bez angażowania zespołu technicznego.",
    description:
      "W wariancie aplikacyjnym samodzielnie zarządzasz banerami, komunikatami i innymi treściami swojej marki.",
    video: "/assets/images/features/inapp.webm",
    alt: "Edytor treści aplikacji",
  },
  {
    id: "feature-10",
    label: "Kupony",
    title: "Dodawaj korzyści dopasowane do okazji.",
    description:
      "Twórz unikalne kupony i przyznawaj je po spełnieniu wybranych warunków, aby wspierać powroty oraz konkretne akcje promocyjne.",
    image: "/assets/images/features/vouchers.png",
    alt: "Kupony w programie lojalnościowym",
  },
  {
    id: "feature-11",
    label: "Integracje",
    title: "Połącz program z narzędziami używanymi w firmie.",
    description:
      "Rozszerz Loyster o połączenie z kasą i innymi systemami, gdy program oraz sposób obsługi tego wymagają.",
    image: "/assets/images/template/feature-02.svg",
    alt: "Integracje Loyster",
  },
];

function FeatureRows({ features }) {
  return (
    <div className={styles.featureRows}>
      {features.map((feature, index) => (
        <article
          id={feature.id}
          key={feature.id}
          className={[styles.featureRow, index % 2 ? styles.featureRowReverse : ""].filter(Boolean).join(" ")}
        >
          <div className={styles.featureMedia}>
            {feature.video ? (
              <video
                src={feature.video}
                aria-label={feature.alt}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image src={feature.image} width={780} height={728} alt={feature.alt} />
            )}
          </div>
          <div className={styles.featureCopy}>
            <span className={styles.eyebrow}>{feature.label}</span>
            <h3 className="h4 lg:h3 xl:h2 m-0">{feature.title}</h3>
            <p>{feature.description}</p>
            {feature.link && (
              <Link href={feature.link.href} className={styles.textLink}>
                {feature.link.text}
                <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <div>
      <section id="rdzen-programu" className={styles.coreSection}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Wspólny rdzeń</span>
            <h2 className="h3 lg:h2 m-0">Najważniejsze elementy w jednym panelu.</h2>
            <p>
              Zarządzasz tym samym programem niezależnie od tego, czy klient
              korzysta z cyfrowej karty, czy własnej aplikacji.
            </p>
          </div>
          <FeatureRows features={coreFeatures} />
        </div>
      </section>

      <section className={styles.channelsSection}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Doświadczenie klienta</span>
            <h2 className="h3 lg:h2 m-0">Wybierz sposób korzystania z programu.</h2>
            <p>Możesz zacząć bez własnej aplikacji i dodać ją później.</p>
          </div>
          <div className={styles.channelsGrid}>
            {channels.map((channel) => (
              <article
                id={channel.id}
                key={channel.title}
                className={[styles.channelCard, channel.featured ? styles.channelCardFeatured : ""].filter(Boolean).join(" ")}
              >
                <span className={channel.featured ? styles.featuredLabel : styles.channelLabel}>
                  {channel.label}
                </span>
                <h3 className="h4 lg:h3 m-0">{channel.title}</h3>
                <p>{channel.description}</p>
                <Link href={channel.href} className={styles.cardLink}>
                  {channel.link}
                  <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.growthSection}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Kiedy potrzebujesz więcej</span>
            <h2 className="h3 lg:h2 m-0">Rozwijaj program wraz z biznesem.</h2>
            <p>Dodawaj kolejne możliwości, gdy rośnie program i potrzeby Twojego zespołu.</p>
          </div>
          <FeatureRows features={growthFeatures} />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container max-w-xl">
          <div className={styles.ctaBox}>
            <div>
              <span className={styles.eyebrow}>Zobacz Loyster w praktyce</span>
              <h2 className="h3 lg:h2 m-0">Dobierz funkcje do swojego programu.</h2>
              <p>Na darmowym demo pokażemy możliwości odpowiednie dla Twojego sposobu działania.</p>
            </div>
            <div className={styles.ctaActions}>
              <button type="button" className="btn btn-primary btn-lg text-white" onClick={openContactModal}>
                Umów darmowe demo
              </button>
              <Link href="/cennik" className={styles.textLink}>
                Porównaj pakiety
                <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import Faq from "@/components/common/Faq";
import { tiers3 } from "@/data/pricing";
import { openContactModal } from "@/utlis/toggleContactModal";
import styles from "./WalletCardLanding.module.css";

const steps = [
  {
    number: "01",
    title: "Klient otrzymuje zaproszenie",
    description: "Wysyłasz link e-mailem lub SMS-em albo udostępniasz kod QR.",
  },
  {
    number: "02",
    title: "Dodaje kartę do telefonu",
    description: "Karta trafia do Apple Wallet lub Google Wallet — bez pobierania aplikacji.",
  },
  {
    number: "03",
    title: "Zbiera punkty i nagrody",
    description: "Klient ma kartę zawsze pod ręką i korzysta z programu przy kolejnych wizytach.",
  },
];

const benefits = [
  {
    title: "Bez własnej aplikacji",
    description: "Uruchamiasz program bez proszenia klientów o kolejne pobranie.",
  },
  {
    title: "Zawsze pod ręką",
    description: "Karta jest zapisana w portfelu, którego klient już używa w telefonie.",
  },
  {
    title: "W Twojej identyfikacji",
    description: "Logo i kolorystyka sprawiają, że karta wygląda jak część Twojej marki.",
  },
  {
    title: "Jeden panel Loyster",
    description: "Zarządzasz punktami, pieczątkami, nagrodami i wynikami w jednym miejscu.",
  },
];

const qrCells = [0, 1, 2, 4, 6, 7, 8, 9, 11, 12, 14, 16, 17, 18, 20, 22, 24];
const mini = tiers3.find((tier) => tier.id === "mini");

export default function WalletCardLanding() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container max-w-xl">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Cyfrowa karta lojalnościowa</span>
              <h1 className="h2 lg:h1 xl:display-5 m-0">
                Program lojalnościowy{" "}
                <span className={styles.accent}>bez własnej aplikacji.</span>
              </h1>
              <p className={styles.heroLead}>
                Z Loyster uruchamiasz kartę w Apple Wallet i Google Wallet.
                Klienci zbierają punkty lub pieczątki, odbierają nagrody i mają
                kartę zawsze pod ręką.
              </p>
              <div className={styles.heroActions}>
                <button
                  type="button"
                  className="btn btn-primary btn-md lg:btn-lg text-white"
                  onClick={openContactModal}
                >
                  Umów darmowe demo
                </button>
                <Link
                  href="/cennik#mini"
                  className={`${styles.secondaryButton} btn btn-md lg:btn-lg`}
                >
                  Zobacz pakiet Mini
                </Link>
              </div>
              <div className={styles.platforms} aria-label="Obsługiwane portfele">
                <span>Apple Wallet</span>
                <span>Google Wallet</span>
                <span>Twoje logo i kolory</span>
              </div>
            </div>

            <div className={styles.preview} aria-label="Przykład cyfrowej karty lojalnościowej">
              <div className={styles.walletCard}>
                <div className={styles.cardTop}>
                  <div className={styles.brand}>
                    <span className={styles.brandMark} aria-hidden="true">L</span>
                    <span>Twoja marka</span>
                  </div>
                  <span className={styles.cardType}>Karta lojalnościowa</span>
                </div>
                <div className={styles.balance}>
                  <span>Twoje punkty</span>
                  <strong>240</strong>
                  <small>Jeszcze 60 pkt do kolejnej nagrody</small>
                </div>
                <div className={styles.cardBottom}>
                  <div>
                    <span className={styles.rewardLabel}>Dostępna nagroda</span>
                    <strong>Darmowa kawa</strong>
                  </div>
                  <div className={styles.qr} aria-hidden="true">
                    {Array.from({ length: 25 }, (_, index) => (
                      <span
                        key={index}
                        className={qrCells.includes(index) ? styles.qrFilled : undefined}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.previewNote}>
                <span className={styles.previewDot} />
                Karta dostępna bezpośrednio w telefonie klienta
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Jak to działa</span>
            <h2 className="h3 lg:h2 m-0">Trzy kroki. Bez pobierania aplikacji.</h2>
            <p>Prosta ścieżka dla klienta — od zaproszenia do pierwszej nagrody.</p>
          </div>
          <div className={styles.steps}>
            {steps.map((step) => (
              <article key={step.number} className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className="h5 lg:h4 m-0">{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Prosty start</span>
            <h2 className="h3 lg:h2 m-0">Wygodnie dla Ciebie i Twoich klientów.</h2>
          </div>
          <div className={styles.benefits}>
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className={styles.benefit}>
                <span className={styles.benefitIcon} aria-hidden="true">{index + 1}</span>
                <div>
                  <h3 className="h5 m-0">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="mini">
        <div className="container max-w-xl">
          <div className={styles.miniGrid}>
            <div className={styles.miniCopy}>
              <span className={styles.eyebrow}>Pakiet Mini</span>
              <h2 className="h3 lg:h2 m-0">Wszystko, czego potrzebujesz na start.</h2>
              <p>
                Gotowy program punktowy lub pieczątkowy z cyfrową kartą,
                nagrodami i panelem do zarządzania.
              </p>
              <ul className={styles.featureList}>
                {mini.features.map((feature) => (
                  <li key={feature}>
                    <i className="icon icon-1 unicon-checkmark" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className={styles.priceCard}>
              <span className={styles.priceLabel}>Prosty start</span>
              <div className={styles.price}>
                <strong>199 zł</strong>
                <span>/ miesiąc</span>
              </div>
              <p>+ 250 zł jednorazowo za wdrożenie</p>
              <div className={styles.annualNote}>0 zł za wdrożenie przy rozliczeniu rocznym</div>
              <button
                type="button"
                className="btn btn-primary btn-lg text-white w-100"
                onClick={openContactModal}
              >
                Umów darmowe demo
              </button>
              <Link href="/cennik#mini" className={styles.priceLink}>
                Zobacz pełny cennik
                <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.growthSection}`}>
        <div className="container max-w-xl">
          <div className={styles.growthBox}>
            <div>
              <span className={styles.eyebrow}>Kiedy potrzebujesz więcej</span>
              <h2 className="h3 lg:h2 m-0">Program może rosnąć razem z Twoim biznesem.</h2>
              <p>
                Dodawaj kolejne scenariusze, automatyzacje i komunikację, a gdy
                przyjdzie odpowiedni moment — rozszerz program o własną aplikację.
              </p>
            </div>
            <Link href="/funkcjonalnosci" className="btn btn-primary btn-lg text-white">
              Zobacz możliwości
            </Link>
          </div>
        </div>
      </section>

      <Faq />
    </main>
  );
}

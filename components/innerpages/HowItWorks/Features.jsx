"use client";

import Link from "next/link";
import { openContactModal } from "@/utlis/toggleContactModal";
import styles from "./HowItWorks.module.css";

const customerOptions = [
  {
    label: "Prosty start",
    title: "Cyfrowa karta lojalnościowa",
    description:
      "Klient dodaje kartę do Apple Wallet lub Google Wallet i korzysta z programu bez pobierania aplikacji.",
    href: "/karta-lojalnosciowa",
    link: "Poznaj cyfrową kartę",
    featured: true,
    icon: "unicon-wallet",
  },
  {
    label: "Więcej możliwości",
    title: "Własna aplikacja",
    description:
      "Pełne doświadczenie Twojej marki z większą przestrzenią na komunikację, promocje i zaangażowanie.",
    href: "/funkcjonalnosci",
    link: "Zobacz możliwości aplikacji",
    icon: "unicon-mobile",
  },
];

const businessOptions = [
  {
    title: "Aplikacja dla obsługi",
    description:
      "Pracownik korzysta z prostego narzędzia na telefonie, aby naliczać punkty i realizować nagrody.",
    note: "Dobry wybór na szybki start",
    icon: "unicon-user",
  },
  {
    title: "Połączenie z systemem POS",
    description:
      "Program działa razem z kasą, dzięki czemu staje się naturalną częścią codziennej obsługi.",
    note: "Dobre rozwiązanie przy większej skali",
    icon: "unicon-store",
  },
];

const steps = [
  {
    number: "01",
    title: "Klient dołącza",
    description:
      "Otrzymuje link e-mailem lub SMS-em albo skanuje kod QR na miejscu.",
  },
  {
    number: "02",
    title: "Zbiera punkty lub pieczątki",
    description:
      "Podczas wizyty klient pokazuje swój kod, a program zapisuje jego postęp.",
  },
  {
    number: "03",
    title: "Odbiera nagrody",
    description:
      "Zgromadzone punkty zamienia na korzyści, które zachęcają do kolejnej wizyty.",
  },
];

export default function Features() {
  return (
    <div id="wybierz-rozwiazanie">
      <section className={styles.choiceSection}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.choiceNumber}>Decyzja 1</span>
            <h2 className="h3 lg:h2 m-0">Jak klient korzysta z programu?</h2>
            <p>Oba warianty działają na tej samej platformie Loyster.</p>
          </div>
          <div className={styles.customerGrid}>
            {customerOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className={`${styles.customerCard} ${option.featured ? styles.customerCardFeatured : ""}`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    <i className={`icon icon-2 ${option.icon}`} />
                  </span>
                  <span className={option.featured ? styles.featuredLabel : styles.cardLabel}>
                    {option.label}
                  </span>
                </div>
                <div>
                  <h3 className="h4 lg:h3 m-0">{option.title}</h3>
                  <p>{option.description}</p>
                </div>
                <span className={styles.cardLink}>
                  {option.link}
                  <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.businessSection}>
        <div className="container max-w-xl">
          <div className={styles.businessLayout}>
            <div className={styles.businessIntro}>
              <span className={styles.choiceNumber}>Decyzja 2</span>
              <h2 className="h3 lg:h2 m-0">Jak Twój zespół obsługuje program?</h2>
              <p>
                Zacznij bez zmian przy kasie albo połącz Loyster z systemem,
                którego już używasz.
              </p>
            </div>
            <div className={styles.businessOptions}>
              {businessOptions.map((option) => (
                <article key={option.title} className={styles.businessCard}>
                  <span className={styles.businessIcon} aria-hidden="true">
                    <i className={`icon icon-2 ${option.icon}`} />
                  </span>
                  <div>
                    <h3 className="h5 lg:h4 m-0">{option.title}</h3>
                    <p>{option.description}</p>
                    <span className={styles.optionNote}>{option.note}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Codzienne korzystanie</span>
            <h2 className="h3 lg:h2 m-0">Od dołączenia do kolejnej nagrody.</h2>
            <p>
              Ten sam prosty proces niezależnie od wybranego wariantu.{" "}
              <Link href="/#scenariusze" className={styles.scenariosLink}>
                Zobacz przykładowe scenariusze
                <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
              </Link>
            </p>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className="h5 lg:h4 m-0">{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container max-w-xl">
          <div className={styles.ctaBox}>
            <div>
              <span className={styles.eyebrow}>Nie musisz wybierać samodzielnie</span>
              <h2 className="h3 lg:h2 m-0">Dobierzmy wariant do Twojego biznesu.</h2>
              <p>Na krótkim demo pokażemy Ci Loyster i pomożemy wybrać najlepszy sposób startu.</p>
            </div>
            <div className={styles.ctaActions}>
              <button type="button" className="btn btn-primary btn-lg text-white" onClick={openContactModal}>
                Umów darmowe demo
              </button>
              <Link href="/cennik" className={styles.textLink}>
                Zobacz cennik
                <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

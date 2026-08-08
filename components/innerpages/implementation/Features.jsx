"use client";

import Link from "next/link";
import { openContactModal } from "@/utlis/toggleContactModal";
import styles from "./Implementation.module.css";

const tracks = [
  {
    label: "Prosty start",
    title: "Cyfrowa karta lojalnościowa",
    description: "Najkrótsza droga do uruchomienia programu bez własnej aplikacji.",
    href: "/karta-lojalnosciowa",
    link: "Poznaj cyfrową kartę",
    featured: true,
    steps: [
      { title: "Ustalamy zasady programu", description: "Wybieramy punkty lub pieczątki, nagrody i sposób dołączania klientów." },
      { title: "Przygotowujemy kartę", description: "Dodajemy Twoje logo i kolory oraz konfigurujemy program w Loyster." },
      { title: "Sprawdzamy i uruchamiamy", description: "Wspólnie testujemy ścieżkę klienta, a potem udostępniasz program." },
    ],
  },
  {
    label: "Pełne doświadczenie marki",
    title: "Własna aplikacja",
    description: "Rozbudowana ścieżka dla marek, które potrzebują więcej miejsca na komunikację i zaangażowanie.",
    href: "/funkcjonalnosci",
    link: "Zobacz możliwości aplikacji",
    steps: [
      { title: "Planujemy zakres", description: "Ustalamy cele, wygląd, najważniejsze funkcje i scenariusze programu." },
      { title: "Przygotowujemy rozwiązanie", description: "Budujemy doświadczenie dopasowane do Twojej marki i sposobu działania." },
      { title: "Testujemy i wdrażamy zespół", description: "Sprawdzamy całość, przekazujemy wiedzę i przygotowujemy firmę do startu." },
      { title: "Uruchamiamy program", description: "Pomagamy wystartować i zostajemy z Tobą także na kolejnych etapach." },
    ],
  },
];

const cooperation = [
  {
    label: "Ustalamy wspólnie",
    title: "Kierunek programu",
    items: [
      "Określamy cel programu i najważniejsze założenia",
      "Pomagamy skomponować ofertę i nagrody dla klientów",
      "Ty dostarczasz materiały marki i zatwierdzasz kierunek",
    ],
  },
  {
    label: "Po stronie Loyster",
    title: "Prowadzenie i przygotowanie",
    items: ["Doradztwo przy wyborze wariantu", "Konfiguracja programu i materiałów", "Testy, przygotowanie zespołu i wsparcie"],
  },
];

export default function Features() {
  return (
    <div>
      <section id="sciezki-wdrozenia" className={styles.tracksSection}>
        <div className="container max-w-xl">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Dwie ścieżki</span>
            <h2 className="h3 lg:h2 m-0">Wybierz sposób startu.</h2>
            <p>Zakres wdrożenia zależy od wybranego rozwiązania. W obu wariantach prowadzimy Cię krok po kroku.</p>
          </div>
          <div className={styles.tracksGrid}>
            {tracks.map((track) => (
              <article
                key={track.title}
                className={[styles.trackCard, track.featured ? styles.trackCardFeatured : ""].filter(Boolean).join(" ")}
              >
                <div className={styles.trackHeader}>
                  <span className={track.featured ? styles.featuredLabel : styles.trackLabel}>{track.label}</span>
                  <h3 className="h4 lg:h3 m-0">{track.title}</h3>
                  <p>{track.description}</p>
                </div>
                <ol className={styles.trackSteps}>
                  {track.steps.map((step, index) => (
                    <li key={step.title}>
                      <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h4 className="h6 lg:h5 m-0">{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Link href={track.href} className={styles.trackLink}>
                  {track.link}
                  <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p className={styles.timingNote}>Dokładny harmonogram potwierdzamy po poznaniu zakresu programu.</p>
        </div>
      </section>

      <section className={styles.cooperationSection}>
        <div className="container max-w-xl">
          <div className={styles.cooperationLayout}>
            <div className={styles.cooperationIntro}>
              <span className={styles.eyebrow}>Współpraca bez niedomówień</span>
              <h2 className="h3 lg:h2 m-0">Tworzymy program razem z Tobą.</h2>
              <p>
                Ty znasz swoich klientów i markę. My pomagamy określić cele i
                skomponować ofertę, a wspólne decyzje przekładamy na gotowy program.
              </p>
            </div>
            <div className={styles.cooperationCards}>
              {cooperation.map((column) => (
                <article key={column.label} className={styles.cooperationCard}>
                  <span className={styles.cooperationLabel}>{column.label}</span>
                  <h3 className="h5 lg:h4 m-0">{column.title}</h3>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>
                        <i className="icon icon-1 unicon-checkmark" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.afterSection}>
        <div className="container max-w-xl">
          <div className={styles.afterBox}>
            <div>
              <span className={styles.eyebrow}>Po uruchomieniu</span>
              <h2 className="h3 lg:h2 m-0">Start programu to dopiero początek.</h2>
              <p>Zarządzasz programem w jednym panelu, obserwujesz wyniki i rozwijasz kolejne scenariusze wtedy, gdy są potrzebne.</p>
            </div>
            <Link href="/#scenariusze" className={styles.afterLink}>
              Zobacz przykładowe scenariusze
              <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container max-w-xl">
          <div className={styles.ctaBox}>
            <div>
              <span className={styles.eyebrow}>Zaplanujmy Twój start</span>
              <h2 className="h3 lg:h2 m-0">Zobacz Loyster na darmowym demo.</h2>
              <p>Porozmawiamy o Twoim pomyśle i pokażemy najprostszy sposób uruchomienia programu.</p>
            </div>
            <button type="button" className="btn btn-primary btn-lg text-white" onClick={openContactModal}>
              Umów darmowe demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

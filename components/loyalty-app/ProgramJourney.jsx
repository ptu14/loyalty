import Link from "next/link";
import styles from "./ProgramJourney.module.css";

const steps = [
  {
    number: "01",
    label: "Prosty start",
    title: "Cyfrowa karta lojalnościowa",
    description:
      "Klienci dodają kartę do Apple Wallet lub Google Wallet, zbierają punkty lub pieczątki i odbierają nagrody bez pobierania aplikacji.",
    href: "/karta-lojalnosciowa",
  },
  {
    number: "02",
    label: "Większe zaangażowanie",
    title: "Komunikacja i automatyzacje",
    description:
      "Dodawaj nowe scenariusze i docieraj do klientów z dopasowanymi ofertami.",
    href: "/#scenariusze",
  },
  {
    number: "03",
    label: "Pełne doświadczenie marki",
    title: "Własna aplikacja",
    description:
      "Rozszerz program o aplikację, gdy potrzebujesz więcej funkcji i własnego kanału kontaktu.",
    href: "/funkcjonalnosci#feature-1",
  },
];

export default function ProgramJourney() {
  return (
    <section className={`${styles.section} section panel overflow-hidden`}>
      <div className="container max-w-xl">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <h2 className="h4 lg:h3 mb-2">
              Zacznij prosto. Rozwijaj na swoich zasadach.
            </h2>
            <p className="fs-6 m-0">
              Wybierz rozwiązanie na dziś, a kolejne możliwości dodaj wtedy,
              gdy będą potrzebne.
            </p>
          </div>

          <div className={styles.timeline}>
            {steps.map((step) => (
              <article key={step.number} className={styles.step}>
                <span className={styles.number}>{step.number}</span>
                <div>
                  <span className={styles.label}>{step.label}</span>
                  <h3 className="h4 lg:h3 mt-1 mb-2">
                    <Link href={step.href} className={styles.stepLink}>
                      {step.title}
                      <i className="icon icon-narrow unicon-arrow-right" aria-hidden="true" />
                    </Link>
                  </h3>
                  <p className="m-0">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <Link
            href="/cennik"
            className="uc-link fw-bold hstack gap-narrow dark:text-secondary"
          >
            Zobacz dostępne pakiety
            <i className="icon icon-1 unicon-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

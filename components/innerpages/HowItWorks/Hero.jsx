import Link from "next/link";
import styles from "./HowItWorks.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container max-w-xl">
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Jak działa Loyster</span>
          <h1 className="h2 lg:h1 xl:display-5 m-0">
            Jeden program. <span className={styles.accent}>Dwie proste decyzje.</span>
          </h1>
          <p className={styles.heroLead}>
            Wybierasz, jak klienci korzystają z programu i jak obsługuje go
            Twój zespół. Zacznij od najprostszego wariantu, a kolejne
            możliwości dodaj wtedy, gdy będą potrzebne.
          </p>
          <div className={styles.heroActions}>
            <Link href="#wybierz-rozwiazanie" className="btn btn-primary btn-md lg:btn-lg text-white">
              Zobacz, jak to działa
            </Link>
            <Link href="/cennik" className={`${styles.secondaryButton} btn btn-md lg:btn-lg`}>
              Porównaj pakiety
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

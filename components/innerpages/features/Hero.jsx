import Link from "next/link";
import styles from "./FeaturesPage.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container max-w-xl">
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Funkcjonalności Loyster</span>
          <h1 className="h2 lg:h1 xl:display-5 m-0">
            Wszystko do prowadzenia{" "}
            <span className={styles.accent}>programu lojalnościowego.</span>
          </h1>
          <p className={styles.heroLead}>
            Punkty, nagrody, komunikacja i wyniki w jednym miejscu. Ty wybierasz,
            czy klienci korzystają z cyfrowej karty, własnej aplikacji czy obu rozwiązań.
          </p>
          <div className={styles.heroActions}>
            <Link href="#rdzen-programu" className="btn btn-primary btn-md lg:btn-lg text-white">
              Zobacz możliwości
            </Link>
            <Link href="/cennik" className={[styles.secondaryButton, "btn btn-md lg:btn-lg"].join(" ")}>
              Porównaj pakiety
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

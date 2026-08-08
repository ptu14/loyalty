import Link from "next/link";
import styles from "./Implementation.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container max-w-xl">
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Wdrożenie Loyster</span>
          <h1 className="h2 lg:h1 xl:display-5 m-0">
            Od pomysłu do programu{" "}
            <span className={styles.accent}>gotowego na klientów.</span>
          </h1>
          <p className={styles.heroLead}>
            Prowadzimy Cię przez cały proces. Możesz zacząć prosto od cyfrowej
            karty albo od razu zbudować pełne doświadczenie we własnej aplikacji.
          </p>
          <div className={styles.heroActions}>
            <Link href="#sciezki-wdrozenia" className="btn btn-primary btn-md lg:btn-lg text-white">
              Zobacz ścieżki wdrożenia
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

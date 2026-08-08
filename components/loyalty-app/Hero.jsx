"use client";

import Link from "next/link";
import { openContactModal } from "@/utlis/toggleContactModal";
import styles from "./Hero.module.css";

const offers = [
  {
    label: "Najprostszy start",
    price: "od 199 zł / mies.",
    title: "Karta w Apple Wallet i Google Wallet",
    description:
      "Klient dodaje kartę z linku lub kodu QR i korzysta z programu bez pobierania aplikacji. Karta jest zawsze pod ręką w jego telefonie.",
    cta: "Mini: prosty start",
    href: "/karta-lojalnosciowa",
    primary: true,
  },
  {
    label: "Pełne doświadczenie marki",
    price: "od 350 zł / mies.",
    title: "Własna aplikacja iOS i Android",
    description:
      "Więcej miejsca na komunikację, automatyzacje, promocje i budowanie zaangażowania klientów.",
    cta: "Poznajmy się",
    href: "/cennik#poznajmy-sie",
  },
];

export default function Hero() {
  return (
    <section id="start" className={`${styles.hero} section panel overflow-hidden`}>
      <div className="container max-w-xl">
        <div className={styles.grid}>
          <div className="vstack gap-3 lg:gap-4">
            <h1 className="h2 xl:display-5 m-0">
              Lojalność, która{" "}
              <span className={styles.accent}>rośnie z biznesem.</span>
            </h1>
            <p className={`${styles.lead} fs-6 lg:fs-5 m-0`}>
              Loyster łączy punkty, nagrody, komunikację i wyniki w jednym
              miejscu.
            </p>
            <p className={`${styles.lead} fs-6 lg:fs-5 m-0`}>
              <strong className={styles.leadStrong}>
                Zacznij bez własnej aplikacji.
              </strong>{" "}
              Klienci dodają cyfrową kartę do telefonu, a gdy potrzebujesz
              więcej, rozszerzasz program o własną aplikację.
            </p>
            <div className={styles.actions}>
              <button
                type="button"
                onClick={openContactModal}
                className="btn btn-md lg:btn-lg btn-primary text-white"
              >
                Umów darmowe demo
              </button>
              <Link
                href="/funkcjonalnosci"
                className={`${styles.secondaryButton} btn btn-md lg:btn-lg`}
              >
                Zobacz możliwości
              </Link>
            </div>
          </div>

          <div className={styles.offerStack}>
            {offers.map((offer) => (
              <Link
                key={offer.title}
                href={offer.href}
                className={`${styles.offer} ${offer.primary ? styles.offerPrimary : ""}`}
                aria-label={`${offer.title}. ${offer.cta}`}
              >
                <div className="hstack justify-between items-start gap-2">
                  <span className={offer.primary ? styles.labelPrimary : styles.label}>
                    {offer.label}
                  </span>
                  <span className={offer.primary ? styles.pricePrimary : styles.price}>
                    {offer.price}
                  </span>
                </div>
                <h2 className="h4 lg:h3 m-0">{offer.title}</h2>
                <p className={styles.offerDescription}>{offer.description}</p>
                <span className={styles.offerCta}>
                  {offer.cta}
                  <i className="icon icon-narrow unicon-arrow-right" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

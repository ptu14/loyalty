"use client";
import Link from "next/link";
import { useState } from "react";

const loyaltyTiersBase = [
  {
    id: 1,
    plan: "Podstawowy",
    priceNet: 199,
    priceGross: 245,
    priceSuffix: "/ mies.",
    description: "Rozliczanie roczne.",
    features: [
      "Do 500 klientów w bazie",
      "Podstawowe raportowanie",
      "Aplikacja mobilna dla klientów",
      "10GB miejsca na dane",
      "Wsparcie e-mail",
    ],
    icon: "unicon-sub-volume",
    buttonText: "Rozpocznij",
    highlight: false,
  },
  {
    id: 2,
    plan: "Biznesowy",
    priceNet: 399,
    priceGross: 491,
    priceSuffix: "/ mies.",
    description: "Rozliczanie roczne.",
    features: [
      "Dostęp do wszystkich funkcji <b>Podstawowych</b>",
      "Nieograniczona liczba klientów",
      "Zaawansowana analityka i raporty",
      "Personalizowane nagrody",
      "Integracje z systemami POS",
    ],
    icon: "unicon-course",
    buttonText: "Wypróbuj za darmo",
    highlight: true,
  },
  {
    id: 3,
    plan: "Enterprise",
    priceNet: 799,
    priceGross: 983,
    priceSuffix: "/ mies.",
    description: "Rozliczanie roczne.",
    features: [
      "Dostęp do wszystkich funkcji <b>Biznesowych</b>",
      "Dedykowany opiekun klienta",
      "Interfejs API dla deweloperów",
      "Niestandardowe integracje",
      "SLA na poziomie 99.9%",
    ],
    icon: "unicon-building",
    buttonText: "Umów prezentację",
    highlight: false,
  },
];

export default function Pricing() {
  const [showGross, setShowGross] = useState(false);

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9 rounded-1-5 lg:rounded-2 bg-primary-600 dark:bg-primary text-white">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-secondary">Cennik</span>
                <h2 className="title h3 lg:h2 xl:h1 text-white m-0">
                  Proste i skalowalne cenniki.
                </h2>
                <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                  Bez dodatkowych opłat. Bez ukrytych kosztów.
                </p>
                
                <div className="d-flex justify-content-center mt-3">
                  <div className="btn-group bg-white rounded-pill p-1">
                    <button 
                      className={`btn ${!showGross ? 'btn-primary' : 'btn-light'} rounded-pill px-3`}
                      onClick={() => setShowGross(false)}
                    >
                      Ceny netto
                    </button>
                    <button 
                      className={`btn ${showGross ? 'btn-primary' : 'btn-light'} rounded-pill px-3`}
                      onClick={() => setShowGross(true)}
                    >
                      Ceny brutto
                    </button>
                  </div>
                </div>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {loyaltyTiersBase.map((tier, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack justify-between rounded-1-5 lg:rounded-2 bg-secondary text-dark text-center ${
                          tier.highlight ? "position-relative" : ""
                        }`}
                      >
                        {tier.highlight && (
                          <span className="fs-7 position-absolute top-0 end-0 fw-bold text-uppercase text-primary my-2 mx-3">
                            Popularny
                          </span>
                        )}
                        <header className="tier-header vstack gap-2 items-center p-3 md:p-4 pb-0 md:pb-0 pt-4 md:pt-6">
                          <span className="icon-box cstack w-48px h-48px rounded-circle bg-white text-primary shadow-xs">
                            <i className={`icon-1 ${tier.icon} fw-bold`} />
                          </span>
                          <h5 className="h5 lg:h4 m-0 text-primary">
                            {tier.plan}
                          </h5>
                          <div className="d-flex gap-narrow items-end mt-1">
                            <h3 className="h1 lg:display-6 price m-0 text-dark">
                              {showGross ? `${tier.priceGross} zł` : `${tier.priceNet} zł`}
                            </h3>
                            <span className="h6 lg:h3 m-0 pb-narrow text-dark">
                              {tier.priceSuffix}
                            </span>
                          </div>
                          <p className="desc">{tier.description}</p>
                          <p className="fs-7 text-dark opacity-70">
                            {showGross ? 'Cena zawiera VAT (23%)' : 'Cena netto'}
                          </p>
                        </header>
                        <div className="tier-body p-3 md:p-4">
                          <ul className="nav-y gap-2 text-start">
                            {tier.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="hstack items-start gap-1"
                              >
                                <i className="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold" />
                                <span
                                  className="d-inline"
                                  dangerouslySetInnerHTML={{ __html: feature }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <footer className="tier-footer p-3 md:p-4 border-top">
                          <Link
                            className="btn btn-md btn-primary text-white rounded-default w-100"
                            href={"/sign-up"}
                          >
                            <span>{tier.buttonText}</span>
                          </Link>
                        </footer>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="text-center text-white text-opacity-70"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
              >
                {showGross ? 'Ceny zawierają podatek VAT (23%).' : 'Ceny nie zawierają podatku VAT.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";

const loyaltyFactItems = [
  {
    id: 1,
    value: "32%",
    description: "Wzrost retencji klientów",
  },
  {
    id: 2,
    value: "27%",
    description: "Wzrost średniej wartości zamówienia",
  },
  {
    id: 3,
    value: "5000+",
    description: "Aktywnych programów lojalnościowych",
  },
];

export default function Facts() {
  return (
    <div
      id="facts_numbers"
      className="facts-numbers section panel overflow-hidden"
    >
      <div className="section-outer panel pt-4 md:pt-6 xl:pt-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 mb-4 lg:mb-8 max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 md:h3 m-0">
                Wszystko, czego potrzebujesz do zwiększenia lojalności klientów
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Nasza aplikacja lojalnościowa została zaprojektowana, aby uprościć zarządzanie 
                programem lojalnościowym i maksymalizować jego efektywność.
              </p>
            </div>
            <div
              className="panel p-6 xl:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div
                className="row child-cols col-match items-center justify-center text-center gy-4 lg:gy-8"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
              >
                {loyaltyFactItems.map((fact, index) => (
                  <div key={index}>
                    <div className="fact-item panel vstack gap-1">
                      <h5 className="h3 md:h2 lg:h1 xl:display-5 m-0 text-primary dark:text-secondary">
                        {fact.value}
                      </h5>
                      <p className="fw-medium">{fact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

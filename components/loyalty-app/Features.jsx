import { features } from "@/data/features";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div
      id="funkcje"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Wygodne rozwiązania dla <span className="text-primary dark:text-secondary">
                      budowania lojalności.
                    </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Wszystko w jednym miejscu, wygodnie i intuicyjne. <br/> Zarządzaj programem lojalnościowym, komunikacją i analityką w dedykowanym panelu.
              </p>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4">
              {features.slice(0, 6).map((feature, index) => (
                <div key={index}>
                  <div
                    className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                    
                            <Image
                              src={feature.imgSrc}
                              width={390}
                              height={364}
                              alt={feature.imgAlt}
                              className="rounded-2"
                            />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0">{feature.title}</h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                {feature.description}
                              </p>
                              {feature.linkText && (
                                <a
                                  href={feature.linkHref}
                                  className="uc-link fw-bold hstack gap-narrow"
                                >
                                  <span>{feature.linkText}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                href={`/funkcjonalnosci#feature-7`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                style={{
                  transform: "translateY(0.0097341px)",
                  opacity: "1",
                }}
              >
                <span className={'d-inline-flex items-center gap-1'}>Sprawdź {features.length - 6} {features.length - 6 <= 4 ? "pozostałe" : "pozostałych"} funkcjonalności                 <i
                    className="icon icon-1 unicon-arrow-right rtl:rotate-180"/></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

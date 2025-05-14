import { integrations } from "@/data/faq-shorcut";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FaqShortcut() {
  return (
    <div
      id="integrations"
      className="integrations section panel overflow-hidden"
    >
      <div className="section-outer panel py-9 xl:py-9 bg-secondary dark:bg-primary dark:text-white">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Na skróty
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Sprawdż jak działa narzędzie, jak wygląda proces wdrożenia i więcej.
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((shortcut, index) => (
                  <div key={index}>
                    <Link
                      href={shortcut.link || "/page-integrations"}
                      className="feature-item panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark hover:bg-primary hover:text-white hover:scale-105 duration-150 transition-all block"
                    >
                      <div className="vstack gap-3">
                        <div className="hstack justify-between items-center">
                          <div className="vstack">
                            <h5 className="h5 m-0 text-inherit">
                              {shortcut.name}
                            </h5>
                          </div>
                          <i className={`icon-3 fw-bold text-inherit ${shortcut.icon}`} />
                        </div>
                        <p className="fs-6 opacity-70 dark:opacity-80">
                          {shortcut.description}
                        </p>
                      </div>
                      <div
                        className="fw-bold fs-7 d-inline-flex items-center gap-narrow text-inherit"
                      >
                        <span>Sprawdź</span>
                        <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                      </div>
                    </Link>
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

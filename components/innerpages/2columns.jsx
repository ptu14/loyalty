import { features } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{
            top: "30%",
            left: "18%",
          }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 xl:pb-9">
        <div className="container">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Co dostajesz?
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Dostęp do funkcjonalności zaprojektowanych tak aby kompleksowo obsługiwać Twój program lojalnościowy.
              </p>
            </div>
            <div className="row g-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  id={`feature-${feature.id}`}
                  className="col-12 col-md-6 col-lg-4"
                  data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  <div className="feature-item panel h-100 px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800">
                    <div className="panel vstack gap-4">
                      <div className="panel vstack gap-2">
                        <span className="fs-6 fw-bold m-0 text-primary">
                          {feature.id.toString().padStart(2, "0")}.
                        </span>
                        <h3 className="h4 lg:h3 m-0">{feature.title}</h3>
                        <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                          {feature.longDescription ? feature.longDescription : feature.description}
                        </p>
                        {feature.link && (
                          <a
                            href={feature.link.href}
                            className="uc-link fw-bold hstack gap-narrow"
                          >
                            <span>{feature.link.text}</span>
                            <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

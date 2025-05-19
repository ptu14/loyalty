"use client";
import { tiers3 } from "@/data/pricing";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div id="cennik" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel py-9 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                 <span className="text-primary dark:text-secondary">Prosty</span>, skalowalny cennik
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Wygodnie zrezygnuj kiedy chcesz w abonamnecie miesięcznym lub oszczędzaj w abonamencie rocznym.
              </p>
              <ul
                className="uc-switcher-nav nav-x gap-0 p-narrow border rounded-2 fs-7 fw-medium"
                data-uc-switcher="connect: .pricing-switcher;"
              >
                <li className={!isYearly ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsYearly(false)}
                    className="text-none w-128px cstack p-1"
                  >
                    Miesięcznie
                  </a>
                </li>
                <li className={isYearly ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsYearly(true)}
                    className="text-none w-128px cstack p-1"
                  >
                    Rocznie
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-switcher pricing-switcher mt-4">
              <div className="uc-active">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers3.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Polecany
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {isYearly ? tier.yearlyPrice : tier.price}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {tier.priceDetails}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <a
                                onClick={() => openContactModal()}
                                className={`btn btn-md sm:btn-sm lg:btn-md ${
                                  tier.title === "Enterprise"
                                    ? "btn-dark"
                                    : "btn-primary"
                                } text-white`}
                              >
                                {tier.linkText}
                              </a>
                              <span className="fs-7 opacity-70 min-h-24px">
                                {tier.linkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.title === "Poznajmy się"
                                ? "Co dostajesz:"
                                : `Wszystko co w ${
                                    tier.title === "Premium"
                                      ? "Poznajmy się"
                                      : "Premium"
                                  }, plus:`}
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p
              className="text-center text-gray-900 dark:text-white text-opacity-70 mt-2 sm:mt-4 xl:mt-4"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 0;"
            >
              Podane ceny są cenami netto do których należy doliczyć VAT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

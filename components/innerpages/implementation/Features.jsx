import { implementationSteps } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-4 xl:py-4">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              {implementationSteps.map((feature, i) => (
                <React.Fragment key={i}>
                  <div
                    className="feature-item panel"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                      <div className="col-12 sm:col-6 order-0 lg:order-1">
                        <div className="panel w-100 d-none sm:d-block">
                          <Image
                            src={feature.imgSrc}
                            width={390}
                            height={364}
                            alt={feature.altText}
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="col-12 sm:col-6 order-1 lg:order-0">
                        <div className="panel vstack justify-between gap-4 sm:gap-6 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="fs-6 fw-bold m-0 text-primary">
                                {feature.step}
                              </span>
                              <h3 className="h4 lg:h3 xl:h2 m-0">
                                {feature.title}
                              </h3>
                              <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                                {feature.description}
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
                    </div>
                  </div>
                  {i !== implementationSteps.length - 1 && (
                    <hr
                      className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                      data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

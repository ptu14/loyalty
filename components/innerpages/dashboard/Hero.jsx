"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const currentPoints = 78;
  const nextRewardPoints = 100;
  const pointsNeeded = nextRewardPoints - currentPoints;
  const progressPercentage = (currentPoints / nextRewardPoints) * 100;

  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimatedWidth(progressPercentage);
    }, 300);

    return () => clearTimeout(timer);
  }, [progressPercentage]);

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden position-relative">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <Image
          src="/assets/images/playground_bg.png"
          alt="Background"
          fill
          className="object-fit-cover"
          priority
        />
      </div>

      <div className="section-outer panel pt-9 lg:pt-10 pb-2 xl:pb-4 position-relative z-1">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {/* Header Text */}
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-dark">
                Cześć, Natalia 👋
                <br />
                masz{" "}
                <span className="d-inline-flex px-2 py-0.5 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-2">
                  {currentPoints} pkt.
                </span>
              </h2>

              {/* Glass Card */}
              <div className="w-100 mt-3 xl:mt-4 px-2" style={{ maxWidth: '550px' }}>
                <div
                  className="panel p-4 sm:p-5 xl:p-6 rounded-2 lg:rounded-3"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="vstack gap-4">
                    {/* Card Text */}
                    <div className="fs-6 xl:fs-5 fw-medium text-dark">
                      <p className="m-0 lh-base">
                        Złap jeszcze{" "}
                        <span className="d-inline-flex px-1 bg-white dark:bg-primary text-primary dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                          {pointsNeeded} pkt.
                        </span>
                        <br />
                        i odbierz{" "}
                        <span className="d-inline-flex px-1 bg-white dark:bg-primary text-primary dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                          darmowe wejscie
                        </span>{" "}
                        🚀
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="position-relative w-100 bg-white rounded-pill overflow-hidden" style={{ height: '16px' }}>
                      <div
                        className="position-absolute top-0 start-0 h-100 bg-primary rounded-pill"
                        style={{ width: `${animatedWidth}%`, transition: 'width 1.2s ease-out' }}
                      ></div>
                    </div>

                    {/* Link */}
                    <div className="text-center">
                      <Link
                        href="#"
                        className="fs-7 fw-medium text-dark hover:text-primary transition-colors text-decoration-none d-inline-flex items-center gap-1"
                      >
                        Sprawdź za co możesz zdobywać punkty
                        <i className="icon unicon-arrow-up-right fw-bold" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


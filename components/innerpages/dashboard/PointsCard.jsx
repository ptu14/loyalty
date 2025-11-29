"use client";
import React from "react";

export default function PointsCard() {
  const points = 1250;
  const pointsToNextReward = 250;

  return (
    <div
      className="section panel"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
    >
      <div className="section-outer panel py-4 xl:py-6">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel p-6 xl:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800">
              <div className="panel vstack gap-4">
                <div className="panel vstack gap-2">
                  <h3 className="h4 lg:h3 m-0">Twoje punkty</h3>
                  <div className="panel vstack gap-1">
                    <h2 className="h1 lg:display-5 xl:display-4 m-0 text-primary dark:text-secondary">
                      {points.toLocaleString('pl-PL')}
                    </h2>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                      Do następnej nagrody brakuje {pointsToNextReward} punktów
                    </p>
                  </div>
                </div>
                <div className="panel vstack gap-2">
                  <div className="progress" style={{ height: "12px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${(points / (points + pointsToNextReward)) * 100}%` }}
                      aria-valuenow={points}
                      aria-valuemin="0"
                      aria-valuemax={points + pointsToNextReward}
                    />
                  </div>
                  <div className="hstack justify-between fs-7 text-dark dark:text-white text-opacity-70">
                    <span>0</span>
                    <span>{points + pointsToNextReward}</span>
                  </div>
                </div>
                <div className="panel vstack gap-2 pt-2">
                  <h5 className="h6 m-0">Ostatnie transakcje</h5>
                  <div className="panel vstack gap-2">
                    <div className="panel hstack justify-between items-center p-3 rounded-1 bg-white dark:bg-gray-700">
                      <div className="panel vstack gap-1">
                        <span className="fw-bold fs-6">+50 punktów</span>
                        <span className="fs-7 text-dark dark:text-white text-opacity-70">Zakup w sklepie</span>
                      </div>
                      <span className="fs-7 text-dark dark:text-white text-opacity-70">2 dni temu</span>
                    </div>
                    <div className="panel hstack justify-between items-center p-3 rounded-1 bg-white dark:bg-gray-700">
                      <div className="panel vstack gap-1">
                        <span className="fw-bold fs-6">+100 punktów</span>
                        <span className="fs-7 text-dark dark:text-white text-opacity-70">Zakup online</span>
                      </div>
                      <span className="fs-7 text-dark dark:text-white text-opacity-70">5 dni temu</span>
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



"use client";

import { quests } from "@/data/quests";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PromotionsCard() {
  const swiperOptions = {
    // Default options
    slidesPerView: 1.1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
    modules: [Navigation],
    // Responsive breakpoints
    breakpoints: {
      // Small devices
      640: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      // Medium devices
      768: {
        slidesPerView: 3.22,
        spaceBetween: 24,
      },
      // Large devices
      1024: {
        slidesPerView: 3.22,
        spaceBetween: 32,
      },
    },
  };
  return (
    <div
      id="blog_posts"
      className="blog-posts section panel overflow-hidden gap-3 bg-secondary dark:bg-white dark:bg-opacity-5 rounded-1-5 lg:rounded-2 swiper-parent"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="row child-cols-12 g-4 sm:g-6 xl:g-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <div
                  className="heading vstack sm:hstack gap-4 justify-between md:items-end panel section-heading-2"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="vstack gap-2">
                    <h2 className="title h3 lg:h2 xl:h1 m-0">
                      Questy
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="content panel expand-container ltr:ms-0 rtl:me-0">
                  <Swiper {...swiperOptions} className="swiper">
                    {quests.map((quest, index) => (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <article className="post type-post panel overflow-hidden vstack gap-3">
                          <div
                            className="panel vstack gap-1 p-4 sm:p-5 xl:p-6 rounded-2 lg:rounded-3"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.4)",
                              backdropFilter: "blur(10px)",
                              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
                            }}
                          >
                            <Link
                              className="text-none"
                              href={`/blog-details/${quest.id}`}
                            >
                              <h3 className="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4">
                                <span>{quest.title}</span>
                              </h3>
                            </Link>
                            <p className="post-excrept fs-7 xl:fs-6 opacity-70">
                              {quest.description}
                            </p>
                            <div className="vstack gap-2 mt-2">
                              <div className="hstack gap-1">
                                {Array.from({ length: quest.steps }).map(
                                  (_, i) => (
                                    <div
                                      key={i}
                                      className={`flex-1 rounded-pill ${i < quest.currentStep
                                        ? "bg-primary"
                                        : "bg-gray-300 dark:bg-gray-600"
                                        }`}
                                      style={{ height: "8px" }}
                                    />
                                  )
                                )}
                              </div>
                              <div className="hstack justify-between fs-7 opacity-70">
                                <span>Postęp</span>
                                <span>
                                  {quest.currentStep} / {quest.steps}
                                </span>
                              </div>
                            </div>
                            <h4 className="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4 mt-2">
                              <span className="d-inline-flex px-1 bg-primary dark:bg-primary text-white dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                + {quest.points} pkt.
                              </span>
                            </h4>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


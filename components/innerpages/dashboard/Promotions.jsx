import { promotions } from "@/data/promotions2";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Promotions() {
  return (
    <div
      id="blog_posts"
      className="section panel overflow-hidden gap-3 bg-secondary dark:bg-gray-800 rounded-1-5 lg:rounded-2"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="heading vstack sm:hstack gap-4 justify-between md:items-end panel flex-sm-column section-heading-2"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="vstack gap-2">
                  <h2 className="title h3 lg:h2 xl:h1 m-0">
                    Twoje promocje
                  </h2>
                </div>
              </div>
              <div className="content panel">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                  {promotions.map((promotion, index) => (
                    <div key={index}>
                      <article className={`post type-post panel overflow-hidden vstack rounded-1-5 bg-white dark:bg-gray-800 ${promotion.status === 'inactive' ? 'opacity-50 grayscale' : ''}`}>
                        <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={promotion.imageSrc}
                            width={1280}
                            height={853}
                            alt={promotion.altText}
                          />

                        </figure>
                        <div className="panel vstack gap-1 p-2 lg:p-3 lg:pt-2">
                          <h4 className="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4 mt-2">
                            <span className="d-inline-flex px-1 bg-primary dark:bg-primary text-white dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                              - {promotion.requiredPoints} pkt.
                            </span>
                          </h4>
                          <h3 className="post-title panel h5 lg:h4 m-0 ltr:pe-4 rtl:ps-4">
                            <span>{promotion.title}</span>
                            <i className="position-absolute top-0 ltr:end-0 rtl:start-0 mt-narrow icon-1 unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                          </h3>

                          <p className="post-excrept fs-6 opacity-70">
                            {promotion.excerpt}
                          </p>
                          <div className="post-meta hstack gap-1 panel overflow-hidden mt-2">

                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

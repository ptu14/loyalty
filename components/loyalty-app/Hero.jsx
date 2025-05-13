"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Hero() {
  return (
    <div id="start" className="hero-header section panel overflow-hidden">
      <div className="position-cover bg-secondary dark:bg-gray-800" />
      <div className="section-outer panel pt-8">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-0">
              <div className="col-12 sm:col-10 md:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 xl:display-5 mb-1 xl:mb-2">
                    Nagradzaj <br />
                    <span className="text-primary dark:text-secondary">
                      lojalność{" "}
                    </span>
                    Twoich klientów.
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    Stwórz program lojalnościowy który zwiększy powracalność Twoich klientów, zbuduje zaangażowanie i pozwoli Ci zarabiać więcej.<br/><br/>
                    Prosto, intuicyjnie, bez kodowania.
                    
                  </p>
                  <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2 flex-sm-column fdr">
                    <a
                      onClick={openContactModal}
                      className="btn btn-md lg:btn-lg btn-primary text-white"
                      data-uc-toggle=""
                    >
                      Darmowe demo
                    </a>
                    <Link
                  href={`/funkcjonalnosci`}
                  className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                >
                  <span>Dowiedz się więcej</span>
                  <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2 relative"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  style={{ position: 'relative', width: '100%', height: 'auto' }}
                >
                  {/* Pierwszy obrazek z animacją */}
                  <div className="float-animation-1" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1 }}>
                    <Image
                      className="ltr:d-block rtl:d-none"
                      alt="aplikacja-lojalnościowa-demo-1"
                      src="/assets/images/1.png"
                      width="1492"
                      height="1250"
                    />
                  </div>

                  {/* Drugi obrazek z animacją */}
                  <div className="float-animation-2" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 2 }}>
                    <Image
                      className="ltr:d-block rtl:d-none"
                      alt="aplikacja-lojalnościowa-demo-2"
                      src="/assets/images/2.png"
                      width="1492"
                      height="1250"
                    />
                  </div>

                  {/* Pusty element do zachowania rozmiaru kontenera */}
                  <div style={{ visibility: 'hidden' }}>
                    <Image
                      className="ltr:d-block rtl:d-none"
                      alt="spacer"
                      src="/assets/images/1.png"
                      width="1492"
                      height="1250"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Style dla animacji lewitacji */}
      <style jsx global>{`
          /* Animacja lewitacji dla pierwszego obrazka */
          @keyframes float1 {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          /* Animacja lewitacji dla drugiego obrazka */
          @keyframes float2 {
            0% {
              transform: translateY(-10px);
            }
            50% {
              transform: translateY(5px);
            }
            100% {
              transform: translateY(-10px);
            }
          }

          .float-animation-1 {
            animation: float1 4s ease-in-out infinite;
            will-change: transform;
          }

          .float-animation-2 {
            animation: float2 4.5s ease-in-out infinite;
            will-change: transform;
          }
        `}</style>
    </div>
  );
}
"use client";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
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
                    Nagradzamy <br />
                    <span className="text-primary dark:text-secondary">
                      lojalność{" "}
                    </span>
                    Twoich klientów.
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    Pożegnaj skomplikowane programy lojalnościowe. Nasza aplikacja 
                    umożliwia łatwe zbieranie punktów i wymianę ich na nagrody, 
                    co zwiększa powracalność klientów do Twojego biznesu.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div>
                      <div className="form-icon-group inline-block">
                        <input
                          type="email"
                          className="form-control rounded-default h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          placeholder="Twój adres email..."
                          required
                        />
                        <span className="form-icon text-gray dark:text-gray-300">
                          <i className="unicon-email icon-1" />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 sm:col-auto">
                      <Link
                        href={`/page-pricing`}
                        className="btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white"
                      >
                        <span className="d-none md:d-block">
                          Wypróbuj za darmo
                        </span>
                        <span className="d-block md:d-none">Rozpocznij</span>
                      </Link>
                    </div>
                  </form>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    Dbamy o Twoje dane zgodnie z naszą
                    <Link
                      href={`/page-privacy`}
                      className="uc-link text-underline dark:text-secondary"
                    >
                      {" "}polityką prywatności
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className="ltr:d-block rtl:d-none"
                    alt="aplikacja-lojalnościowa-demo"
                    src="/assets/images/template/hero-mockup.png"
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
  );
}

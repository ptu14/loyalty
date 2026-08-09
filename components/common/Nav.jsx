"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav2() {
  const pathname = usePathname();
  const isCurrent = (href) =>
    href === "/" ? pathname === "/" : pathname === href;
  const isAboutProgramCurrent = ["/jak-to-dziala", "/wdrozenie", "/faq"].includes(
    pathname,
  );

  return (
    <>
      <li>
        <Link className={isCurrent("/") ? "menuActive" : ""} href="/">
          Start
        </Link>
      </li>
      <li>
        <Link
          className={isCurrent("/karta-lojalnosciowa") ? "menuActive" : ""}
          href="/karta-lojalnosciowa"
        >
          Cyfrowa karta
        </Link>
      </li>
      <li>
        <Link
          className={isCurrent("/funkcjonalnosci") ? "menuActive" : ""}
          href="/funkcjonalnosci"
        >
          Funkcjonalności
        </Link>
      </li>
      <li>
        <Link href="/#scenariusze">Scenariusze</Link>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a
          className={isAboutProgramCurrent ? "menuActive" : ""}
          role="button"
          aria-haspopup="true"
        >
          Jak to działa{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        <div
          className="uc-navbar-dropdown w-300px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div className="d-flex">
            <div className="w-100">
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href="/jak-to-dziala"
                  >
                    <i className="icon-1 unicon-view fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Jak to działa?</b>
                      <span className="fw-normal">
                        Zobacz, jak klienci dołączają i korzystają z programu.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href="/wdrozenie"
                  >
                    <i className="icon-1 unicon-tools fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Wdrożenie</b>
                      <span className="fw-normal">
                        Sprawdź, jak wspólnie uruchomimy Twój program.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href="/faq"
                  >
                    <i className="icon-1 unicon-blog fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">FAQ</b>
                      <span className="fw-normal">
                        Znajdź odpowiedzi na najczęstsze pytania.
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link
          className={isCurrent("/cennik") ? "menuActive" : ""}
          href="/cennik"
        >
          Cennik
        </Link>
      </li>
    </>
  );
}

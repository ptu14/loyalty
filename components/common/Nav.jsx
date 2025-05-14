"use client";
import Link from "next/link";
import Image from "next/image";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
import { mainPages, othermenuItems } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav2() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link href={`/`}>Start</Link>
      </li>
      <li>
        <Link href={`/funkcjonalnosci`}>Funkcjonalności</Link>
      </li>
      <li>
        <Link href={`/#scenariusze`}>Scenariusze</Link>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="/faq" role="button" aria-haspopup="true">
          FAQ{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
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
                    href={`/#faq`}
                  >
                    <i className="icon-1 unicon-blog fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">FAQ</b>
                      <span className="fw-normal">
                        Sprawdź najczęściej zadawane pytania.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/#scenariusze`}
                  >
                    <i className="icon-1 unicon-document fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Scenariusze</b>
                      <span className="fw-normal">
                        Sprawdź jakie scenariusze możesz stworzyć.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/wdrozenie`}
                  >
                    <i className="icon-1 unicon-tools fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Wdrożenie</b>
                      <span className="fw-normal">
                        Sprawdź jak wygląda proces implementacji.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/jak-to-dziala`}
                  >
                    <i className="icon-1 unicon-view fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Jak to działa?</b>
                      <span className="fw-normal">
                        Sprawdź jak działa program lojalnościowy.
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
        <Link href={`/cennik`}>Cennik</Link>
      </li>
    </>
  );
}

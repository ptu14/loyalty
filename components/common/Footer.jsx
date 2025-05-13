import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "./LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer2() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <img
                          className=" text-primary"
                          alt="Lexend"
                          src="/assets/images/common/logo-dark.svg"
                        />
                      </Link>
                      <p>
                      Stwórz program lojalnościowy który zwiększy powracalność Twoich klientów, zbuduje zaangażowanie i pozwoli Ci zarabiać więcej. Prosto, intuicyjnie, bez kodowania.
                      </p>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-12 lg:col-3">
                  <div className="panel vstack items-start gap-1 text-xs">
                    <h5 className="text-sm font-medium mb-1">Kontakt</h5>
                    <p>"Loyster" jest usługą firmy "Devexpert Mateusz Daniluk" </p>
                    <p>Numer kontaktowy: 505 205 940</p>
                    <p>NIP: 9222976031<br/>REGON: 524393301</p>
                    <p>ul. Anny Szwed-Śniadowskiej 42, 30-389 Kraków</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60">
                  Loyster© {new Date().getFullYear()}, All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

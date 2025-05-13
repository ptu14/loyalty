"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: "Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce." });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setSubmitStatus({ success: false, message: data.error || "Wystąpił błąd. Proszę spróbować ponownie." });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Nie udało się połączyć z serwerem. Sprawdź swoje połączenie z internetem." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Skontaktuj się z nami.
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Odpowiemy na Twoje pytania w ciągu 24 godzin.
              </p>
            </div>
            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                <div className="order-1 lg:order-0">
                  <div className="panel overflow-hidden rounded-3 h-100 min-h-450px">
                    <div className="position-cover text-white vstack justify-start p-3 lg:p-6 xl:p-6">
                      <div className="position-cover bg-primary" />
                      <div className="panel z-1">
                        <div className="vstack gap-0">
                          <p className="fs-4 xl:fs-3 fw-medium">
                            Dane kontaktowe:
                          </p>
                          <p className="fs-6 xl:fs-5 fw-normal">
                            Usługa <strong>"Loyster"</strong> jest produktem firmy{" "}
                            <strong>"Devexpert Mateusz Daniluk"</strong>
                          </p>
                          <p className="fs-5 xl:fs-4 fw-medium mb-0">
                            Numer kontaktowy:
                          </p>
                          <p className="fs-6 xl:fs-5 fw-light mt-0">
                            505 205 940
                          </p>
                          <p className="fs-5 xl:fs-4 fw-medium mb-0">
                            Dane rejestrowe:
                          </p>
                          <p className="fs-6 xl:fs-5 fw-light mt-0">
                          NIP: 9222976031<br/>
                          REGON: 524393301
                          </p>
                          <p className="fs-5 xl:fs-4 fw-medium mb-0">
                            Adres:
                          </p>
                          <p className="fs-6 xl:fs-5 fw-light mt-0">
                            ul. Anny Szwed-Śniadowskiej 42<br />
                            30-389 Kraków
                          </p>
                          <div className="vstack gap-0 mt-2">
                            <p className="fs-5 lg:fs-4 fw-medium">
                              Mateusz Daniluk
                            </p>
                            <span className="fs-7 opacity-80">
                              Founder &amp; CEO
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-0 lg:order-1">
                  <form
                    onSubmit={handleSubmit}
                    className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                  >
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                      Masz pytania lub sugestie? Wypełnij formularz poniżej,
                      a odpowiemy w ciągu 24 godzin.
                    </p>
                    
                    {submitStatus && (
                      <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-danger'}`}>
                        {submitStatus.message}
                      </div>
                    )}
                    

                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="text"
                          name="name"
                          placeholder="Imię i nazwisko..."
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />

                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="email"
                          name="email"
                          placeholder="Email*"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />

                    
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="tel"
                      name="phone"
                      placeholder="Telefon..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <textarea
                      className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      placeholder="Twoja wiadomość..."
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-primary btn-md text-white mt-2"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                    </button>
                    <p className="text-center">
                      Lub wyslij wiadomość na{" "}
                      <a className="uc-link" href="mailto:kontakt@loyster.pl">
                        kontakt@loyster.pl
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

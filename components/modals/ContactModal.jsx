"use client";

import { closeContactModal } from "@/utlis/toggleContactModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ContactModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
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
        body: JSON.stringify({
          name: `${formData.name} ${formData.lastName}`,
          email: formData.email,
          subject: `Prośba o demo od ${formData.company}`,
          message: `
Telefon: ${formData.phone}
Firma: ${formData.company}
Wiadomość: ${formData.message || "Brak dodatkowej wiadomości"}
          `
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: "Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce." });
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeContactModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeContactModal();
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      id="uc-contact-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeContactModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
              <h4 className="h5 lg:h4 m-0">Zaplanuj 15-minutowe demo</h4>
              <div className="panel w-100 sm:w-350px md:w-500px mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="vstack gap-2"
                >
                  {submitStatus && (
                    <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-danger'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Imię*"
                      required
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Nazwisko*"
                      required
                    />
                  </div>
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      required
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Numer telefonu*"
                      required
                    />
                  </div>
                  <input
                    className="form-control h-48px w-full bg-white dark:border-white dark:text-dark"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nazwa firmy*"
                    required
                  />
                  <textarea
                    className="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Twoja wiadomość..."
                  />
                  <button
                    className="btn btn-primary btn-md text-white mt-2"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wysyłanie..." : "Zaplanuj demo"}
                  </button>
                  <p className="fs-7 opacity-70 mt-2 text-center">
                    Dopasujemy prezentację do Twoich potrzeb i odpowiemy na wszystkie pytania. Przygotuj się do zobaczenia, jak to działa!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function UserPanel() {
    // Stan formularza
    const [formData, setFormData] = useState({
        name: "Natalia",
        phone: "",
        email: "natalia@example.com",
        emailSubscription: false,
        smsSubscription: false,
        webPushSubscription: false,
    });

    const [isSaving, setIsSaving] = useState(false);
    const [savedMessage, setSavedMessage] = useState("");

    // Obsługa zmian w polach tekstowych
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Obsługa zmian w przełącznikach
    const handleToggleChange = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    // Obsługa zapisywania zmian
    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setSavedMessage("");

        // Symulacja zapisu (tu będzie API call)
        setTimeout(() => {
            setIsSaving(false);
            setSavedMessage("Zmiany zostały zapisane pomyślnie! ✓");

            // Ukryj wiadomość po 3 sekundach
            setTimeout(() => {
                setSavedMessage("");
            }, 3000);
        }, 800);
    };

    return (
        <div className="section panel overflow-hidden position-relative">
            {/* Background Image */}
            <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
                <Image
                    src="/assets/images/playground_bg.png"
                    alt="Background"
                    fill
                    className="object-fit-cover"
                    priority
                />
            </div>

            <div className="section-outer panel pt-9 lg:pt-10 pb-6 xl:pb-8 position-relative z-1">
                <div className="container xl:max-w-xl">
                    <div className="section-inner panel">
                        <div className="panel vstack gap-4 xl:gap-6 max-w-800px mx-auto">
                            {/* Header */}
                            <div className="text-center">
                                <h1 className="h3 lg:h2 m-0 text-dark">
                                    Panel Użytkownika ⚙️
                                </h1>
                                <p className="fs-6 text-dark mt-2 opacity-75">
                                    Zarządzaj swoimi danymi i preferencjami
                                </p>
                            </div>

                            {/* Glass Card z Formularzem */}
                            <div className="w-100 px-2">
                                <div
                                    className="panel p-4 sm:p-5 xl:p-6 rounded-2 lg:rounded-3"
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                                        backdropFilter: "blur(10px)",
                                        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    <form onSubmit={handleSave} className="vstack gap-4 xl:gap-5">
                                        {/* Sekcja: Dane Osobowe */}
                                        <div className="vstack gap-3">
                                            <h3 className="h6 fw-bold text-dark m-0">
                                                Dane osobowe
                                            </h3>

                                            {/* Pole: Imię */}
                                            <div className="vstack gap-2">
                                                <label
                                                    htmlFor="name"
                                                    className="fs-7 fw-medium text-dark"
                                                >
                                                    Imię
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="form-control px-3 py-2 rounded-2 border-0"
                                                    style={{
                                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                                    }}
                                                    placeholder="Wprowadź swoje imię"
                                                />
                                            </div>

                                            {/* Pole: Email */}
                                            <div className="vstack gap-2">
                                                <label
                                                    htmlFor="email"
                                                    className="fs-7 fw-medium text-dark"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="form-control px-3 py-2 rounded-2 border-0"
                                                    style={{
                                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                                    }}
                                                    placeholder="+48 123 456 789"
                                                />
                                            </div>



                                            {/* Pole: Numer telefonu */}
                                            <div className="vstack gap-2">
                                                <label
                                                    htmlFor="phone"
                                                    className="fs-7 fw-medium text-dark"
                                                >
                                                    Numer telefonu
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="form-control px-3 py-2 rounded-2 border-0"
                                                    style={{
                                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                                    }}
                                                    placeholder="+48 123 456 789"
                                                />
                                            </div>
                                        </div>

                                        {/* Separator */}
                                        <div
                                            className="w-100"
                                            style={{
                                                height: "1px",
                                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                            }}
                                        ></div>

                                        {/* Sekcja: Powiadomienia */}
                                        <div className="vstack gap-3">
                                            <h3 className="h6 fw-bold text-dark m-0">
                                                Powiadomienia
                                            </h3>

                                            {/* Przełącznik: Email */}
                                            <div className="hstack justify-content-between align-items-center">
                                                <div className="vstack gap-1">
                                                    <span className="fs-7 fw-medium text-dark">
                                                        Subskrypcja email <span className="d-inline-flex px-1 bg-primary dark:bg-primary text-white dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">+ 10 pkt.</span>
                                                    </span>
                                                    <span className="fs-8 text-dark opacity-75">
                                                        Otrzymuj informacje o promocjach i nagrodach
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleToggleChange("emailSubscription")
                                                    }
                                                    className={`toggle-switch ${formData.emailSubscription ? "active" : ""
                                                        }`}
                                                    aria-label="Przełącz subskrypcję email"
                                                >
                                                    <span className="toggle-slider"></span>
                                                </button>
                                            </div>

                                            {/* Przełącznik: Web Push */}
                                            <div className="hstack justify-content-between align-items-center">
                                                <div className="vstack gap-1">
                                                    <span className="fs-7 fw-medium text-dark">
                                                        Powiadomienia push <span className="d-inline-flex px-1 bg-primary dark:bg-primary text-white dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                                            + 10 pkt.
                                                        </span>
                                                    </span>
                                                    <span className="fs-8 text-dark opacity-75">
                                                        Natychmiastowe powiadomienia w przeglądarce
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleToggleChange("webPushSubscription")
                                                    }
                                                    className={`toggle-switch ${formData.webPushSubscription ? "active" : ""
                                                        }`}
                                                    aria-label="Przełącz powiadomienia push"
                                                >
                                                    <span className="toggle-slider"></span>
                                                </button>
                                            </div>

                                            {/* Przełącznik: SMS */}
                                            <div className="hstack justify-content-between align-items-center">
                                                <div className="vstack gap-1">
                                                    <span className="fs-7 fw-medium text-dark">
                                                        Subskrypcja SMS <span className="d-inline-flex px-1 bg-primary dark:bg-primary text-white dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                                            + 25 pkt.
                                                        </span>
                                                    </span>
                                                    <span className="fs-8 text-dark opacity-75">
                                                        Otrzymuj powiadomienia SMS o promocjach
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleToggleChange("smsSubscription")
                                                    }
                                                    className={`toggle-switch ${formData.smsSubscription ? "active" : ""
                                                        }`}
                                                    aria-label="Przełącz subskrypcję SMS"
                                                >
                                                    <span className="toggle-slider"></span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Przycisk Zapisz */}
                                        <div className="vstack gap-2 mt-2">
                                            <button
                                                type="submit"
                                                disabled={isSaving}
                                                className="btn btn-primary w-100 py-2 rounded-2 fs-6 fw-medium position-relative"
                                                style={{
                                                    opacity: isSaving ? 0.7 : 1,
                                                    cursor: isSaving ? "not-allowed" : "pointer",
                                                }}
                                            >
                                                {isSaving ? "Zapisywanie..." : "Zapisz zmiany"}
                                            </button>

                                            {/* Wiadomość o sukcesie */}
                                            {savedMessage && (
                                                <div
                                                    className="text-center py-2 rounded-2 fs-7 fw-medium"
                                                    style={{
                                                        backgroundColor: "rgba(34, 197, 94, 0.15)",
                                                        color: "#16a34a",
                                                    }}
                                                >
                                                    {savedMessage}
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dodatkowe style dla przełączników */}
            <style jsx>{`
        .toggle-switch {
          position: relative;
          width: 48px;
          height: 28px;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          flex-shrink: 0;
        }

        .toggle-switch.active {
          background-color: var(--bs-primary, #6366f1);
        }

        .toggle-slider {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          background-color: white;
          border-radius: 50%;
          transition: transform 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-switch.active .toggle-slider {
          transform: translateX(20px);
        }

        .toggle-switch:hover {
          opacity: 0.9;
        }

        .toggle-switch:focus {
          outline: 2px solid var(--bs-primary, #6366f1);
          outline-offset: 2px;
        }
      `}</style>
        </div>
    );
}

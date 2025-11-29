"use client";

import React from "react";
import Image from "next/image";
import { promotions } from "@/data/promotions2";

export default function QrCode() {
    // Filtruj tylko aktywne promocje
    const activePromotions = promotions.filter(promo => promo.status === "active");

    return (
        <div className="section qr-code overflow-hidden position-relative">
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

            <div className="section-outer qr-code pt-9 lg:pt-10 pb-6 xl:pb-8 position-relative z-1">
                <div className="container xl:max-w-xl">
                    <div className="section-inner qr-code">
                        <div className="qr-code vstack gap-4 xl:gap-6 max-w-800px mx-auto">
                            {/* Header */}
                            <div className="text-center">
                                <h1 className="h3 lg:h2 m-0 text-dark">
                                    Twój Kod QR 📱
                                </h1>
                                <p className="fs-6 text-dark mt-2 opacity-75">
                                    Pokaż ten kod przy kasie aby aktywować promocje
                                </p>
                            </div>

                            {/* Glass Card z Kodem QR */}
                            <div className="w-100 px-2">
                                <div
                                    className="panel p-4 sm:p-5 xl:p-6 rounded-2 lg:rounded-3"
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                                        backdropFilter: "blur(10px)",
                                        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    <div className="vstack gap-4 xl:gap-5">
                                        {/* QR Code Image */}
                                        <div className="d-flex justify-content-center">
                                            <div
                                                className="position-relative rounded-3 mx-auto"
                                                style={{
                                                    width: "280px",
                                                    height: "280px",
                                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                                    padding: "20px",
                                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                <Image
                                                    src="/assets/images/qr-code.png"
                                                    alt="QR Code"
                                                    fill
                                                    className="object-fit-contain p-3"
                                                />
                                            </div>
                                        </div>

                                        {/* Instruction Text */}
                                        <div className="text-center">
                                            <p className="fs-7 text-dark opacity-75 m-0">
                                                📱 Pokaż kod na kasie aby zarejestrować wejście i zdobyć punkty
                                            </p>
                                        </div>

                                        {/* Separator */}
                                        <div
                                            className="w-100"
                                            style={{
                                                height: "1px",
                                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                            }}
                                        ></div>

                                        {/* Aktywne Promocje */}
                                        <div className="vstack gap-3">
                                            <h3 className="h6 fw-bold text-dark m-0">
                                                Aktywne promocje
                                            </h3>
                                            <p className="fs-7 text-dark opacity-75 m-0">
                                                Po zeskanowaniu kodu zostaną pobrane punkty za:
                                            </p>

                                            {/* Lista promocji */}
                                            <div className="vstack gap-2">
                                                {activePromotions.length > 0 ? (
                                                    activePromotions.map((promo) => (
                                                        <div
                                                            key={promo.id}
                                                            className="hstack gap-3 p-3 rounded-2"
                                                            style={{
                                                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                                            }}
                                                        >
                                                            <h4 className="fs-7 fw-medium text-dark m-0 flex-grow-1">
                                                                {promo.title}
                                                            </h4>
                                                            <span className="d-inline-flex px-1 bg-primary dark:bg-primary text-white dark:text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                                                - {promo.requiredPoints} pkt.
                                                            </span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="fs-7 text-dark opacity-75 text-center py-3">
                                                        Brak aktywnych promocji
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

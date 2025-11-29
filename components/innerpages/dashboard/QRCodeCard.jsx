"use client";
import React, { useEffect, useRef } from "react";

export default function QRCodeCard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const size = 200;
    const moduleSize = 8;
    canvas.width = size;
    canvas.height = size;

    // Tło białe
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Prosty kod QR - wzór kwadratowy (symulacja)
    ctx.fillStyle = "#000000";
    
    // Górny lewy moduł (finder pattern) - 7x7 modułów
    const finderSize = 7;
    const finderOffset = 20;
    
    // Górny lewy finder
    for (let y = 0; y < finderSize; y++) {
      for (let x = 0; x < finderSize; x++) {
        if (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4)) {
          ctx.fillRect(finderOffset + x * moduleSize, finderOffset + y * moduleSize, moduleSize, moduleSize);
        }
      }
    }
    
    // Górny prawy finder
    for (let y = 0; y < finderSize; y++) {
      for (let x = 0; x < finderSize; x++) {
        if (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4)) {
          ctx.fillRect(size - finderOffset - finderSize * moduleSize + x * moduleSize, finderOffset + y * moduleSize, moduleSize, moduleSize);
        }
      }
    }
    
    // Dolny lewy finder
    for (let y = 0; y < finderSize; y++) {
      for (let x = 0; x < finderSize; x++) {
        if (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4)) {
          ctx.fillRect(finderOffset + x * moduleSize, size - finderOffset - finderSize * moduleSize + y * moduleSize, moduleSize, moduleSize);
        }
      }
    }

    // Wzór danych (symulacja) - losowy wzór przypominający kod QR
    const dataStartX = finderOffset + finderSize * moduleSize + moduleSize * 2;
    const dataStartY = finderOffset + finderSize * moduleSize + moduleSize * 2;
    const dataEndX = size - finderOffset - finderSize * moduleSize - moduleSize * 2;
    const dataEndY = size - finderOffset - finderSize * moduleSize - moduleSize * 2;
    
    // Wzór przypominający kod QR (symulacja)
    for (let y = dataStartY; y < dataEndY; y += moduleSize) {
      for (let x = dataStartX; x < dataEndX; x += moduleSize) {
        // Pomijamy obszary finderów
        if (
          (x < finderOffset + finderSize * moduleSize + moduleSize && y < finderOffset + finderSize * moduleSize + moduleSize) ||
          (x > size - finderOffset - finderSize * moduleSize - moduleSize && y < finderOffset + finderSize * moduleSize + moduleSize) ||
          (x < finderOffset + finderSize * moduleSize + moduleSize && y > size - finderOffset - finderSize * moduleSize - moduleSize)
        ) {
          continue;
        }
        
        // Losowy wzór (dla symulacji)
        const shouldFill = (x + y) % (moduleSize * 3) < moduleSize * 2;
        if (shouldFill) {
          ctx.fillRect(x, y, moduleSize, moduleSize);
        }
      }
    }
  }, []);

  return (
    <div
      className="section panel"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 300;"
    >
      <div className="section-outer panel py-4 xl:py-6">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel p-6 xl:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800">
              <div className="panel vstack gap-4 items-center">
                <div className="panel vstack gap-2 text-center">
                  <h3 className="h4 lg:h3 m-0">Twój kod QR</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                    Pokaż ten kod przy kasie, aby otrzymać punkty
                  </p>
                </div>
                <div className="panel p-4 bg-white dark:bg-gray-700 rounded-2">
                  <canvas
                    ref={canvasRef}
                    className="d-block"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="panel vstack gap-2 text-center">
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                    Kod ID: <span className="fw-bold">LOYS-1234-5678</span>
                  </p>
                  <button
                    className="btn btn-primary btn-sm rounded-default text-white"
                    onClick={() => {
                      // W rzeczywistej aplikacji tutaj byłoby pobieranie/udostępnianie kodu
                      alert("Funkcja pobierania kodu QR będzie dostępna wkrótce");
                    }}
                  >
                    Pobierz kod QR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


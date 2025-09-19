import React, { useState, useEffect } from "react";

const slides = [
  // Morning routine / journaling
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",

  // Healthy food (diet habits)
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",

  // Exercise habit
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",

  // Reading habit
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",

  // Productivity / planning habit
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
];


export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(null);

  // Auto-slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // ✅ Handle both swipe (touch) and drag (mouse)
  const handleStart = (x) => setStartX(x);
  const handleEnd = (x) => {
    if (startX === null) return;
    const diff = startX - x;

    if (diff > 50) {
      // swipe/drag left → next
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) {
      // swipe/drag right → prev
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    setStartX(null);
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto mt-6 rounded-2xl shadow-lg overflow-hidden select-none"
      role="region"
      aria-label="image carousel"
      // 📱 Touch events
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      // 🖱️ Mouse events
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
    >
      <div className="relative h-56 md:h-96">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== current}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Learn More button overlay */}
            {index === current && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <button className="px-5 py-2 bg-white/80 text-gray-800 font-semibold rounded-full shadow-md hover:bg-white transition">
                  Learn More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots (indicators) */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-current={index === current}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

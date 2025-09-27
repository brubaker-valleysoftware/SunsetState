"use client";
import React, { useState, useRef } from "react";

export default function Reviews() {
  const [slider1Position, setSlider1Position] = useState(50);
  const [slider2Position, setSlider2Position] = useState(50);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);

  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  const handleMouseDown1 = () => setIsDragging1(true);
  const handleMouseDown2 = () => setIsDragging2(true);

  const handleMouseUp = () => {
    setIsDragging1(false);
    setIsDragging2(false);
  };

  const handleMouseMove = (e, containerRef, setPosition, isDragging) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  React.useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging1(false);
      setIsDragging2(false);
    };

    const handleGlobalMouseMove = (e) => {
      if (isDragging1) {
        handleMouseMove(e, container1Ref, setSlider1Position, isDragging1);
      }
      if (isDragging2) {
        handleMouseMove(e, container2Ref, setSlider2Position, isDragging2);
      }
    };

    if (isDragging1 || isDragging2) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging1, isDragging2]);

  const BeforeAfterSlider = ({ beforeImage, afterImage, position, setPosition, containerRef, onMouseDown }) => (
    <div
      ref={containerRef}
      className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-xl cursor-col-resize select-none"
      onMouseMove={(e) => handleMouseMove(e, containerRef, setPosition, onMouseDown)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img src={afterImage} alt="After junk removal" className="w-full h-full object-cover" draggable={false} />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          AFTER
        </div>
      </div>

      {/* Before Image (Overlay) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={beforeImage} alt="Before junk removal" className="w-full h-full object-cover" draggable={false} />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          BEFORE
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10 cursor-pointer"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onMouseDown={onMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-0.5 h-4 bg-gray-400"></div>
              <div className="w-0.5 h-4 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-teal text-4xl md:text-5xl font-montserrat font-bold text-center mb-10 md:mb-16">
            See The Difference We Make
          </h3>
        </div>

        {/* Before/After Sliders */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-semibold text-gray-900 text-center">Garage Clean-Out</h3> */}
            <BeforeAfterSlider
              beforeImage="/images/beforeafter/1-before.jpg"
              afterImage="/images/beforeafter/1-after.jpg"
              position={slider1Position}
              setPosition={setSlider1Position}
              containerRef={container1Ref}
              onMouseDown={handleMouseDown1}
            />
          </div>

          <div className="space-y-4">
            {/* <h3 className="text-2xl font-semibold text-gray-900 text-center">Residential Clean-Up</h3> */}
            <BeforeAfterSlider
              beforeImage="/images/beforeafter/2-before.jpg"
              afterImage="/images/beforeafter/2-after.jpg"
              position={slider2Position}
              setPosition={setSlider2Position}
              containerRef={container2Ref}
              onMouseDown={handleMouseDown2}
            />
          </div>
        </div>

        
      </div>
    </section>
  );
}

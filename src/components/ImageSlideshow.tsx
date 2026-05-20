"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface SlideImage {
  src: string;
  alt: string;
}

interface Props {
  images: SlideImage[];
  className?: string;
}

export default function ImageSlideshow({ images, className = "" }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(advance, 4500);
    return () => clearInterval(id);
  }, [paused, advance, images.length]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface LazyMapProps {
  src: string;
  className?: string;
  title: string;
}

export default function LazyMap({ src, className, title }: LazyMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    if (shouldLoadMap) return;
    const el = mapContainerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <div ref={mapContainerRef} className={className}>
      {shouldLoadMap ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      ) : (
        <div className="w-full h-full bg-muted" />
      )}
    </div>
  );
}

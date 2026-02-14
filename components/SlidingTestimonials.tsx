"use client";

import { useEffect, useRef, useCallback } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  service?: string;
}

interface SlidingTestimonialsProps {
  testimonials: Testimonial[];
}

const TestimonialPill = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 w-[340px] md:w-[400px] bg-card rounded-2xl p-6 border border-border shadow-card mx-3 flex flex-col">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < testimonial.rating ? "text-gold fill-gold" : "text-muted/30"
          )}
        />
      ))}
    </div>
    <blockquote className="text-foreground text-sm leading-relaxed mb-4 flex-1">
      &ldquo;{testimonial.text}&rdquo;
    </blockquote>
    <div className="mt-auto">
      <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
    </div>
  </div>
);

const SlidingTestimonials = ({ testimonials }: SlidingTestimonialsProps) => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Split testimonials into two rows
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  // Duplicate for infinite scroll (3 copies so we can slide through one full set)
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  // Measure the pixel width of one set of cards and set it as a CSS variable
  // so the animation translates by exactly the right amount for a seamless loop.
  const measureAndSet = useCallback(() => {
    [row1Ref, row2Ref].forEach((ref, idx) => {
      const el = ref.current;
      if (!el) return;
      const count = idx === 0 ? row1.length : row2.length;
      // Each card is a direct child; measure the first `count` cards
      let setWidth = 0;
      for (let i = 0; i < count && i < el.children.length; i++) {
        const child = el.children[i] as HTMLElement;
        // offsetWidth + horizontal margin
        const style = getComputedStyle(child);
        setWidth +=
          child.offsetWidth +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight);
      }
      el.style.setProperty("--slide-distance", `-${setWidth}px`);
    });
  }, [row1.length, row2.length]);

  useEffect(() => {
    measureAndSet();
    window.addEventListener("resize", measureAndSet);
    return () => window.removeEventListener("resize", measureAndSet);
  }, [measureAndSet]);

  return (
    <div className="overflow-hidden -mx-4 md:-mx-8 space-y-6">
      {/* Row 1 - slides left */}
      <div className="relative">
        <div
          ref={row1Ref}
          className="flex animate-slide-left"
        >
          {row1Items.map((t, i) => (
            <TestimonialPill key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2 - slides right */}
      <div className="relative">
        <div
          ref={row2Ref}
          className="flex animate-slide-right"
        >
          {row2Items.map((t, i) => (
            <TestimonialPill key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingTestimonials;

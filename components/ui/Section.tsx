"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt" | "dark" | "cta";
  id?: string;
}

const Section = ({ children, className, variant = "default", id }: SectionProps) => {
  const variants = {
    default: "bg-background",
    alt: "bg-cream-dark",
    dark: "bg-primary text-primary-foreground",
    cta: "bg-secondary text-secondary-foreground",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", variants[variant], className)}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
};

export default Section;

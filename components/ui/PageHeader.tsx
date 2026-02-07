"use client";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  subtitle: string;
  title: string;
  description: string;
  className?: string;
}

const PageHeader = ({ subtitle, title, description, className }: PageHeaderProps) => {
  return (
    <section className={cn("relative py-16 md:py-20 overflow-hidden bg-cream-dark", className)}>
      {/* Organic flowing background - no pattern, just beautiful shapes */}
      
      {/* Primary organic shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/8 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-primary/6 translate-x-1/3 translate-y-1/3 blur-[120px]" />
      
      {/* Accent color shapes */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/15 translate-x-1/2 -translate-y-1/2 blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/10 -translate-x-1/2 translate-y-1/2 blur-[80px]" />
      
      {/* Soft terracotta accent */}
      <div className="absolute top-2/3 right-1/3 w-64 h-64 rounded-full bg-terracotta/8 translate-x-1/2 -translate-y-1/2 blur-[90px]" />
      
      {/* Flowing wave element */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.03) 25%, transparent 50%, hsl(var(--accent) / 0.04) 75%, transparent 100%)`,
        }}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            {subtitle}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

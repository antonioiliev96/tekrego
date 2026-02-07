import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = "center",
  className,
  children,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeader;

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    durations?: { minutes: number }[];
    benefits?: string[];
    effects?: string[];
    icon?: string;
    dedicatedPage?: string;
  };
  variant?: "default" | "featured";
  className?: string;
}

const ServiceCard = ({ service, variant = "default", className }: ServiceCardProps) => {
  const IconComponent = service.icon
    ? (LucideIcons as any)[service.icon] || LucideIcons.Sparkles
    : LucideIcons.Sparkles;

  const isFeatured = variant === "featured";
  const linkHref = service.dedicatedPage || `/services#${service.slug}`;

  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden transition-all duration-500",
        "hover:shadow-lg hover:-translate-y-2",
        isFeatured
          ? "bg-primary text-primary-foreground"
          : "bg-card border border-border hover:border-primary/30",
        className
      )}
    >
      <div className="p-7 md:p-8 flex flex-col h-full">
        {/* Badge */}
        {isFeatured && (
          <span className="inline-block self-start px-3 py-1 bg-background text-primary text-xs font-bold rounded-full mb-5">
            ★ Популярна
          </span>
        )}

        {/* Icon */}
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300",
          isFeatured ? "bg-primary-foreground/15" : "bg-accent"
        )}>
          <IconComponent className={cn(
            "w-7 h-7",
            isFeatured ? "text-primary-foreground" : "text-accent-foreground"
          )} />
        </div>

        {/* Content */}
        <h3 className={cn(
          "font-serif text-xl md:text-2xl font-semibold mb-3",
          isFeatured ? "text-primary-foreground" : "text-foreground"
        )}>
          {service.name}
        </h3>
        <p className={cn(
          "text-sm leading-relaxed mb-5",
          isFeatured ? "text-primary-foreground/80" : "text-muted-foreground"
        )}>
          {service.shortDescription}
        </p>

        {/* Benefits/Effects preview */}
        {(service.benefits || service.effects) && (
          <ul className="space-y-2 mb-6">
            {(service.effects || service.benefits)?.slice(0, 3).map((b) => (
              <li key={b} className={cn(
                "flex items-center gap-2 text-xs",
                isFeatured ? "text-primary-foreground/75" : "text-muted-foreground"
              )}>
                <Check className={cn(
                  "w-3.5 h-3.5 flex-shrink-0",
                  isFeatured ? "text-primary-foreground" : "text-primary"
                )} />
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className={cn("h-px mb-5", isFeatured ? "bg-primary-foreground/20" : "bg-border")} />

        {/* CTA */}
        <div className="flex items-center justify-end">
          <Link
            href={linkHref}
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-medium transition-all group/link",
              isFeatured
                ? "text-primary-foreground hover:text-primary-foreground/80"
                : "text-primary hover:text-accent-foreground"
            )}
          >
            {service.dedicatedPage ? "Научете повече" : "Детайли"}
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

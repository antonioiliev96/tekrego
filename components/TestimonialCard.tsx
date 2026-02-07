import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    rating: number;
    text: string;
    service?: string;
  };
  className?: string;
}

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 md:p-8 border border-border shadow-card",
        className
      )}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < testimonial.rating
                ? "text-gold fill-gold"
                : "text-muted-foreground/30"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground leading-relaxed mb-5">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-foreground">{testimonial.name}</p>
          {testimonial.service && (
            <p className="text-sm text-muted-foreground">{testimonial.service}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

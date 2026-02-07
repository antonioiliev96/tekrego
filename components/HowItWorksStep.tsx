import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface HowItWorksStepProps {
  step: {
    step: number;
    title: string;
    description: string;
    icon: string;
  };
  isLast?: boolean;
  className?: string;
}

const HowItWorksStep = ({ step, isLast = false, className }: HowItWorksStepProps) => {
  const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.Circle;

  return (
    <div className={cn("relative flex flex-col items-center text-center", className)}>
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-border" />
      )}

      {/* Step number with icon */}
      <div className="relative mb-5">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-soft">
          <IconComponent className="w-8 h-8 text-primary-foreground" />
        </div>
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">
          {step.step}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
        {step.title}
      </h3>
      <p className="text-muted-foreground text-sm max-w-xs">
        {step.description}
      </p>
    </div>
  );
};

export default HowItWorksStep;

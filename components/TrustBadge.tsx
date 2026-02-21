import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface TrustBadgeProps {
  badge: {
    icon: string;
    title: string;
    description: string;
  };
  className?: string;
}

const TrustBadge = ({ badge, className }: TrustBadgeProps) => {
  const IconComponent = (LucideIcons as any)[badge.icon] || LucideIcons.Check;

  return (
    <div className={cn("text-center", className)}>
      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-7 h-7 text-accent-foreground" />
      </div>
      <p className="font-serif text-lg font-semibold text-foreground mb-2">
        {badge.title}
      </p>
      <p className="text-sm text-muted-foreground">{badge.description}</p>
    </div>
  );
};

export default TrustBadge;

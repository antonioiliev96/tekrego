import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, teamMembers } from "@/content/siteContent";

const founder = teamMembers[0];

const StudioCta = () => (
  <aside
    aria-labelledby="studio-cta-title"
    className="mt-12 rounded-2xl border border-border bg-cream-dark p-6 md:p-8 flex flex-col sm:flex-row gap-6 sm:items-center"
  >
    <Image
      src={founder.photo}
      alt={founder.name}
      width={112}
      height={112}
      sizes="112px"
      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shrink-0 border-4 border-background"
    />
    <div className="flex-1">
      <h2 id="studio-cta-title" className="font-serif text-2xl font-semibold text-foreground mb-2 text-balance">
        Запазете час в ТеКрегО
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground mb-5 text-pretty">
        {founder.name} е основател на ТеКрегО и юмейхо терапевт с международна квалификация (I–III степен). Всяка
        процедура е съобразена с вашето състояние и нужди.
      </p>
      <div className="flex flex-wrap gap-3">
        {/* Darker pink: white on the brand pink is 4.3:1, under the 4.5:1 minimum for small text. */}
        <Button variant="cta" className="bg-accent-foreground hover:bg-accent-foreground/90" asChild>
          <a href={`tel:${siteConfig.business.phoneClean}`}>
            <Phone aria-hidden="true" />
            Запази час
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">Вижте услугите</Link>
        </Button>
      </div>
    </div>
  </aside>
);

export default StudioCta;

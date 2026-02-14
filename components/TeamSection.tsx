import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { teamMembers } from "@/content/siteContent";
import { Instagram, Facebook, Phone } from "lucide-react";

const TeamSection = () => {
  return (
    <Section>
      <SectionHeader
        subtitle="Екип"
        title="Запознайте се с нашия екип"
        description="Професионалисти, посветени на вашето здраве и благополучие."
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => {
          const roles = member.role.split('|').map(r => r.trim());
          const bioParagraphs = member.bio.split('. ').reduce((acc: string[], sentence: string, idx: number, arr: string[]) => {
            if (idx === 0 || idx === 1) {
              acc.push(sentence + (idx < arr.length - 1 ? '.' : ''));
            } else if (idx === 2) {
              acc.push(sentence + (idx < arr.length - 1 ? '.' : ''));
            } else {
              if (acc.length === 3) {
                acc[2] += ' ' + sentence + (idx < arr.length - 1 ? '.' : '');
              }
            }
            return acc;
          }, []);

          return (
            <div
              key={member.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-medium transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-80 md:h-96 overflow-hidden flex-shrink-0">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Name overlay on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-semibold text-background mb-3">
                    {member.name}
                  </h3>
                  {/* <div className="flex flex-wrap gap-2">
                    {roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 mb-5">
                  {bioParagraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Roles */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {roles.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-3 mt-auto">
                  {member.social?.phone && (
                    <a
                      href={`tel:${member.social.phone}`}
                      className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`Обадете се на ${member.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                  {member.social?.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`Instagram на ${member.name}`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {member.social?.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`Facebook на ${member.name}`}
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default TeamSection;

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/siteContent";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern - concentric circles */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 2px, hsl(0 0% 100% / 0.12) 2px, hsl(0 0% 100% / 0.12) 3px, transparent 3px, transparent 10px)`,
          backgroundSize: '36px 36px',
        }}
      />
      {/* Main Footer */}
      <div className="container-wide py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* <Image
                src="/logo.png"
                alt={siteConfig.business.name}
                width={160}
                height={96}
                className="h-24 w-auto object-contain object-left"
              /> */}
              <h3 className="font-serif text-xl font-semibold">
                {siteConfig.business.name}
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {siteConfig.business.tagline}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={siteConfig.business.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.business.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.business.links.viber}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Viber"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info - NAP Consistency */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Контакти</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.business.phoneClean}`}
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.business.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.business.email}</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.business.address.full}</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Работно време</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Пон - Пет: {siteConfig.business.hours.weekdays}</p>
                  <p>Събота: {siteConfig.business.hours.saturday}</p>
                  <p>Неделя: {siteConfig.business.hours.sunday}</p>
                </div>
              </div>
              <p className="text-xs italic pt-2">{siteConfig.business.hours.note}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} {siteConfig.business.name}. Всички права запазени.</p>
            <div className="flex gap-6">
              {siteConfig.navigation.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

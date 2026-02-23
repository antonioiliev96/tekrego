"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/siteContent";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPreview = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    if (shouldLoadMap) return;
    const el = mapContainerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {/* Map */}
      <div
        ref={mapContainerRef}
        className="aspect-video md:aspect-auto md:min-h-[400px] rounded-xl overflow-hidden shadow-soft"
      >
        {shouldLoadMap ? (
          <iframe
            src={siteConfig.business.links.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Местоположение на масажното студио"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col justify-center">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
          Посетете ни
        </h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">Адрес</p>
              <p className="text-muted-foreground">{siteConfig.business.address.full}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">Телефон</p>
              <div className="flex flex-col gap-1">

                <a
                  href={`tel:${siteConfig.business.phoneClean}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.business.phone}
                </a>
                <a
                  href="tel:+359897024908"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +359 89 7024908
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">Работно време</p>
              <p className="text-muted-foreground">
                Пон-Пет: {siteConfig.business.hours.weekdays}<br />
                Събота: {siteConfig.business.hours.saturday}<br />
                Неделя: {siteConfig.business.hours.sunday}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - bookings by phone or Viber only */}
        <div className="flex flex-wrap gap-3">
          <Button variant="cta" asChild>
            <a href={`tel:${siteConfig.business.phoneClean}`}>
              <Phone className="w-4 h-4 mr-2" />
              Обадете се
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={siteConfig.business.links.viber}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Viber
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPreview;

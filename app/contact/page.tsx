import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/siteContent";
import { contactMetadata } from "@/lib/metadata";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import LazyMap from "@/components/LazyMap";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
    return (
        <>
            <PageHeader
                subtitle="Контакти"
                title="Свържете се с нас"
                description="Ще се радваме да отговорим на вашите въпроси и да ви помогнем да запазите час."
            />

            {/* Contact Info + Map */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                            Информация за контакт
                        </h2>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-2">Телефон</p>
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

                            {/* Email */}
                            <a
                                href={`mailto:${siteConfig.business.email}`}
                                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-card transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Имейл</p>
                                    <p className="text-muted-foreground">{siteConfig.business.email}</p>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Адрес</p>
                                    <p className="text-muted-foreground">{siteConfig.business.address.full}</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Работно време</p>
                                    <div className="text-muted-foreground space-y-1">
                                        <p>Пон - Пет: {siteConfig.business.hours.weekdays}</p>
                                        <p>Събота: {siteConfig.business.hours.saturday}</p>
                                        <p>Неделя: {siteConfig.business.hours.sunday}</p>
                                        <p className="text-sm italic pt-1">{siteConfig.business.hours.note}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 space-y-3">
                            <Button variant="cta" size="lg" className="w-full" asChild>
                                <a href={`tel:${siteConfig.business.phoneClean}`}>
                                    <Phone className="w-5 h-5 mr-2" />
                                    Обадете се сега
                                </a>
                            </Button>
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" asChild>
                                    <a href={siteConfig.business.links.viber}>
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Viber
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a
                                        href={siteConfig.business.links.googleMaps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Navigation className="w-4 h-4 mr-2" />
                                        Навигация
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                            Къде да ни намерите
                        </h2>
                        <LazyMap
                            src={siteConfig.business.links.googleMapsEmbed}
                            className="rounded-xl overflow-hidden shadow-card border border-border/50 aspect-[4/3]"
                            title="Местоположение на масажното студио"
                        />
                        <div className="mt-6 p-4 rounded-xl bg-cream-dark">
                            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                                Как да ни намерите
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Студиото се намира на улица Николаевска 91 в Русе, с лесен достъп от всички части на
                                града. Има удобно паркиране наблизо. При нужда от допълнителни указания,
                                не се колебайте да се обадите.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Social Links */}
            <Section variant="alt">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                        Последвайте ни
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Следете ни в социалните мрежи за актуални промоции и новини.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={siteConfig.business.links.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1877F2] text-white hover:bg-[#166FE5] transition-all shadow-sm hover:shadow-md"
                            aria-label="Facebook"
                        >
                            <FacebookIcon size={22} className="flex-shrink-0" />
                            Facebook
                        </a>
                        <a
                            href={siteConfig.business.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-95 transition-all shadow-sm hover:shadow-md"
                            aria-label="Instagram"
                        >
                            <InstagramIcon size={22} className="flex-shrink-0" />
                            Instagram
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}

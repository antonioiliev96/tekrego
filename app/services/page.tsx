import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { services, siteConfig } from "@/content/siteContent";
import { serviceMetadata } from "@/lib/metadata";
import { Phone, Check, ArrowRight, Users, Sparkles } from "lucide-react";
import * as LucideIcons from "lucide-react";

export const metadata: Metadata = serviceMetadata(
    "Масажни услуги",
    "Професионални масажни услуги в Русе: класически, дълбокотъканен, Юмейхо терапия, вендузотерапия, антицелулитен масаж и още. Сертифициран терапевт с индивидуален подход."
);

const PlasmaBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] animate-plasma-1" />
        <div className="absolute -bottom-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-terracotta/6 blur-[100px] animate-plasma-2" />
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-plasma-3" />
    </div>
);

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                subtitle="Услуги"
                title="Нашите терапии и масажи"
                description="Всяка процедура в ТеКрегО е съобразена с вашето състояние и нужди. Открийте подходящата за вас терапия."
            />

            {/* Services List */}
            <div className="relative">
                <PlasmaBackground />
                <Section className="relative z-10">
                    <div className="space-y-16 md:space-y-24">
                        {services.map((service, index) => {
                            const IconComponent = service.icon
                                ? (LucideIcons as any)[service.icon] || LucideIcons.Sparkles
                                : LucideIcons.Sparkles;

                            const isReversed = index % 2 !== 0;
                            const isDedicated = !!(service as any).dedicatedPage;

                            return (
                                <AnimateOnScroll
                                    key={service.id}
                                    direction="up"
                                    delay={100}
                                >
                                    <div
                                        id={service.id}
                                        className="relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-card transition-all scroll-mt-24"
                                    >
                                        {/* Decorative gradient bar */}
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent" />

                                        {/* Header with Icon and Title */}
                                        <div className="p-6 md:p-8 pb-4">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <IconComponent className="w-7 h-7 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-1">
                                                        {service.name}
                                                    </h2>
                                                    {isDedicated && (
                                                        <Link
                                                            href={(service as any).dedicatedPage}
                                                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                                        >
                                                            Научете повече
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="px-6 md:px-8 pb-5">
                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                {service.fullDescription}
                                            </p>
                                        </div>

                                        {/* Two Column Layout for Details */}
                                        <div className="grid md:grid-cols-2 gap-5 px-6 md:px-8 pb-6">
                                            {/* Suitable For */}
                                            {(service as any).suitableFor && (
                                                <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        {/* <Users className="w-5 h-5 text-primary" /> */}
                                                        <h3 className="font-semibold text-foreground">Подходящ при</h3>
                                                    </div>
                                                    {Array.isArray((service as any).suitableFor) ? (
                                                        <ul className="space-y-2.5">
                                                            {(service as any).suitableFor.map((item: string, i: number) => (
                                                                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-sm text-muted-foreground leading-relaxed">{(service as any).suitableFor}</p>
                                                    )}
                                                </div>
                                            )}

                                            {/* Effects or Benefits */}
                                            {((service as any).effects || (service as any).benefits) && (
                                                <div className="p-5 rounded-xl bg-accent/50 border border-border">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        {/* <Sparkles className="w-5 h-5 text-primary" /> */}
                                                        <h3 className="font-semibold text-foreground">
                                                            {(service as any).effects ? "Ефекти" : "Какво включва"}
                                                        </h3>
                                                    </div>
                                                    <ul className="space-y-2.5">
                                                        {((service as any).effects || (service as any).benefits)?.map((item: string, i: number) => (
                                                            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                                                                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="px-6 md:px-8 pb-6 pt-2 border-t border-border/50">
                                            <div className="flex flex-wrap gap-3">
                                                <Button variant="cta" size="sm" asChild>
                                                    <a href={`tel:${(service as any).bookingPhone || siteConfig.business.phoneClean}`}>
                                                        <Phone className="w-4 h-4 mr-2" />
                                                        Запази час
                                                    </a>
                                                </Button>
                                                {isDedicated ? (
                                                    <Button variant="outline" size="sm" asChild>
                                                        <Link href={(service as any).dedicatedPage}>
                                                            Научете повече
                                                            <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Link>
                                                    </Button>
                                                ) : (
                                                    <Button variant="outline" size="sm" asChild>
                                                        <Link href="/contact">
                                                            Контакти
                                                            <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Link>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </Section>
            </div>

            {/* CTA */}
            <Section variant="alt">
                <AnimateOnScroll direction="none">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                            Не сте сигурни коя терапия е подходяща за вас?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Свържете се с нас и ние ще ви помогнем да изберете най-подходящата процедура.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="default" size="lg" asChild>
                                <a href={`tel:${siteConfig.business.phoneClean}`}>
                                    <Phone className="w-5 h-5 mr-2" />
                                    Обадете се сега
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="border-secondary-foreground/50 text-secondary hover:bg-secondary-foreground hover:text-secondary" asChild>
                                <a href={siteConfig.business.links.viber}>
                                    Пишете ни във Viber
                                </a>
                            </Button>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Section>
        </>
    );
}

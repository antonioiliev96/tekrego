import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { services, siteConfig } from "@/content/siteContent";
import { Phone, Clock, Check, AlertCircle, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export const metadata: Metadata = {
    title: "Масажни услуги",
    description: "Професионални масажни услуги в Русе: класически, лечебен, Юмейхо терапия, антистрес и още. Сертифициран терапевт с индивидуален подход.",
};

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
                title="Масажни услуги в Русе"
                description="Изберете от нашия широк набор от професионални масажи, всеки от които е проектиран да отговори на вашите специфични нужди."
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

                            return (
                                <AnimateOnScroll
                                    key={service.id}
                                    direction={isReversed ? "left" : "right"}
                                    delay={100}
                                >
                                <div
                                    id={service.id}
                                    className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-start scroll-mt-24`}
                                >
                                    {/* Icon & Visual */}
                                    <div className="w-full md:w-1/3 flex-shrink-0">
                                        <div className="bg-card rounded-2xl p-8 shadow-card text-center border border-border/50 backdrop-blur-sm">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                            <div className="space-y-2">
                                                {service.durations?.map((d, i) => (
                                                    <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{d.minutes} мин.</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                            {service.name}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            {service.fullDescription}
                                        </p>

                                        {service.benefits && service.benefits.length > 0 && (
                                            <ul className="space-y-2 mb-6">
                                                {service.benefits.map((bullet, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {service.contraindications && (
                                            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-6">
                                                <div className="flex items-start gap-3">
                                                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground mb-1">Противопоказания</p>
                                                        <p className="text-sm text-muted-foreground">{service.contraindications}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-3">
                                            <Button variant="cta" asChild>
                                                <a href={`tel:${siteConfig.business.phoneClean}`}>
                                                    <Phone className="w-4 h-4 mr-2" />
                                                    Запази час
                                                </a>
                                            </Button>
                                            <Button variant="outline" asChild>
                                                <Link href="/contact">
                                                    Контакти
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Link>
                                            </Button>
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
                        Не сте сигурни кой масаж е подходящ за вас?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Свържете се с нас и ние ще ви помогнем да изберете най-подходящата терапия.
                    </p>
                    <Button variant="default" size="lg" asChild>
                        <a href={`tel:${siteConfig.business.phoneClean}`}>
                            <Phone className="w-5 h-5 mr-2" />
                            Обадете се сега
                        </a>
                    </Button>
                </div>
                </AnimateOnScroll>
            </Section>
        </>
    );
}

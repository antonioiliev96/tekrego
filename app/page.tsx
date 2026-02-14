import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import SlidingTestimonials from "@/components/SlidingTestimonials";
import TrustBadge from "@/components/TrustBadge";
import HowItWorksStep from "@/components/HowItWorksStep";
import GalleryGrid from "@/components/GalleryGrid";
import FAQAccordion from "@/components/FAQAccordion";
import ContactPreview from "@/components/ContactPreview";
import TeamSection from "@/components/TeamSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import {
    siteConfig,
    services,
    testimonials,
    trustBadges,
    howItWorks,
    faqs,
} from "@/content/siteContent";
import { galleryImageAssets } from "@/public/assets/galleryImages";
import { Phone, ArrowRight, Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Начало",
    description: siteConfig.business.description,
};

export default function HomePage() {
    const previewServices = services.slice(0, 6);

    return (
        <>
            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/hero-studio.jpg"
                        alt="Масажно студио в Русе - уютна обстановка"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
                </div>

                <div className="container-wide relative z-10 py-20 md:py-32">
                    <div className="max-w-2xl animate-slide-up">
                        <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                            Професионални масажи в Русе
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                            {siteConfig.business.name}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                            {siteConfig.business.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="cta" size="lg" asChild>
                                <a href={`tel:${siteConfig.business.phoneClean}`}>
                                    <Phone className="w-5 h-5 mr-2" />
                                    Запази час
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/services">
                                    Нашите услуги
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TRUST BADGES ========== */}
            <Section variant="alt">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {trustBadges.map((badge, index) => (
                        <AnimateOnScroll key={index} delay={index * 100} direction="up">
                            <TrustBadge badge={badge} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </Section>

            {/* ========== SERVICES PREVIEW ========== */}
            <Section>
                <AnimateOnScroll>
                    <SectionHeader
                        subtitle="Нашите услуги"
                        title="Грижа за вашето тяло и дух"
                        description="Предлагаме широка гама от професионални масажи, адаптирани към вашите индивидуални нужди."
                    />
                </AnimateOnScroll>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {previewServices.slice(0, 3).map((service, index) => (
                        <AnimateOnScroll key={service.id} delay={index * 150} direction="up" className="h-full">
                            <ServiceCard service={service} variant="default" className="h-full" />
                        </AnimateOnScroll>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <p className="text-muted-foreground mb-6">
                        Това са само част от нашите услуги. Разполагаме с още терапии и масажи, всяка от които е съобразена с вашите индивидуални нужди.
                    </p>
                    <Button variant="default" size="lg" asChild>
                        <Link href="/services">
                            Вижте всички {services.length} услуги
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </Section>

            {/* ========== HOW IT WORKS ========== */}
            <Section variant="alt">
                <AnimateOnScroll>
                    <SectionHeader
                        subtitle="Лесно и удобно"
                        title="Как да запазите час?"
                        description="Само три прости стъпки ви делят от релаксиращо преживяване."
                    />
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {howItWorks.map((step, index) => (
                        <AnimateOnScroll key={step.step} delay={index * 200} direction="up">
                            <HowItWorksStep
                                step={step}
                                isLast={index === howItWorks.length - 1}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
            </Section>

            {/* ========== TEAM ========== */}
            <TeamSection />

            {/* ========== TESTIMONIALS (SLIDING) ========== */}
            <Section variant="alt">
                <AnimateOnScroll>
                    <SectionHeader
                        subtitle="Отзиви"
                        title="Какво казват нашите клиенти"
                        description="Доверието на нашите клиенти е най-голямата ни награда."
                    />
                </AnimateOnScroll>
                <SlidingTestimonials testimonials={testimonials} />
                <div className="text-center mt-10">
                    <a
                        href={siteConfig.business.links.googleBusiness}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent-foreground transition-colors font-medium"
                    >
                        <Star className="w-5 h-5 text-gold fill-gold" />
                        Прочетете още отзиви в Google
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </Section>

            {/* ========== GALLERY ========== */}
            <Section>
                <AnimateOnScroll>
                    <SectionHeader
                        subtitle="Галерия"
                        title="Нашето студио"
                        description="Уютна обстановка за пълна релаксация в сърцето на Русе."
                    />
                </AnimateOnScroll>
                <GalleryGrid images={galleryImageAssets.slice(0, 6)} />
                <div className="text-center mt-10">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/gallery">
                            Вижте цялата галерия
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </Section>

            {/* ========== LOCATION & CONTACT ========== */}
            <Section variant="alt">
                <AnimateOnScroll>
                    <SectionHeader
                        subtitle="Локация"
                        title="Къде да ни намерите"
                        description="Лесен достъп и удобно паркиране в центъра на Русе."
                    />
                </AnimateOnScroll>
                <AnimateOnScroll delay={200}>
                    <ContactPreview />
                </AnimateOnScroll>
            </Section>

            {/* ========== FAQ ========== */}
            <Section>
                <AnimateOnScroll>
                    <SectionHeader
                        subtitle="Въпроси"
                        title="Често задавани въпроси"
                        description="Отговори на най-често срещаните въпроси за нашите услуги."
                    />
                </AnimateOnScroll>
                <AnimateOnScroll delay={200}>
                    <div className="max-w-3xl mx-auto">
                        <FAQAccordion items={faqs} />
                    </div>
                </AnimateOnScroll>
            </Section>

            {/* ========== CTA SECTION ========== */}
            <Section variant="alt">
                <AnimateOnScroll direction="none">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                        Готови ли сте да се отпуснете?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Запазете час сега и се насладете на професионална грижа за вашето тяло и дух.
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

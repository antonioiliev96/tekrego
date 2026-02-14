import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/siteContent";
import { serviceMetadata } from "@/lib/metadata";
import {
    Phone,
    ArrowLeft,
    Check,
    Heart,
    Sparkles,
    Shield,
    Users,
    Sun,
    Leaf,
    Brain,
} from "lucide-react";

export const metadata: Metadata = serviceMetadata(
    "Юмейхо терапия",
    "Юмейхо (Yumeiho Therapy) е холистична японска терапия за баланс на таза и тялото. Научете повече за философията, ползите и за кого е подходяща."
);

const philosophyPoints = [
    {
        icon: Sun,
        title: "Центровка на таза",
        text: "Тазът е основата на тялото. Когато е изместен, цялата структура страда \u2013 от гръбначния стълб до вътрешните органи.",
    },
    {
        icon: Leaf,
        title: "Холистичен подход",
        text: "Юмейхо не лекува симптоми \u2013 тя търси и адресира първопричината. Работи с тялото като цяло.",
    },
    {
        icon: Brain,
        title: "Енергиен баланс",
        text: "Чрез акупресура и пасивна мобилизация се възстановява свободното движение на енергията в тялото.",
    },
];

const benefits = [
    "Балансиране на таза и гръбначния стълб",
    "Облекчаване на болки в гърба, кръста и ставите",
    "Подобряване функцията на вътрешните органи",
    "Възстановяване на енергийния поток",
    "Подобряване на стойката и движението",
    "Намаляване на мускулното напрежение",
    "По-добър сън и обща жизненост",
    "Подпомагане на емоционалния баланс",
];

const suitableForCategories = [
    {
        icon: Heart,
        title: "Хронични болки",
        items: ["Болки в гърба и кръста", "Ставни проблеми", "Главоболие от напрежение"],
    },
    {
        icon: Users,
        title: "Проблеми с позата",
        items: ["Лоша стойка (сколиоза, кифоза)", "Заседнал начин на живот", "Мускулен дисбаланс"],
    },
    {
        icon: Sparkles,
        title: "Общо здраве",
        items: ["Нужда от детоксикация", "Хронична умора", "Емоционално напрежение"],
    },
    {
        icon: Shield,
        title: "Профилактика",
        items: ["Превенция на проблеми", "Поддържане на баланс", "Подобряване на имунитета"],
    },
];

const practiceDetails = [
    {
        question: "Как протича сеансът?",
        answer:
            "Юмейхо терапията се провежда на специална постелка на пода. Пациентът е облечен в удобни дрехи. Терапевтът използва ръце, лакти и колене за прилагане на натиск и мобилизация. Сеансът продължава около 60 минути.",
    },
    {
        question: "Колко сеанса са необходими?",
        answer:
            "Броят на сеансите зависи от индивидуалното състояние. При хронични проблеми обикновено се препоръчват 5\u201310 сеанса с постепенно намаляваща честота. За профилактика \u2013 1\u20132 пъти месечно.",
    },
    {
        question: "Има ли противопоказания?",
        answer:
            "Юмейхо не се препоръчва при бременност, остеопороза, скорошни операции или фрактури, онкологични заболявания в активна фаза и остри възпалителни процеси. Винаги информирайте терапевта за здравословното си състояние.",
    },
];

export default function YumeihoPage() {
    return (
        <>
            {/* Hero */}
            <PageHeader
                subtitle="Юмейхо"
                title="Юмейхо терапия"
                description="Холистична японска терапия, създадена от Масайуки Сайонджи. Съчетава акупресура, пасивна мобилизация и енергийна центровка за дълбоко възстановяване на баланса в тялото."
            />

            {/* Back link */}
            <Section className="!pt-6 !pb-0">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Всички услуги
                </Link>
            </Section>

            {/* Philosophy Section */}
            <Section>
                <AnimateOnScroll direction="none">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                            Философия
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            В основата на Юмейхо стои разбирането, че тазът е фундаментът на тялото.
                            Когато този фундамент е в баланс, цялото тяло функционира хармонично.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {philosophyPoints.map((point, index) => (
                        <AnimateOnScroll key={point.title} direction="up" delay={index * 150}>
                            <div className="relative bg-card rounded-2xl p-8 border border-border/50 shadow-card text-center group hover:border-primary/30 transition-all duration-300">
                                {/* Decorative gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-t-2xl" />

                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <point.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {point.text}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Section>

            {/* Benefits Section */}
            <Section variant="alt">
                <div className="max-w-5xl mx-auto">
                    <AnimateOnScroll direction="none">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                                Ползи от терапията
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Юмейхо въздейства на множество нива \u2013 от физическото до емоционалното.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <AnimateOnScroll
                                key={benefit}
                                direction={index % 2 === 0 ? "left" : "right"}
                                delay={index * 80}
                            >
                                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <p className="text-foreground font-medium">{benefit}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Suitable For Section */}
            <Section>
                <div className="max-w-5xl mx-auto">
                    <AnimateOnScroll direction="none">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                                За кого е подходяща?
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Юмейхо терапията е подходяща за широк кръг от хора и състояния.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {suitableForCategories.map((category, index) => (
                            <AnimateOnScroll key={category.title} direction="up" delay={index * 100}>
                                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card h-full hover:border-primary/30 transition-all duration-300">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                                        <category.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {category.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-2 text-sm text-muted-foreground"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Practice Details / FAQ */}
            <Section variant="alt">
                <div className="max-w-3xl mx-auto">
                    <AnimateOnScroll direction="none">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                                Как протича терапията?
                            </h2>
                        </div>
                    </AnimateOnScroll>

                    <div className="space-y-6">
                        {practiceDetails.map((detail, index) => (
                            <AnimateOnScroll key={detail.question} direction="up" delay={index * 100}>
                                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
                                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                                        {detail.question}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {detail.answer}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <AnimateOnScroll direction="none">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                            Готови ли сте да опитате?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Запазете час за Юмейхо терапия и направете първата стъпка към баланса на вашето тяло.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="cta" size="lg" asChild>
                                <a href={`tel:${siteConfig.business.phoneClean}`}>
                                    <Phone className="w-5 h-5 mr-2" />
                                    Запази час
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/services">Виж всички услуги</Link>
                            </Button>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Section>
        </>
    );
}

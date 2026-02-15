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
    Activity,
    Leaf,
    Brain,
    Heart,
    Sparkles,
    Users,
} from "lucide-react";

export const metadata: Metadata = serviceMetadata(
    "Биорезонансна диагностика",
    "Съвременен неинвазивен метод за цялостна картина на състоянието на организма. Холистичен подход към здравето в ТеКрего."
);

const whatIncludes = [
    "Оценка на състоянието на органи и системи",
    "Анализ на чревен микробиом и паразитно натоварване",
    "Проверка за хранителни непоносимости",
    "Изследване на витаминно-минерален статус",
    "Откриване на токсични и тежкометални натоварвания",
    "Емоционален и психосоматичен профил",
    "Индивидуални препоръки за хранене, добавки и билки",
];

const philosophyPoints = [
    {
        icon: Activity,
        title: "Информационна медицина",
        text: "Биорезонансът работи на честотно ниво, анализирайки енергийните характеристики на органи и системи.",
    },
    {
        icon: Brain,
        title: "Холистичен анализ",
        text: "Не търсим само симптоми – виждаме цялостната картина на организма на физическо, емоционално и енергийно ниво.",
    },
    {
        icon: Heart,
        title: "Превантивен подход",
        text: "Откриваме функционални дисбаланси преди те да се проявят клинично, давайки възможност за ранна интервенция.",
    },
];

const suitableForCategories = [
    {
        icon: Heart,
        title: "Хронични състояния",
        items: [
            "Хронични здравословни проблеми",
            "Алергии и непоносимости",
            "Хранителни дефицити",
        ],
    },
    {
        icon: Sparkles,
        title: "Превантивна грижа",
        items: [
            "Желание за превантивна диагностика",
            "Проверка на общото здраве",
            "Оптимизиране на хранителния режим",
        ],
    },
    {
        icon: Leaf,
        title: "Детоксикация",
        items: [
            "Токсични натоварвания",
            "Тежкометално натрупване",
            "Нужда от пречистване",
        ],
    },
    {
        icon: Users,
        title: "Индивидуален подход",
        items: [
            "Персонализирани препоръки",
            "Холистична оценка",
            "Дългосрочна стратегия",
        ],
    },
];

export default function BioresonancePage() {
    return (
        <>
            {/* Hero */}
            <PageHeader
                subtitle="Биорезонансна диагностика"
                title="Холистичен анализ"
                description="В ТеКрего работим с човека като единна система – тяло, психика, енергия и съзнание. Биорезонансната диагностика е съвременен неинвазивен метод, който ни позволява да получим цялостна картина за състоянието на организма на информационно и функционално ниво."
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
                            Как работи биорезонансът?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Чрез специализирана апаратура се анализират честотните характеристики на органи, системи, 
                            микроорганизми, хранителни непоносимости, токсични натоварвания и емоционални блокажи. 
                            Методът не поставя медицинска диагноза, а подпомага ориентацията към функционални дисбаланси 
                            и ранни отклонения, преди те да се проявят клинично.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {philosophyPoints.map((point, index) => (
                        <AnimateOnScroll key={point.title} direction="up" delay={index * 150}>
                            <div className="relative bg-card rounded-2xl p-8 border border-border/50 shadow-card text-center group hover:border-primary/30 transition-all duration-300">
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

            {/* What Includes Section */}
            <Section variant="alt">
                <div className="max-w-5xl mx-auto">
                    <AnimateOnScroll direction="none">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                                Какво включва работата с биорезонанс?
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Цялостен анализ на организма на множество нива.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {whatIncludes.map((item, index) => (
                            <AnimateOnScroll
                                key={item}
                                direction={index % 2 === 0 ? "left" : "right"}
                                delay={index * 80}
                            >
                                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <p className="text-foreground font-medium">{item}</p>
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
                                Биорезонансната диагностика е подходяща за всеки, който търси дълбоко разбиране на своето здраве.
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

            {/* Holistic Approach */}
            <Section variant="alt">
                <div className="max-w-3xl mx-auto">
                    <AnimateOnScroll direction="none">
                        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-card">
                            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
                                Холистичен подход в ТеКрего
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                В моята практика биорезонансът не е самостоятелна процедура, а част от цялостен холистичен подход. 
                                Данните от анализа се интегрират с Юмейхо терапия, работа по меридиани, психосоматичен анализ и 
                                индивидуални протоколи за възстановяване.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Вярвам, че всяко тяло носи собствена интелигентност. Когато се научим да слушаме неговия език – 
                                чрез честота, структура и реакция – започва истинската грижа за себе си. Биорезонансът в ТеКрего 
                                е инструмент за осъзнаване, профилактика и подкрепа по пътя към баланс и вътрешна хармония.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <AnimateOnScroll direction="none">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                            Готови ли сте да разберете тялото си по-добре?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Запазете час за биорезонансна диагностика и започнете пътя към дълбоко разбиране на вашето здраве.
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

import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/content/siteContent";

export const metadata: Metadata = {
    title: "Общи условия",
    description: `Общи условия за ползване на услугите на ${siteConfig.business.name}. Политика за записване и отмяна.`,
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <>
            {/* Page Header */}
            <Section variant="alt" className="py-12 md:py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        Общи условия
                    </h1>
                    <p className="text-muted-foreground">
                        Последна актуализация: Февруари 2024
                    </p>
                </div>
            </Section>

            {/* Content */}
            <Section className="py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                1. Общи положения
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Тези общи условия уреждат отношенията между {siteConfig.business.name} ("Доставчик")
                                и клиентите ("Клиент"), които използват масажни услуги в нашето студио.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                2. Записване за час
                            </h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Часовете се записват по телефон, Viber или WhatsApp.</li>
                                <li>Препоръчително е записването да се извършва поне 24 часа предварително.</li>
                                <li>Записаният час се счита за потвърден след устно или писмено потвърждение от страна на Доставчика.</li>
                                <li>При първо посещение се препоръчва да пристигнете 10 минути по-рано.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                3. Отмяна и неявяване
                            </h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Безплатна отмяна е възможна до 24 часа преди записания час.</li>
                                <li>При отмяна в рамките на 24 часа преди часа може да бъде начислена такса.</li>
                                <li>При неявяване без предупреждение може да бъде начислена такса.</li>
                                <li>В извънредни случаи (спешност, болест) се прилага индивидуален подход.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                4. Противопоказания
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Клиентът е длъжен да информира терапевта за всякакви здравословни проблеми преди сеанса.
                                Масажът не се препоръчва при:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Висока температура или остри инфекции</li>
                                <li>Кожни заболявания или открити рани</li>
                                <li>Тромбоза или тежки сърдечно-съдови заболявания</li>
                                <li>Бременност (без консултация с лекар)</li>
                                <li>Скорошни операции или травми</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                5. Плащане
                            </h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Плащането се извършва след приключване на сеанса.</li>
                                <li>Приемаме плащане в брой и банков превод.</li>
                                <li>Подаръчните ваучери се заплащат предварително.</li>
                                <li>Цените могат да бъдат променяни с предварително уведомление.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                6. Отговорност
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Доставчикът не носи отговорност за здравословни проблеми, настъпили в резултат на
                                неразкрита от Клиента информация за противопоказания. Всички услуги се предоставят
                                съгласно най-добрите практики в областта на масажната терапия.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                7. Поверителност
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Вашите лични данни се обработват съгласно нашата <Link href="/privacy" className="text-primary hover:text-accent">Политика за поверителност</Link>.
                                Цялата здравна информация, споделена по време на консултация, се третира като поверителна.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                8. Контакт
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                За въпроси относно тези условия, моля свържете се с нас:<br />
                                Телефон: {siteConfig.business.phone}<br />
                                Имейл: {siteConfig.business.email}<br />
                                Адрес: {siteConfig.business.address.full}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

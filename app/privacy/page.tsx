import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/content/siteContent";

export const metadata: Metadata = {
    title: "Политика за поверителност",
    description: `Политика за поверителност на ${siteConfig.business.name}. Как събираме и обработваме лични данни.`,
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <>
            {/* Page Header */}
            <Section variant="alt" className="py-12 md:py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        Политика за поверителност
                    </h1>
                    <p className="text-muted-foreground">
                        Последна актуализация: Февруари 2024
                    </p>
                </div>
            </Section>

            {/* Content */}
            <Section className="py-12">
                <div className="max-w-3xl mx-auto prose prose-stone">
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                1. Въведение
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {siteConfig.business.name} ("ние", "нас", "нашият") се ангажира да защитава поверителността
                                на вашите лични данни. Тази политика описва как събираме, използваме и защитаваме информацията,
                                която ни предоставяте.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                2. Какви данни събираме
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Можем да събираме следната информация:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Име и телефонен номер (при записване за час)</li>
                                <li>Имейл адрес (ако ни пишете)</li>
                                <li>Здравна информация, свързана с предоставяне на масажни услуги</li>
                                <li>Информация за посещенията на сайта (чрез бисквитки, ако са активирани)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                3. Как използваме данните
                            </h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>За да организираме и управляваме вашите часове</li>
                                <li>За да предоставим безопасни и подходящи услуги</li>
                                <li>За да ви информираме за промени или специални оферти (само с ваше съгласие)</li>
                                <li>За подобряване на нашите услуги</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                4. Бисквитки
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Този уебсайт може да използва бисквитки за подобряване на потребителското изживяване.
                                Бисквитките са малки файлове, съхранявани на вашето устройство. Можете да ги деактивирате
                                от настройките на браузъра си, но това може да повлияе на функционалността на сайта.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                5. Споделяне на данни
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Не продаваме, обменяме или прехвърляме вашите лични данни на трети страни без вашето съгласие,
                                освен когато това се изисква по закон.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                6. Вашите права
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Съгласно GDPR, имате право:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Да получите достъп до личните си данни</li>
                                <li>Да поискате корекция на неточни данни</li>
                                <li>Да поискате изтриване на данните си</li>
                                <li>Да оттеглите съгласието си по всяко време</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                                7. Контакт
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                За въпроси относно тази политика или обработката на вашите данни,
                                моля свържете се с нас на:<br />
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

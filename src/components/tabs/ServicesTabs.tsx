"use client"

import {useTranslations} from "next-intl";
import {ReactNode, useState} from "react";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/shadcn_ui/tabs";
import {CURRENCY_TABS} from "@/const";
import {services} from "@/portfolioDataLists";
import {CurrencyType, ServiceData} from "@/types";
import {ServiceCard} from "@/components/cards/ServiceCard";
import {cn} from "@/utils";


export function ServicesTabs() {
    const [currencyTabValue, setCurrencyTabValue] = useState<CurrencyType>("rub")

    const t = useTranslations()

    return (
        <Tabs
            defaultValue={currencyTabValue}
            onValueChange={setCurrencyTabValue}
            className={"gap-4 flex-col"}
            orientation={"horizontal"}
        >
            <TabsList className={"p-1 bg-[#141414] rounded-[var(--border-15)]"}>
                <TabsTrigger
                    value={CURRENCY_TABS.rub}
                    className={"text-nowrap rounded-[var(--border-15)] py-1.25 px-3.5"}
                    title={t("services_tabs.trigger.rub.hover_text")}
                >
                    {t("services_tabs.trigger.rub.text")}
                </TabsTrigger>
                <TabsTrigger
                    value={CURRENCY_TABS.usd}
                    className={"text-nowrap rounded-[var(--border-15)] py-1.25 px-3.5"}
                    title={t("services_tabs.trigger.usd.hover_text")}
                >
                    {t("services_tabs.trigger.usd.text")}
                </TabsTrigger>
            </TabsList>
            {Object.keys(CURRENCY_TABS).map((s: string) => (
                <TabsContent value={s} className={""}>
                    <ul className={cn(
                        "grid gap-6.25 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]",
                        "max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
                        "max-sm:grid-cols-[repeat(auto-fit,minmax(230px,1fr))]"
                    )}>
                        {services.map((service: ServiceData, i: number): ReactNode => (
                            <li key={`service-${i}`}>
                                <ServiceCard
                                    className={"p-4 h-full"}
                                    spotlightColor={service.colorName}
                                    titleTrans={t(service.title)}
                                    titleIconColor={service.colorName}
                                    icon={<service.icon width={20} height={20} />}
                                    price={service.price[s as CurrencyType]}
                                    description={t(service.description)}
                                />
                            </li>
                        ))}
                    </ul>
                </TabsContent>
            ))}
        </Tabs>
    )
}

import {type ReactNode} from "react";
import {useTranslations} from "next-intl";

import {Title, TitleIconColor} from "@/components/Title";
import {SpotlightCard} from "@/components/cards/SpotlightCard";
import {type Price} from "@/types";
import {cn, setFluidTextSizeStyle} from "@/utils";


interface ServiceCardProps {
    icon: ReactNode
    titleTrans: ReactNode
    price: Price
    spotlightColor: string
    description: string
    className?: string
    titleClassName?: string
    titleIconColor?: TitleIconColor
}

export function ServiceCard(
    {
        className="",
        price,
        description,
        icon,
        spotlightColor,
        titleTrans,
        titleClassName,
        titleIconColor
    }: ServiceCardProps)
{
    const t = useTranslations()

    const formatter = new Intl.NumberFormat("default", {
        style: "currency",
        currency: price.type,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })

    return (
        <SpotlightCard
            className={cn(
                className,
                "rounded-[var(--border-20)] border-[#1e1e1e] border-2 bg-[rgba(14,14,14,0.6)]"
            )}
            spotlightColor={spotlightColor}
        >
            <div className={"flex flex-wrap gap-2.5 justify-between items-center mb-3"}>
                <Title
                    icon={icon}
                    iconColor={titleIconColor}
                    className={cn(titleClassName, "inline-flex gap-1.5")}
                    style={setFluidTextSizeStyle(20, 18)}
                    headingLevel={3}
                >
                    {titleTrans}
                </Title>
                <span className={"glass px-3.5 py-1 font-semibold"} style={setFluidTextSizeStyle(16, 15)}>
                    {t.rich("service.price.text", {
                        price: formatter.format(price.amount),
                        pale_blue: (chunk) => (
                            <span className={"pale-blue-text"}>{chunk}</span>
                        )
                    })}
                </span>
            </div>
            <p className={"description-text"} style={setFluidTextSizeStyle(16, 14)}>
                {description}
            </p>
        </SpotlightCard>
    )
}


import {JSX} from "react";

import {technologyConfig, LANGUAGES} from "@/const";
import {ButtonVariant} from "@/components/LinkButtonTemp";
import {BadgeVariant} from "@/components/cards/ProjectCard";
import {projects} from "@/portfolioDataLists";
import {TitleIconColor} from "@/components/Title";
import {IconProps} from "@/props";


export type IconPosition = "right" | "left"
export type btnStyleVariant = "white-bg" | "transparent" | "telegram"

export type TechnologyVariant = keyof typeof technologyConfig | string;

export type ProjectID = typeof projects[number]["id"]
export type LangID = typeof LANGUAGES[number]

export const CURRENCIES_CONFIG = {
    rub: { symbol: "₽" },
    usd: { symbol: "$" },
} as const

export type CurrencyType = keyof typeof CURRENCIES_CONFIG

export type Currency = {
    symbol: string,
}

// export const CURRENCIES: Record<CurrencyType, Currency> = CURRENCIES_CONFIG

export type Price = {
    amount: number
    type: CurrencyType
}

export type ServiceData = {
    title: string
    icon: ({}:IconProps) => JSX.Element
    price: Record<CurrencyType, Price>
    colorName: TitleIconColor
    description: string
}

export type ProjectData = {
    type: "other" | "website" | "bot"
    id: string
    title: string
    description: string
    badge: BadgeVariant
    baseStack: TechnologyVariant[]
    otherStack?: TechnologyVariant[] | undefined,
    buttons?: {
        variant: ButtonVariant
        href: string
    }[] | undefined
}

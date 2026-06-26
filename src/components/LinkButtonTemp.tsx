import {ComponentProps} from "react";
import {useTranslations} from "next-intl";

import {TelegramIcon} from "@/components/icons/TelegramIcon";
import {GitHubIcon} from "@/components/icons/GitHubIcon";
import {ModrinthIcon} from "@/components/icons/ModrinthIcon";
import {BookOpenIcon} from "@/components/icons/BookOpenIcon";
import {RusRubleIcon} from "@/components/icons/RusRubleIcon";
import {LinkButton} from "@/components/LinkButton";
import {PyPIIcon} from "@/components/icons/PyPIIcon";
import {KworkLogo} from "@/components/icons/KworkLogo";
import type {btnStyleVariant, IconPosition} from "@/types.ts";
import {Link} from "@/i18n/navigations";


export type ButtonVariant = keyof typeof buttonTempsConfig

const buttonTempsConfig = {
    github: {textTransKey: "button.github.text", hoverTextTransKey: "button.github.hover_text", icon: GitHubIcon},
    modrinth: {textTransKey: "button.modrinth.text", hoverTextTransKey: "button.modrinth.hover_text", icon: ModrinthIcon},
    telegram: {textTransKey: "button.telegram.text", hoverTextTransKey: "button.telegram.hover_text", icon: TelegramIcon},
    buy: {textTransKey: "button.buy.text", hoverTextTransKey: "button.buy.hover_text", icon: RusRubleIcon},
    readme: {textTransKey: "button.readme.text", hoverTextTransKey: "button.readme.hover_text", icon: BookOpenIcon},
    pypi: {textTransKey: "button.pypi.text", hoverTextTransKey: "button.pypi.hover_text", icon: PyPIIcon},
    kwork: {textTransKey: "button.kwork.text", hoverTextTransKey: "button.kwork.hover_text", icon: KworkLogo},
}

interface LinkButtonTempProps extends ComponentProps<typeof Link> {
    styleVariant?: btnStyleVariant
    variant: ButtonVariant
    iconWidth: number
    iconHeight: number
    iconColor?: string | undefined
    iconPos?: IconPosition | undefined
    text?: string | undefined
}

export function LinkButtonTemp(
    {
        styleVariant="transparent",
        variant,
        iconHeight,
        iconWidth,
        iconColor="currentColor",
        iconPos="left",
        text,
        className,
        title,
        ...props
    }: LinkButtonTempProps) {
    const t = useTranslations()

    const btnConfig = buttonTempsConfig[variant]

    if (!btnConfig) {
        console.warn(`LinkButtonTemp: неизвестный variation "${variant}"`)
        return null
    }

    return (
        <LinkButton
            styleVariant={styleVariant}
            className={className}
            icon={<btnConfig.icon width={iconWidth} height={iconHeight} iconColor={iconColor} />}
            iconPos={iconPos}
            title={title || t(btnConfig.hoverTextTransKey)}
            {...props}
        >
            {text ? text : t(btnConfig.textTransKey)}
        </LinkButton>
    )
}

import React, {type ReactNode} from "react";
import {useTranslations} from "next-intl";

import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/shadcn_ui/hover-card";
import type {TechnologyVariant} from "@/types";
import {TechnologyTemp} from "@/components/TechnologyTemp";
import {cn, setFluidTextSizeStyle} from "@/utils";
import {Title} from "@/components/Title";


interface ProjectCardProps {
    titleText: string
    description: string
    projectBadge: ReactNode
    className?: string | undefined
}

export function ProjectCard({children, projectBadge, className = "", titleText, description}: React.PropsWithChildren<ProjectCardProps>) {
    return (
        <div className={cn(className, `project-card h-full`)}>
            <div className={"project-card__content flex flex-col p-3 w-fill h-full"}>
                <div className={"mb-auto"}>
                    <div className={"project-card__head flex flex-wrap items-center mb-2 gap-2.5"}>
                        <Title headingLevel={3} style={setFluidTextSizeStyle(21, 20)}>
                            {titleText}
                        </Title>
                        {projectBadge}
                    </div>
                    <p className={"fluid-text description-text"} style={setFluidTextSizeStyle(15, 14)}>
                        {description}
                    </p>
                </div>
                <div className={"mt-3.75"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const badgesData = {
    library: { translateKey: "project_card.badge.library.text", style: "red-text" },
    telegram_bot: { translateKey: "project_card.badge.telegram_bot.text", style: "telegram-text" },
    discord_bot: { translateKey: "project_card.badge.discord_bot.text", style: "discord-text" },
    vk_bot: { translateKey: "project_card.badge.vk_bot.text", style: "vk-text" },
    site_design: { translateKey: "project_card.badge.site_design.text", style: "" },
    website: { translateKey: "project_card.badge.website.text", style: "pale-blue-text" },
}

export type BadgeVariant = keyof typeof badgesData

interface ProjectBadgeProps {
    variant: BadgeVariant
}
export function ProjectBadge({variant}: ProjectBadgeProps) {
    const badge = variant ? badgesData[variant] : null

    const t = useTranslations()

    if (badge) {
        return (
            <span
                className={cn("glass fluid-text z-[99] font-bold py-0.5 px-1.75", badge.style)}
                style={setFluidTextSizeStyle(13, 12)}
            >
                {t(badge.translateKey)}
            </span>
        )
    }
}

export function ProjectCardButtonList({children, ...props}: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <ul className={"flex flex-wrap gap-2.5"} {...props}>
            {children}
        </ul>
    )
}

export function ProjectCardListItem({children, ...props}: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <li {...props}>
            {children}
        </li>
    )
}

export function ProjectCardStack({children, ...props}: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <ul className={"flex flex-wrap gap-1.75"} {...props}>
            {children}
        </ul>
    )
}

interface ProjectCardOtherStackProps {
    technologyList: TechnologyVariant[]
}
export function ProjectCardOtherStack({technologyList}: ProjectCardOtherStackProps) {
    return (
        <HoverCard>
            <HoverCardTrigger
                className={"py-0.75 px-2.25 border border-[#2d2d2d] rounded-[var(--border-8)] button-hover-content"}
                style={setFluidTextSizeStyle(12, 11)}
            >
                {`+${technologyList.length}`}
            </HoverCardTrigger>
            <HoverCardContent side={"top"} className={"p-1.25 gap-1.5 max-w-62.5 flex flex-wrap flex-row"}>
                {technologyList.map((technology: string) => (
                    <TechnologyTemp
                        key={`project-other-stack-technology-${technology}`}
                        variant={technology as TechnologyVariant}
                        name={technology}
                        className={"items-center gap-1.5 py-0.75 px-3"}
                        style={setFluidTextSizeStyle(12, 10)}
                        iconHeight={18}
                        iconWidth={18}
                    />
                ))}
            </HoverCardContent>
        </HoverCard>
    )
}

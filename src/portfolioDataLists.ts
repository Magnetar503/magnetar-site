import type {ServiceData, ProjectData, TechnologyVariant} from "@/types";
import {TelegramIcon} from "@/components/icons/TelegramIcon";
import {DiscordIcon} from "@/components/icons/DiscordIcon";
import {RulerIcon} from "@/components/icons/RulerIcon";
import {InternetIcon} from "@/components/icons/InternetIcon";


export const backendSkills: TechnologyVariant[] = [
    "python",
    "fastapi",
    "pydantic",
    "aiogram",
    "disnake",
    "sqlalchemy",
    "alembic",
]

export const frontendSkills: TechnologyVariant[] = [
    "typescript",
    "reactjs",
    "nextjs",
    "i18next",
    "scss",
    "tailwind",
    "bem_methodology",
    "html",
    "css",
    "javascript",
]

export const CICDSkills: TechnologyVariant[] = [
    "git",
    "github",
    "docker",
]

// export const AIMLSkills: SkillData[] = [
//
// ]

export const services: ServiceData[] = [
    {
        title: "service.telegram_bot.title.text",
        description: "service.telegram_bot.description.text",
        colorName: "telegram",
        price: {
            rub: {amount: 2500, type: "rub"},
            usd: {amount: 40, type: "usd"},
        },
        icon: TelegramIcon,
    },
    {
        title: "service.site_design.title.text",
        description: "service.site_design.description.text",
        colorName: "purple",
        price: {
            rub: {amount: 2400, type: "rub"},
            usd: {amount: 39, type: "usd"},
        },
        icon: RulerIcon,
    },
    {
        title: "service.site.title.text",
        description: "service.site.description.text",
        colorName: "red",
        price: {
            rub: {amount: 3800, type: "rub"},
            usd: {amount: 56, type: "usd"},
        },
        icon: InternetIcon,
    },
    {
        title: "service.discord_bot.title.text",
        description: "service.discord_bot.description.text",
        colorName: "discord",
        price: {
            rub: {amount: 2500, type: "rub"},
            usd: {amount: 40, type: "usd"},
        },
        icon: DiscordIcon,
    },
    // {
    //     title: "service.vk_bot.title.text",
    //     colorName: "vk",
    //     price: {
    //         rub: {amount: 2500, type: "rub"},
    //         usd: {amount: 40, type: "usd"},
    //     },
    //     icon: <VKLogoIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
    //     description: "service.vk_bot.description.text",
    // },
    // {
    //     title: "service.max_bot.title.text",
    //     colorName: "max",
    //     price: {
    //         rub: {amount: 2500, type: "rub"},
    //         usd: {amount: 40, type: "usd"},
    //     },
    //     icon: <MaxIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
    //     description: "service.max_bot.description.text",
    // },
]

export const projects: ProjectData[] = [
    {
        type: "bot",
        id: "star_channel",
        title: "project_card.star_channel.title.text",
        description: "project_card.star_channel.description.text",
        badge: "telegram_bot",
        baseStack: [
            "python",
            "aiogram",
            "sqlalchemy",
            "sqlite",
            "apscheduler",
        ],
        buttons: [
            {
                variant: "readme",
                href: `/project/star_channel`
            },
        ]
    },
    {
        type: "bot",
        id: "skylightservices_bot",
        title: "project_card.skylightservices_bot.title.text",
        description: "project_card.skylightservices_bot.description.text",
        badge: "discord_bot",
        baseStack: [
            "python",
            "disnake",
            "sqlalchemy",
            "sqlite",
        ],
        buttons: [
            {
                variant: "readme",
                href: `/project/skylightservices_bot`
            },
        ]
    },
    {
        type: "website",
        id: "mysite",
        title: "project_card.mysite.title.text",
        description: "project_card.mysite.description.text",
        badge: "website",
        baseStack: [
            "nextjs",
            "typescript",
            "scss",
            "tailwind",
            "zustand",
            "next-intl",
        ],
        otherStack: [
            "shadcn-ui",
        ],
        buttons: [
            {
                variant: "readme",
                href: `/project/mysite`
            },
        ],
    },
]




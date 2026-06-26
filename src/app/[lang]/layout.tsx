import React from "react"
import {notFound} from "next/navigation"
import {Metadata, Viewport} from "next"
import {hasLocale, NextIntlClientProvider} from "next-intl"
import {getTranslations, setRequestLocale} from "next-intl/server";

import {Header} from "@/components/header/Header";
import {Footer} from "@/components/Footer";
import {BurgerMenuDrawer} from "@/components/BurgerMenuDrawer";
import {routing} from "@/i18n/routing";
import {BASE_SITE_URL, LINK_START, SUPPORTED_LANGUAGES} from "@/const";


export function generateStaticParams() {
    return routing.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params
    setRequestLocale(lang)
    const t = await getTranslations()
    const title = t("metadata.title")
    const description = t("metadata.description")

    return {
        metadataBase: BASE_SITE_URL,
        title: title,
        description: description,
        alternates: {
            canonical: BASE_SITE_URL
        },
        openGraph: {
            url: BASE_SITE_URL,
            title: title,
            description: description,
            siteName: "Magnetar Dev",
            locale: lang === SUPPORTED_LANGUAGES.RUSSIAN_PRE_REVOLUTIONARY ? "ru" : lang,
            type: "website",
            images: [
                {
                    url: `/${LINK_START}/img/banner.jpg`,
                    height: 360,
                    width: 640
                }
            ]
        },
        twitter: {
            title: title,
            description: description,
            images: [
                {
                    url: `/${LINK_START}/img/avatar.png`,
                    height: 450,
                    width: 450
                }
            ],
            card: "summary"
        },
        icons: {
            icon: [
                { url: `/${LINK_START}/img/avatar_ico.ico`, sizes: "any" },
                { url: `/${LINK_START}/img/avatar32.png`, type: "image/png", sizes: "32x32" },
                { url: `/${LINK_START}/img/avatar192.png`, type: "image/png", sizes: "192x192" },
            ],
            apple: [
                { url: `/${LINK_START}/img/avatar180.png`, sizes: "180x180", type: "image/png" },
            ]
        },
        other: {
            "msapplication-TileColor": "#ea860e",
            "msapplication-TileImage": `/${LINK_START}/img/avatar144.png`,
            "theme-color": "#ea860e",
        },
        manifest: `/${LINK_START}/manifest.webmanifest`,
        keywords: [
            "Telegram",
            "Telegram bot",
            "Telegram бот",
            "Телеграм бот",
            "TMA",
            "TG mini app",
            "Telegram mini app",
            "Мини-приложение в телеграме",

            "Discord",
            "Discord bot",
            "Дискорд бот",
            "Discord бот",

            "Фуллстек разработка",
            "Бекенд разработка",
            "Фронтенд разработка",
            "Разработка сайтов",
            "Разработка веб-приложений",
            "Разработка Discord ботов",
            "Разработка дискорд ботов",
            "Разработка Telegram ботов",
            "Разработка телеграм ботов",
            "Разработка TMA",
            "Разработка TG mini app",
            "Разработка Telegram mini app",
            "Разработка мини-приложений в телеграме",
            "Разработка API",
            "Full-stack development",
            "Backend development",
            "Frontend development",
            "Website development",
            "Web application development",
            "Discord bot development",
            "Discord bot development",
            "Telegram bot development",
            "Telegram bot development",
            "TMA development",
            "Telegram Mini App development",
            "Telegram Mini App development",
            "Telegram mini-app development",
            "API development"
        ],
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "standard"
            }
        }
    }
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: true,
}

interface LayoutProps {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}

export default async function LangLayout({ children, params }: LayoutProps) {
    const { lang } = await params
    if (!hasLocale(routing.locales, lang)) {
        notFound()
    }

    setRequestLocale(lang)

    return (
        <html lang={lang === "rpr" ? "ru" : lang}>
            <body>
                <NextIntlClientProvider
                    // locale={lang}
                    // messages={messages}
                >
                    <div className={"container"} id={"box"}>
                        <Header />
                        <main>
                            {children}
                        </main>
                        <BurgerMenuDrawer className={"visible-tablet"} />
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

"use client"

import {useTranslations} from "next-intl";
import {createElement} from "react";

import {TELEGRAM_LINK, headerLinks} from "@/const";
import {Drawer, DrawerContent, DrawerFooter, DrawerHeader} from "@/components/shadcn_ui/drawer";
import {useBurgerMenuStore} from "@/stores/useBurgerMenuStore";
import {TelegramIcon} from "@/components/icons/TelegramIcon";
import {LinkExternalIcon} from "@/components/icons/LinkExternalIcon";
import {LinkButton} from "@/components/LinkButton";
import {Title} from "@/components/Title";
import {Link} from "@/i18n/navigations";


interface BurgerMenuModalProps {
    className?: string
}

export function BurgerMenuDrawer({className=""}: BurgerMenuModalProps) {
    const {setIsMenuOpen, isMenuOpen} = useBurgerMenuStore();
    const t = useTranslations()

    return (
        <Drawer direction={"right"} onOpenChange={setIsMenuOpen} open={isMenuOpen}>
            <DrawerContent className={className}>
                <DrawerHeader>
                    <Title
                        headingLevel={2}
                        style={{"--fluid-max": 30, "--fluid-min": 22}}
                        title={t("header.title.hover_text")}
                    >
                        {t("header.title.text")}
                    </Title>
                </DrawerHeader>
                {/*<h2*/}
                {/*    className={"burger-menu__title title"}*/}
                {/*    title={t("title.header.hover_text")}*/}
                {/*>*/}
                {/*    {t("title.header.text")}*/}
                {/*</h2>*/}
                <ul className={"flex flex-col gap-2 p-2"}>
                    {headerLinks.map((linkData, i: number) => (
                        <li key={`burger-menu-link-${i}`}>
                            <Link
                                className={"with-icon gap-3.5 fluid-text px-4 py-1.5 hover-click-tap:bg-[var(--gray)] rounded-[var(--border-8)]"}
                                style={{"--fluid-max": 20, "--fluid-min": 18}}
                                href={linkData.link}
                                title={t(linkData.title)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {createElement(linkData.icon, {iconColor: "currentColor", height: "auto", width: "1.5em"})}
                                {/*<linkData.icon iconColor={"currentColor"} height={"auto"} width={"1.5em"} />*/}
                                <span>{t(linkData.text)}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <DrawerFooter>
                    <ul className={"flex flex-col gap-4"}>
                        <li key={`burger-menu-footer-link`}>
                            <LinkButton
                                href={TELEGRAM_LINK}
                                styleVariant={"telegram"}
                                className={"button with-icon p-2.5 justify-between"}
                                style={{"--fluid-max": 20, "--fluid-min": 18}}
                            >
                                <div className={"inline-flex gap-1.5"}>
                                    <TelegramIcon height={20} width={20} iconColor={"currentColor"} />
                                    <span>Мой Telegram</span>
                                </div>
                                <LinkExternalIcon height={20} width={20} iconColor={"currentColor"} />
                            </LinkButton>
                        </li>
                    </ul>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
import {useTranslations} from "next-intl";

import {headerLinks} from "@/const";
import {HeaderLanguageDropdown} from "@/components/header/HeaderLanguageDropdown";
import {HeaderToggleBurgerDrawerButton} from "@/components/header/HeaderToggleBurgerDrawerButton";
import {Title} from "@/components/Title";
import {Link} from "@/i18n/navigations";
import {cn} from "@/utils";


export function Header() {
    const t = useTranslations()

    return (
        <header className={"sticky top-3 z-10"}>
            <div className={"flex flex-row justify-between items-center"}>
                <Title
                    headingLevel={1}
                    className={"py-1.5 px-5 glass"}
                    style={{"--fluid-max": 22, "--fluid-min": 19}}
                    title={t("header.title.hover_text")}
                >
                    {t("header.title.text")}
                </Title>
                <div className={"inline-flex gap-4 items-center py-1.5 px-5 glass"}>
                    <nav className={"hidden-tablet"}>
                        <ul className={"inline-flex flex-row gap-1"}>
                            {headerLinks.map((linkData, i: number) => (
                                <li className={""} key={`header_link_${i}`}>
                                    <Link
                                        className={cn("header-link gap-2 cursor-pointer py-0.75 px-2.25")}
                                        href={linkData.link}
                                        title={t(linkData.title)}
                                    >
                                        <linkData.icon height={20} width={20} />
                                        <span>{t(linkData.text)}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ul className={"inline-flex gap-2"}>
                        <li className={""}>
                            <HeaderLanguageDropdown />
                        </li>
                        <li className={"visible-tablet"}>
                            <HeaderToggleBurgerDrawerButton />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

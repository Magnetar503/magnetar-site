"use client"

import {useLocale, useTranslations} from "next-intl";

import {LanguageIcon} from "@/components/icons/LanguageIcon";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/shadcn_ui/dropdown-menu";
import {languages} from "@/const";
// import {useRouter, Link} from "@/i18n/navigations";
import {Button} from "@/components/Button";
import {useRouter, usePathname} from "@/i18n/navigations";


export function HeaderLanguageDropdown() {
    const t = useTranslations()

    const currentLocale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const handleChangeLanguage = (newLocale: string) => {
        if (newLocale !== currentLocale) {
            router.replace(pathname, { locale: newLocale })
            router.refresh()
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                data-btn-style={"transparent"}
                className={"button p-1"}
                title={t("header.button.change_language.hover_text")}
            >
                {/*<button*/}
                {/*    className={"header__button button button--transparent"}*/}
                {/*    title={t("button.header.change_language.hover_text")}*/}
                {/*>*/}
                <LanguageIcon height={18} width={18} iconColor={"currentColor"} />
                {/*</button>*/}
            </DropdownMenuTrigger>
            <DropdownMenuContent side={"bottom"} className={"gap-1"}>
                {languages.map((lang, i: number) => (
                    <DropdownMenuItem key={`header-lang-${lang.id}-${i}`}>
                        {/*<Link*/}
                        {/*    href={"/"}*/}
                        {/*    locale={lang.id}*/}
                        {/*    className={"button inline-flex py-1.5 px-2.5 w-full"}*/}
                        {/*    onClick={() => router.replace("/", { locale: lang.id })}*/}
                        {/*>*/}
                        {/*    {lang.name}*/}
                        {/*</Link>*/}
                        <Button
                            onClick={() => handleChangeLanguage(lang.id)}
                            className={"inline-flex py-1.5 px-2.5 w-full"}
                        >
                            {lang.name}
                        </Button>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

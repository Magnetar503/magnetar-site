"use client"

import {useTranslations} from "next-intl";

import {BurgerMenuIcon} from "@/components/icons/BurgerMenuIcon";
import {useBurgerMenuStore} from "@/stores/useBurgerMenuStore";


export function HeaderToggleBurgerDrawerButton() {
    const toggleMenu = useBurgerMenuStore(state => state.toggleMenu);
    const t = useTranslations()

    return (
        <button
            data-btn-style={"transparent"}
            className={"button p-1"}
            title={t("header.button.burger_menu.hover_text")}
            onClick={toggleMenu}
        >
            <BurgerMenuIcon height={18} width={18} iconColor={"currentColor"} />
        </button>
    )
}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {DEFAULT_LANGUAGE, LANGUAGES} from "@/const";
import {LangID} from "@/types";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function setFluidTextSizeStyle(max: number, min: number): {
    "--fluid-min": number,
    "--fluid-max": number
} {
    return {"--fluid-min": min, "--fluid-max": max}
}

export function getLangFromCookies(): string {
    if (typeof window === "undefined") {
        return DEFAULT_LANGUAGE
    }

    const match = document.cookie.match(new RegExp("(^| )NEXT_LOCALE=([^;]+)"))
    const savedLang = match ? match[2] : null

    const finalLang = (savedLang && LANGUAGES.includes(savedLang as LangID))
        ? savedLang
        : DEFAULT_LANGUAGE

    return finalLang
}

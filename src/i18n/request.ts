import {getRequestConfig} from "next-intl/server";
import {hasLocale} from "next-intl";

import {routing} from "@/i18n/routing";


export default getRequestConfig(async ({ locale, requestLocale }) => {
    // const currentLang: string = locale ? locale : routing.defaultLocale

    // const store = await cookies()
    // const currentLang = locale || store.get('locale')?.value || 'ru'

    let currentLang = locale

    if (!currentLang) {
        const requested = await requestLocale;
        currentLang = hasLocale(routing.locales, requested)
            ? requested
            : routing.defaultLocale
    }

    const base = (await import(`./locales/${currentLang}/base.json`)).default
    const main_page = (await import(`./locales/${currentLang}/main_page.json`)).default
    const error_page = (await import(`./locales/${currentLang}/error_page.json`)).default
    const star_channel = (await import(`./locales/${currentLang}/star_channel.json`)).default
    const skylightservices_bot = (await import(`./locales/${currentLang}/skylightservices_bot.json`)).default
    const mysite = (await import(`./locales/${currentLang}/mysite.json`)).default

    return {
        locale: currentLang,
        messages: {
            ...base,
            ...error_page,
            ...main_page,
            ...star_channel,
            ...skylightservices_bot,
            ...mysite
        }
    }
})

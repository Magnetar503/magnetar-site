import { defineRouting } from 'next-intl/routing';

import {DEFAULT_LANGUAGE, LANGUAGES} from "@/const";
import {LangID} from "@/types";


export const routing = defineRouting({
    locales: LANGUAGES,
    defaultLocale: DEFAULT_LANGUAGE as LangID,
    localePrefix: "always",
    // localeDetection: true
})

import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";


export default createMiddleware(routing)

export const config = {
    // matcher: [
    //     // '/((?!\\..*|_next).*)',
    //     // '/([\\w-]+)?/users/(.+)'
    //     //
    //     // "/magnetar-site/((?!\\..*|_next).*)",
    //     // "/magnetar-site/([\\w-]+)?/users/(.+)",
    //     '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
    // ]
    matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
}

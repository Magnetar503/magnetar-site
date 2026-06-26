import React, {ComponentProps, ReactNode} from "react";
// import Link from "next/link";
import {Link} from "@/i18n/navigations"

import type {btnStyleVariant, IconPosition} from "@/types";
import {cn} from "@/utils";


interface LinkButtonProps extends ComponentProps<typeof Link> {
    styleVariant?: btnStyleVariant
    iconPos?: IconPosition | undefined
    icon?: ReactNode | undefined
}

export function LinkButton(
    {
        children,
        styleVariant="transparent",
        href,
        className="",
        icon,
        iconPos,
        ...props
    }: React.PropsWithChildren<LinkButtonProps>
) {
    return (
        <Link
            href={href as string}
            className={cn(
                "button",
                icon ? "with-icon" : "",
                className,
            )}
            data-btn-style={styleVariant}
            {...props}
        >
            {iconPos === "left" && icon}
            {children}
            {iconPos === "right" && icon}
        </Link>
    )
}
import React from "react";
import Link from "next/link";
import {cn} from "@/utils";

import {LinkExternalIcon} from "@/components/icons/LinkExternalIcon";


interface HyperLinkProps {
    to: string
    hasIcon?: boolean | undefined
    className?: string | undefined
}

export function HyperLink({children, to, hasIcon=true, className=""}: React.PropsWithChildren<HyperLinkProps>) {
    return (
        <Link href={to} className={cn("underline decoration-solid", hasIcon ? "with-icon" : "", className)}>
            {/*<span className={"hyper-link__inner"}>*/}
            {children}
            {hasIcon && <LinkExternalIcon iconColor={"white"} width={"0.8em"} height={"0.8em"} />}
            {/*</span>*/}
        </Link>
    )
}

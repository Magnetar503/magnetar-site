import type {btnStyleVariant, IconPosition} from "@/types";
import React, {ReactNode} from "react";
import {cn} from "@/utils";


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    styleVariant?: btnStyleVariant
    iconPos?: IconPosition | undefined
    icon?: ReactNode | undefined
}

export function Button(
    {
       children,
       styleVariant="transparent",
       className="",
       icon,
       iconPos,
       ...props
    }: ButtonProps) {
    return (
        <button
            className={cn("button", className)}
            data-btn-style={styleVariant}
            {...props}
        >
            {iconPos === "left" && icon}
            {children}
            {iconPos === "right" && icon}
        </button>
    )
}

import React, {type ReactNode} from "react";

import {cn} from "@/utils";
import {IconPosition} from "@/types";


export type TitleIconColor = "red" | "green" | "purple" | "pale-blue" | "blue" | "skylight-blue" | "pale-orange" | "telegram" | "discord" | "vk" | "max"

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    icon?: ReactNode | undefined
    iconPosition?: IconPosition
    iconColor?: TitleIconColor
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6
}

export function Title(
    {
        children,
        className,
        headingLevel,
        icon,
        iconPosition="left",
        iconColor="red",
        ...props
    }: React.PropsWithChildren<TitleProps>
) {
    const Tag = `h${headingLevel}`
    if (icon !== undefined) {
        return React.createElement(
            Tag,
            {
                className: cn(
                    className,
                    "title fluid-text",
                    icon ? "with-icon items-center" : ""
                ),
                "data-icon-color": iconColor,
                ...props,
            },
            iconPosition === "left"
                ? [icon, React.createElement("span", {}, children)]
                : [React.createElement("span", {}, children), icon]
        )
    }

    return React.createElement(
        Tag,
        {
            className: cn("fluid-text", className),
            ...props,
        },
        children
    )
}

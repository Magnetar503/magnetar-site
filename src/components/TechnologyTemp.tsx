import React from "react";

import {Technology} from "@/components/Technology";
import type {TechnologyVariant} from "@/types";
import {technologyConfig} from "@/const";


interface TechnologyTempProps extends React.HTMLProps<HTMLSpanElement> {
    variant: TechnologyVariant
    name?: string
    iconColor?: string
    iconWidth: number
    iconHeight: number
}

function getTechnology<T extends keyof typeof technologyConfig>(variant: string) {
    if (variant in technologyConfig) {
        return technologyConfig[variant as T]
    }
    return null
}

export function TechnologyTemp({variant, name, iconWidth, iconHeight, iconColor="currentColor", className="", ...props}: TechnologyTempProps) {
    const technology = variant ? getTechnology(variant) : null;

    if (technology) {
        return (
            <Technology
                name={technology.name}
                className={className}
                icon={technology.icon&&<technology.icon width={iconWidth} height={iconHeight} iconColor={iconColor} />}
                variant={variant}
                {...props}
            />
        )
    }

    if (!name) {
        console.warn(`TechnologyTemp: неизвестный variation "${variant}" и не передан name`)
        return null
    }

    return <Technology name={name} className={className} {...props} />
}

import React, {ReactNode} from "react";

import {cn} from "@/utils";
import {TechnologyVariant} from "@/types";


interface TechnologyProps extends React.HTMLProps<HTMLSpanElement> {
    className?: string | undefined
    icon?: ReactNode | undefined
    variant?: TechnologyVariant | undefined
    name: string
}

export function Technology({className = "", name, icon, variant, ...props}: TechnologyProps) {
    return (
       <span
           className={cn("technology fluid-text", icon ? "with-icon" : "", className)}
           title={name}
           data-technology-style={variant}
           {...props}
       >
           {icon ? icon : null}
           {name}
       </span>
    )
}

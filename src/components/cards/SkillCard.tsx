import React, {type ReactNode} from "react";

import {Title, TitleIconColor} from "@/components/Title";
import {cn} from "@/utils";


interface SkillCardProps extends React.PropsWithChildren {
    icon: ReactNode,
    titleTrans: ReactNode
    className?: string
    titleClassName?: string
    titleIconColor?: TitleIconColor
}

export function SkillCard({children, className = "", titleIconColor, titleClassName = "", titleTrans, icon}: SkillCardProps) {
    return (
        <div className={cn(className)}>
            <Title
                icon={icon}
                headingLevel={3}
                className={cn("mb-5 font-semibold gap-2.5", titleClassName)}
                iconColor={titleIconColor}
                style={{"--fluid-max": 25, "--fluid-min": 19}}
            >
                {titleTrans}
            </Title>
            <ul className={"flex flex-wrap gap-2"}>
                {children}
            </ul>
        </div>
    )
}
import React, { useRef } from "react";

import {cn} from "@/utils";


export interface SpotlightCardProps extends React.PropsWithChildren {
    className?: string
    spotlightColor?: string
}

export function SpotlightCard({children, className, spotlightColor = "rgba(255, 255, 255, 0.25)"}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null)

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", `rgba(var(--${spotlightColor}-rgb), 0.2)`);
    }

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} className={cn("card-spotlight", className)}>
            {children}
        </div>
    )
}


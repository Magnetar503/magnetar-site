import type {IconProps} from "@/props";

export function CodeIcon({iconColor="currentColor", ...svgProps}: IconProps) {
    return (
        <svg {...svgProps} viewBox="0 0 24 24" fill="none">
            <path
                stroke={iconColor}
                d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}


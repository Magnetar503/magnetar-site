import type {IconProps} from "@/props";

export function RusRubleIcon({iconColor="currentColor", ...svgProps}: IconProps) {
    return (
        <svg fill={iconColor} {...svgProps} viewBox="0 0 24 24">
            <path
                d="M14,12A5,5,0,0,0,14,2H9A1,1,0,0,0,8,3v7H6a1,1,0,0,0,0,2H8v2H6a1,1,0,0,0,0,2H8v5a1,1,0,0,0,2,0V16h5a1,1,0,0,0,0-2H10V12ZM10,4h4a3,3,0,0,1,0,6H10Z"
            />
        </svg>
    )
}


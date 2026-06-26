import type {TechnologyVariant} from "@/types";
import {TechnologyTemp} from "@/components/TechnologyTemp";
import {Title} from "@/components/Title";
import {cn} from "@/utils";


interface StackCardProps {
    stack: TechnologyVariant[]
    className?: string | undefined
}

export function StackCard({stack, className}: StackCardProps) {
    return (
        <div className={cn("!rounded-[var(--border-8)]", className)}>
            <Title headingLevel={2} className={"mb-2.5"} style={{"--fluid-max": 22, "--fluid-min": 19}}>
                Stack:
            </Title>
            <ul className={"flex flex-wrap gap-2"}>
                {stack.map((technology, i: number) => (
                    <li className={"inline-flex"} key={i}>
                        <TechnologyTemp
                            name={technology}
                            variant={technology as TechnologyVariant}
                            className={"gap-1.25 py-1 px-3.25 fluid-text"}
                            style={{"--fluid-max": 13, "--fluid-min": 12}}
                            iconHeight={18}
                            iconWidth={18}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

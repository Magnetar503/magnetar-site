import {useTranslations} from "next-intl";

import {Title} from "@/components/Title";


export function Footer() {
    const t = useTranslations()

    return (
        <footer className={"z-10 border border-[#282828] bg-[var(--bg-color)] rounded-[var(--border-20)]"}>
            <div className={"flex flex-col gap-5 justify-center items-center text-center py-8 px-2"}>
                <Title
                    headingLevel={4}
                    className={"text-[#5b5b5b]"}
                    style={{"--fluid-max": 17, "--fluid-min": 15}}
                >
                    {t("footer.title.text")}
                </Title>
                <p
                    className={"text-[#323232]"}
                    style={{"--fluid-max": 14, "--fluid-min": 12}}
                >
                    {t("footer.p.text")}
                </p>
            </div>
        </footer>
    )
}

import {Metadata} from "next";
import {setRequestLocale, getTranslations} from "next-intl/server";

import { setFluidTextSizeStyle} from "@/utils";
import {BASE_SITE_URL, CHAPTERS, TELEGRAM_LINK} from "@/const";
import {backendSkills, CICDSkills, frontendSkills} from "@/portfolioDataLists";
import { Title } from "@/components/Title";
import {LinkButtonTemp} from "@/components/LinkButtonTemp";
import {LinkButton} from "@/components/LinkButton";
import {DownArrowIcon} from "@/components/icons/DownArrowIcon";
import {SkillCard} from "@/components/cards/SkillCard";
import {TechnologyTemp} from "@/components/TechnologyTemp";
import {ServerIcon} from "@/components/icons/ServerIcon";
import {MagicBallIcon} from "@/components/icons/MagicBallIcon";
import {CodeMergeIcon} from "@/components/icons/CodeMergeIcon";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon";
import {CodeIcon} from "@/components/icons/CodeIcon";
import {HyperLink} from "@/components/HyperLink";
import {ServicesTabs} from "@/components/tabs/ServicesTabs";
import {FolderIcon} from "@/components/icons/FolderIcon";
import {ProjectsTabs} from "@/components/tabs/ProjectsTabs";


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params
    setRequestLocale(lang)
    const t = await getTranslations("main_page")
    const title = t("metadata.title")
    const description = t("metadata.description")

    return {
        title: title,
        description: description,
        openGraph: {
            url: `${BASE_SITE_URL}/${lang}/home`,
            title: title,
            description: description,
        },
        twitter: {
            title: title,
            description: description,
        },
        alternates: {
            canonical: `${BASE_SITE_URL}/${lang}/home`
        },
    }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    setRequestLocale(lang)

    const t = await getTranslations()

    return (
        <>
            <div className={"page-background"}/>
            <section id={CHAPTERS.WHO_I_AM}>
                <div className={"text-center mx-[15%] py-52 max-lg:py-12 max-lg:mx-0"}>
                    <Title
                        headingLevel={1}
                        className={"mb-10 leading-15"}
                        style={setFluidTextSizeStyle(60, 40)}
                    >
                        {t.rich("about_section.title.text", {
                            "br": () => (<br />),
                            "span": (chunk) => (<span className="skylight-blue-text italic-style">{chunk}</span>),
                        })}
                    </Title>
                    <p className={"text-balance description-text fluid-text"} style={setFluidTextSizeStyle(19, 15)}>
                        {t.rich("about_section.p.text", {
                            "pale_blue": (chunk) => (<span className="pale-blue-text">{chunk}</span>),
                            "python": (chunk) => (<span className="python-text">{chunk}</span>),
                            "fastapi": (chunk) => (<span className="fastapi-text">{chunk}</span>),
                            "pydantic": (chunk) => (<span className="pydantic-text">{chunk}</span>),
                            "typescript": (chunk) => (<span className="typescript-text">{chunk}</span>),
                            "reactjs": (chunk) => (<span className="react-text">{chunk}</span>),
                            "scss": (chunk) => (<span className="scss-text">{chunk}</span>),
                            "bem_methodology": (chunk) => (<span className="bem-methodology-text">{chunk}</span>),
                            "tailwind": (chunk) => (<span className="tailwind-text">{chunk}</span>),
                            "telegram": (chunk) => (<span className="telegram-text">{chunk}</span>),
                            "discord": (chunk) => (<span className="discord-text">{chunk}</span>),
                        })}
                    </p>
                    <ul className={"flex flex-wrap gap-4 justify-center mt-10"}>
                        <li className={""} key={"top-btn-telegram"}>
                            <LinkButtonTemp
                                styleVariant={"white-bg"}
                                variant={"telegram"}
                                text={t("about_section.link.telegram.text")}
                                title={t("about_section.link.telegram.hover_text")}
                                href={TELEGRAM_LINK}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                className={"py-1.5 px-4 gap-2 fluid-text"}
                                style={setFluidTextSizeStyle(15, 14)}
                                iconWidth={18}
                                iconHeight={18}
                            />
                        </li>
                        <li className={""} key={"top-btn-my-projects"}>
                            <LinkButton
                                id={"toProjectLink"}
                                className={"py-1.5 px-4 gap-2 fluid-text"}
                                style={setFluidTextSizeStyle(15, 14)}
                                title={t("about_section.link.to_my_projects.hover_text")}
                                href={`#${CHAPTERS.PROJECTS}`}
                                icon={<DownArrowIcon width={18} height={18} iconColor={"currentColor"} />}
                                iconPos={"left"}
                            >
                                {t("about_section.link.to_my_projects.text")}
                            </LinkButton>
                        </li>
                    </ul>
                </div>
            </section>

            <section id={CHAPTERS.SKILLS}>
                <Title
                    headingLevel={2}
                    className={"mb-6 gap-5"}
                    style={setFluidTextSizeStyle(40, 32)}
                    icon={<DrawingCompassIcon height={35} width={35} />}
                    iconColor={"pale-orange"}
                >
                    {t.rich("skills_section.title.text", {
                        italic_pale_orange: (chunk) => (<span className={"italic-style pale-orange-text"}>{chunk}</span>)
                    })}
                </Title>
                <ul className={"flex flex-row flex-wrap gap-13"}>
                    <li className={"inline-flex flex-[1_1_500px]"} key={`skill-card-backend`}>
                        <SkillCard
                            titleTrans={t.rich(
                                "skillcard.title.backend.text", {
                                    "italic_skylight_blue": (chunk) => (<span className={"skylight-blue-text italic-style"}>{chunk}</span>)
                                }
                            )}
                            titleIconColor={"skylight-blue"}
                            icon={<ServerIcon height={25} width={25} />}
                            className={""}
                        >
                            {backendSkills.map((skill: string) => (
                                <TechnologyTemp
                                    name={skill}
                                    variant={skill}
                                    className={"fluid-text py-1 px-3.5 gap-1.5 max-lg:px-2.5"}
                                    style={setFluidTextSizeStyle(14, 13)}
                                    iconHeight={19}
                                    iconWidth={19}
                                />
                            ))}
                        </SkillCard>
                    </li>
                    <li className={"inline-flex flex-[1_1_500px]"} key={`skill-card-frontend`}>
                        <SkillCard
                            titleTrans={t.rich(
                                "skillcard.title.frontend.text", {
                                    "italic_blue": (chunk) => (<span className={"blue-text italic-style"}>{chunk}</span>)
                                }
                            )}
                            titleIconColor={"blue"}
                            icon={<MagicBallIcon height={25} width={25} />}
                            className={""}
                        >
                            {frontendSkills.map((skill: string) => (
                                <TechnologyTemp
                                    name={skill}
                                    variant={skill}
                                    className={"fluid-text py-1 px-3.5 gap-1.5 max-lg:px-2.5"}
                                    style={setFluidTextSizeStyle(14, 13)}
                                    iconHeight={19}
                                    iconWidth={19}
                                />
                            ))}
                        </SkillCard>
                    </li>
                    <li className={"inline-flex flex-[1_1_500px]"} key={`skill-card-cicd`}>
                        <SkillCard
                            titleTrans={t.rich(
                                "skillcard.title.cicd.text", {
                                    "italic_purple": (chunk) => (<span className={"purple-text italic-style"}>{chunk}</span>)
                                }
                            )}
                            titleIconColor={"purple"}
                            icon={<CodeMergeIcon height={25} width={25} />}
                            className={""}
                        >
                            {CICDSkills.map((skill: string) => (
                                <TechnologyTemp
                                    name={skill}
                                    variant={skill}
                                    className={"fluid-text py-1 px-3.5 gap-1.5 max-lg:px-2.5"}
                                    style={setFluidTextSizeStyle(14, 13)}
                                    iconHeight={19}
                                    iconWidth={19}
                                />
                            ))}
                        </SkillCard>
                    </li>
                </ul>
            </section>

            <section id={CHAPTERS.PROJECTS}>
                <Title
                    headingLevel={2}
                    className={"mb-6 gap-5"}
                    style={setFluidTextSizeStyle(40, 32)}
                    icon={<FolderIcon height={35} width={35} />}
                    iconColor={"pale-blue"}
                >
                    {t.rich("projects_section.title.text", {
                        italic_pale_blue: (chunk) => (<span className={"italic-style pale-blue-text"}>{chunk}</span>)
                    })}
                </Title>
                <ProjectsTabs />
            </section>

            <section id={CHAPTERS.SERVICES}>
                <Title
                    headingLevel={2}
                    className={"mb-5 gap-5"}
                    style={setFluidTextSizeStyle(40, 32)}
                    icon={<CodeIcon height={35} width={35} />}
                    iconColor={"red"}
                >
                    {t.rich("services_section.title.text", {
                        "italic_red": (chunk) => (<span className={"italic-style red-text"}>{chunk}</span>)
                    })}
                </Title>
                <p className={"mb-5 max-w-3xl text-balance fluid-text"} style={setFluidTextSizeStyle(16, 14)}>
                    {t.rich("services_section.p.text", {
                        "br": () => (<br/>),
                        "tg_link": (chunk) => (<HyperLink to={TELEGRAM_LINK} className={"!inline-flex telegram-text gap-1"} hasIcon={true}>{chunk}</HyperLink>)
                    })}
                </p>
                <ServicesTabs />
            </section>
        </>
    );
}

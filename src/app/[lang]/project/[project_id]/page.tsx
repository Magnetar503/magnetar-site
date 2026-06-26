import {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import Image from 'next/image'

import {StackCard} from "@/components/StackCard";
import {Title} from "@/components/Title";
import {ProjectData} from "@/types";
import {routing} from "@/i18n/routing";
import {projects} from "@/portfolioDataLists";
import {BASE_SITE_URL} from "@/const";
import {setFluidTextSizeStyle} from "@/utils";
import React from "react";


export function generateStaticParams() {
    return routing.locales.flatMap((lang) =>
        projects.map((project) => ({ lang, project_id: project.id }))
    )
}

export async function generateMetadata({ params }: { params: Promise<{ project_id: string, lang: string }> }): Promise<Metadata> {
    const { project_id, lang } = await params
    const t = await getTranslations(project_id)
    const title = t("metadata.title")
    const description = t("metadata.description")

    return {
        title: title,
        description: description,
        openGraph: {
            url: `${BASE_SITE_URL}/${lang}/project/${project_id}`,
            title: title,
            description: description,
        },
        twitter: {
            title: title,
            description: description,
        },
        alternates: {
            canonical: `${BASE_SITE_URL}/${lang}/project/${project_id}`
        },
    }
}

export default async function ProjectPage({params}: {params: Promise<{ project_id: string, lang: string }>}) {
    const {project_id, lang} = await params
    setRequestLocale(lang)

    const t = await getTranslations(project_id)
    const project: ProjectData | undefined = projects.find((p: ProjectData) => p.id === project_id)

    if (!project) {
        notFound()
    }

    const getStack = () => (
        !project.otherStack
            ? [...project.baseStack]
            : [...project.baseStack, ...project.otherStack]
    )

    const getChildText = (nodes: React.ReactNode): string => {
        if (typeof nodes === "string" || typeof nodes === "number") {
            return String(nodes);
        }
        if (Array.isArray(nodes)) {
            return nodes.map(getChildText).join("");
        }
        if (React.isValidElement(nodes)) {
            // @ts-ignore
            return getChildText(nodes.props.children);
        }
        return "";
    };

    return (
        <section id={`project-info-${project.id}`}>
            <div className={"max-w-[calc(var(--max-site-container-width)-450px)] mx-auto"}>
                {t.rich("info", {
                    title: (chunks) => (
                        <Title headingLevel={1} className="mt-7.5 text-center" style={setFluidTextSizeStyle(40, 28)}>
                            {chunks}
                        </Title>
                    ),
                    h2: (chunks) => (
                        <Title headingLevel={2} className={"mb-5 mt-20 border-b border-[var(--font-color)]"} style={setFluidTextSizeStyle(31, 23)}>
                            {chunks}
                        </Title>
                    ),
                    h3: (chunks) => (
                        <Title headingLevel={3} className={"mb-2 mt-8"} style={setFluidTextSizeStyle(26, 18)}>
                            {chunks}
                        </Title>
                    ),
                    stackCard: () => <StackCard className="py-3 px-3.75 my-10 glass" stack={getStack()} />,
                    paragraph: (chunks) => (
                        <p className="fluid-text hyphens-auto [&:not(:is(:last-child))]:mb-7" style={setFluidTextSizeStyle(17, 15)}>
                            {chunks}
                        </p>
                    ),
                    list: (chunk) => (
                        <ul className={"list-disc! mb-7"}>
                            {chunk}
                        </ul>
                    ),
                    listItem: (chunk) => (
                        <li className={"fluid-text pl-1 ml-6"} style={setFluidTextSizeStyle(17, 15)}>
                            {chunk}
                        </li>
                    ),
                    fullWidthImage: (chunk) => (
                        <Image src={getChildText(chunk)} width={750} height={300} alt={""} className={"mb-4 w-full border border-[#282828] h-auto rounded-[var(--border-15)]"} />
                    ),
                    image: (chunk) => (
                        <Image src={getChildText(chunk)} width={750} height={300} alt={""} className={"mb-2 h-auto w-[47%] max-lg:w-[55%] max-md:w-[68%] max-sm:w-full mx-auto border border-[#282828] rounded-[var(--border-15)]"} />
                    ),
                    br: () => <br/>
                })}
            </div>
        </section>
    )
}

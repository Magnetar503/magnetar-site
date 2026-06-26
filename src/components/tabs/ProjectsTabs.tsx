"use client"

import {useTranslations} from "next-intl";
import React, {useState} from "react";

import {PROJECT_TABS} from "@/const";
import {setFluidTextSizeStyle} from "@/utils";
import {projects} from "@/portfolioDataLists";
import {ProjectData, TechnologyVariant} from "@/types";
import {
    ProjectBadge,
    ProjectCard,
    ProjectCardButtonList,
    ProjectCardListItem,
    ProjectCardOtherStack,
    ProjectCardStack
} from "@/components/cards/ProjectCard";
import {TechnologyTemp} from "@/components/TechnologyTemp";
import {LinkButtonTemp} from "@/components/LinkButtonTemp";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/shadcn_ui/tabs";


type TFunction = ReturnType<typeof useTranslations>

const placeProjectCard = (t: TFunction, project: ProjectData) => (
    <ProjectCard
        className={"min-h-43.75"}
        titleText={t(project.title)}
        description={t(project.description)}
        projectBadge={<ProjectBadge variant={project.badge} />}
    >
        <ProjectCardStack>
            {project.baseStack.map((technology: string) => (
                <ProjectCardListItem key={`project_${project.id}_technology_${technology}`}>
                    <TechnologyTemp
                        name={technology}
                        variant={technology as TechnologyVariant}
                        className={"inline-flex text-center gap-1.5 py-0.75 px-3"}
                        style={setFluidTextSizeStyle(14, 12)}
                        iconHeight={18}
                        iconWidth={18}
                    />
                </ProjectCardListItem>
            ))}
            {project.otherStack &&
                <ProjectCardListItem>
                    <ProjectCardOtherStack technologyList={project.otherStack} />
                </ProjectCardListItem>
            }
        </ProjectCardStack>
        {project.buttons &&
            <ProjectCardButtonList className={"mt-2"}>
                {project.buttons.map((btn, bi: number) => (
                    <ProjectCardListItem className={"inline-flex"} key={`project_card_btn_${project.id}_${bi}`}>
                        <LinkButtonTemp
                            className={"px-2.5 py-1.25 gap-1.75"}
                            style={setFluidTextSizeStyle(13, 11)}
                            variant={btn.variant}
                            href={btn.href}
                            iconWidth={16}
                            iconHeight={16}
                        />
                    </ProjectCardListItem>
                ))}
            </ProjectCardButtonList>
        }
    </ProjectCard>
)

export function ProjectsTabs()  {
    const [projectTabValue, setProjectTabValue] = useState(PROJECT_TABS.ALL_PROJECTS)

    const t = useTranslations()

    return (
        <Tabs
            defaultValue={projectTabValue}
            onValueChange={setProjectTabValue}
            className={"gap-4 flex-col"}
        >
            <TabsList className={"p-1 bg-[#141414] rounded-[var(--border-15)]"}>
                {[
                    {tabValue: PROJECT_TABS.ALL_PROJECTS, hoverTextKey: "projects_tabs.trigger.all_projects.hover_text", textKey: "projects_tabs.trigger.all_projects.text"},
                    {tabValue: PROJECT_TABS.WEBSITES, hoverTextKey: "projects_tabs.trigger.sites.hover_text", textKey: "projects_tabs.trigger.sites.text"},
                    {tabValue: PROJECT_TABS.BOTS, hoverTextKey: "projects_tabs.trigger.bots.hover_text", textKey: "projects_tabs.trigger.bots.text"},
                ].map((v: {tabValue: string, hoverTextKey: string, textKey: string}) => (
                    <TabsTrigger
                        value={v.tabValue}
                        className={"text-nowrap rounded-[var(--border-15)] py-1.25 px-3.5"}
                        title={t(v.hoverTextKey)}
                    >
                        {t(v.textKey)}
                    </TabsTrigger>
                ))}
            </TabsList>
            {projectTabValue === PROJECT_TABS.ALL_PROJECTS &&
                <TabsContent value={PROJECT_TABS.ALL_PROJECTS}>
                    <ProjectsList t={t} projects={projects} />
                </TabsContent>
            }
            {[
                {tabValue: PROJECT_TABS.WEBSITES, projectType: "website"},
                {tabValue: PROJECT_TABS.BOTS, projectType: "bot"},
            ].map((v: {tabValue: string, projectType: string}) => (
                <TabsContent value={v.tabValue}>
                    <ProjectsList t={t} projects={projects.filter((p: ProjectData) => p.type === v.projectType)} />
                </TabsContent>
            ))}
        </Tabs>
    )
}

const ProjectsList = React.memo(({ projects, t }: { projects: ProjectData[], t: TFunction }) => {
    return (
        <ul className="flex flex-wrap flex-row gap-5">
            {projects.map((project: ProjectData) => (
                <li className={"flex-[1_1_500px]"} key={`project-${project.id}`}>
                    {placeProjectCard(t, project)}
                </li>
            ))}
        </ul>
    );
});


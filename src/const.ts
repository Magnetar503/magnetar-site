import {PythonIcon} from "@/components/icons/technology/PythonIcon";
import {CSSIcon} from "@/components/icons/technology/CSSIcon";
import {HTMLIcon} from "@/components/icons/technology/HTMLIcon";
import {SASSIcon} from "@/components/icons/technology/SASSIcon";
import {BashIcon} from "@/components/icons/technology/BashIcon";
import {GitIcon} from "@/components/icons/technology/GitIcon";
import {GitHubIcon} from "@/components/icons/GitHubIcon";
import {DockerIcon} from "@/components/icons/technology/DockerIcon";
import {SQLiteIcon} from "@/components/icons/technology/SQLiteIcon";
import {PydanticIcon} from "@/components/icons/technology/PydanticIcon";
import {ReactIcon} from "@/components/icons/technology/ReactIcon";
import {NextIcon} from "@/components/icons/technology/NextIcon";
import {TailwindIcon} from "@/components/icons/technology/TailwindIcon";
import {TypeScriptIcon} from "@/components/icons/technology/TypeScriptIcon";
import {JavaScriptIcon} from "@/components/icons/technology/JavaScriptIcon";
import {CodeIcon} from "@/components/icons/CodeIcon";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon";
import {FolderIcon} from "@/components/icons/FolderIcon";


export const LINK_START: string = "magnetar-site"

export const TELEGRAM_LINK: string = "https://t.me/MagnetarDev"
export const KWORK_LINK: string = ""
export const GITHUB_LINK: string = ""
export const BASE_SITE_URL: string = `https://magnetar503.github.io/${LINK_START}`

export const LANGUAGES = ["ru", "en", "rpr"] as const

export const PROJECT_TABS = {
    ALL_PROJECTS: "all-projects",
    BOTS: "bot",
    WEBSITES: "website",
    OTHER: "other"
}

export const CURRENCY_TABS = {
    rub: "rub",
    usd: "usd",
}

export const SUPPORTED_LANGUAGES = {
    RUSSIAN: "ru",
    ENGLISH: "en",
    RUSSIAN_PRE_REVOLUTIONARY: "rpr",
}

export const languages = [
    {name: "Русский", id: SUPPORTED_LANGUAGES.RUSSIAN},
    {name: "English", id: SUPPORTED_LANGUAGES.ENGLISH},
    {name: "Русскій (дореформенный)", id: SUPPORTED_LANGUAGES.RUSSIAN_PRE_REVOLUTIONARY}
]

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.RUSSIAN

export const CHAPTERS = {
    WHO_I_AM: "who-i-am",
    SKILLS: "my-skills",
    SKILLS_ADDITION: "my-skills-addition",
    SERVICES: "my-services",
    PROJECTS: "my-projects"
}

export const technologyConfig = {
    python: {name: "Python", style: "python", icon: PythonIcon},
    typescript: {name: "TypeScript", style: "typescript", icon: TypeScriptIcon},
    javascript: {name: "JavaScript", style: "javascript", icon: JavaScriptIcon},
    css: {name: "CSS", style: "css", icon: CSSIcon},
    html: {name: "HTML", style: "html", icon: HTMLIcon},
    scss: {name: "SCSS", style: "scss", icon: SASSIcon},
    bash: {name: "Bash", style: "bash", icon: BashIcon},
    git: {name: "Git", style: "git", icon: GitIcon},
    github: {name: "GitHub", style: null, icon: GitHubIcon},
    docker: {name: "Docker", style: "docker", icon: DockerIcon},
    sqlite: {name: "SQLite", style: "sqlite", icon: SQLiteIcon},
    sqlalchemy: {name: "SQLAlchemy", style: "sqlalchemy", icon: null},
    bem_methodology: {name: "BEM methodology", style: "bem_methodology", icon: null},
    fastapi: {name: "FastAPI", style: "fastapi", icon: CodeIcon},
    aiogram: {name: "aiogram", style: "aiogram", icon: null},
    pydantic: {name: "Pydantic", style: "pydantic", icon: PydanticIcon},
    reactjs: {name: "ReactJS", style: "reactjs", icon: ReactIcon},
    nextjs: {name: "NextJS", style: null, icon: NextIcon},
    disnake: {name: "disnake", style: null, icon: null},
    i18next: {name: "i18next", style: null, icon: null},
    tailwind: {name: "Tailwind", style: "tailwind", icon: TailwindIcon},
}

export const headerLinks = [
    {
        text: "header.link.about.text",
        title: "header.link.about.hover_text",
        icon: GitHubIcon,
        link: `/home/#${CHAPTERS.WHO_I_AM}`
    },
    {
        text: "header.link.skills.text",
        title: "header.link.skills.hover_text",
        icon: DrawingCompassIcon,
        link: `/home/#${CHAPTERS.SKILLS}`
    },
    {
        text: "header.link.projects.text",
        title: "header.link.projects.hover_text",
        icon: FolderIcon,
        link: `/home/#${CHAPTERS.PROJECTS}`
    },
    {
        text: "header.link.services.text",
        title: "header.link.services.hover_text",
        icon: CodeIcon,
        link: `/home/#${CHAPTERS.SERVICES}`
    },
]

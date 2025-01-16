export interface Project {
    title: string
    type: string
    dateText: string
    description: string[]
    tags: string[]
    images: string[]
    link?: string
}

export interface ProjectsData {
    projects: Project[]
}
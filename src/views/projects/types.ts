export interface Project {
    name: string
    description: string
    date: string
    location: string
    id: number
}

export interface Projects {
    category: string
    color: string
    projects: Project[]
}

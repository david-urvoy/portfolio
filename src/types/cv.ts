export interface Experience {
    title: string
    company?: string
    location?: string
    period: string
    description?: string
    details?: string
    stack?: string[]
}

export interface Project {
    title: string
    stack: string[]
    description: string
}

export interface Education {
    school: string
    degree: string
    period: string
}

export interface Cv {
    name: string
    title: string
    location?: string
    email?: string
    website?: string
    phone?: string
    linkedin?: string
    github?: string
    experiences: Experience[]
    skills: {
        frontend: string[]
        backend: string[]
        other: string[]
    }
    projects: Project[]
    education: Education[]
    description: string
}

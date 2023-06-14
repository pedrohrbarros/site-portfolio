import { Project } from './Project'
import { Work } from './Work'

export type Person = {
    name: string
    email: string
    dev_role: string
    github: string
    whatsapp: string
    linkedin: string
    projects: Project[]
    works: Work[]
}
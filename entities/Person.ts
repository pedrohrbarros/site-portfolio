import { Project } from './Project'
import { Work } from './Work'

export class Person{
    name: string
    dev_level: string
    github: string
    whatsapp: string
    linkedin: string
    portfolio: Project[]
    work: Work[]
    constructor(name: string, dev_level: string, github: string, whatsapp: string, linkedin: string, portfolio: Project[], work: Work[]){
        this.name = name
        this.dev_level = dev_level
        this.github = github
        this.whatsapp = whatsapp
        this.linkedin = linkedin
        this.portfolio = portfolio
        this.work = work
    }
}
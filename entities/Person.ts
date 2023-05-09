import { Project } from './Project'

export class Person{
    name: string
    dev_level: string
    github: string
    whatsapp: string
    linkedin: string
    portfolio: Project[]
    constructor(name: string, dev_level: string, github: string, whatsapp: string, linkedin: string, portfolio: Project[]){
        this.name = name
        this.dev_level = dev_level
        this.github = github
        this.whatsapp = whatsapp
        this.linkedin = linkedin
        this.portfolio = portfolio
    }
}
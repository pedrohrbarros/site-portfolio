class Person{
    name: string
    dev_level: string
    github: string
    whatsapp: string
    linkedin: string
    constructor(name: string, dev_level: string, github: string, whatsapp: string, linkedin: string){
        this.name = name
        this.dev_level = dev_level
        this.github = github
        this.whatsapp = whatsapp
        this.linkedin = linkedin
    }
}

export const pedro_barros = new Person(
    'Pedro Barros',
    'Full Stack!',
    'https://github.com/pedrohrbarros',
    '5511954312733',
    'https://www.linkedin.com/in/pedro-henrique-rodrigues-de-barros-39077b159/'
)

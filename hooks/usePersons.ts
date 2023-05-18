import { Person } from '../entities/Person'
import calculateMonthsSinceSpecificDate from '../tools/calculateMonthsSinceSpecificDate'

export const pedro_barros = new Person(
    'Pedro Barros',
    'pedrobarros232@hotmail.com',
    'Full Stack!',
    'https://github.com/pedrohrbarros',
    '5511954312733',
    'https://www.linkedin.com/in/pedro-henrique-rodrigues-de-barros-39077b159/',
    [   
        {
            name: 'Fastdash',
            description: 'Interative full stack dashboard',
            url: 'https://fast-dash.vercel.app/',
            repository:'https://github.com/pedrohrbarros/fastdash',
            timeSpentInWeeks: 'In progress',
            frontendTool: 'Next.ts',
            backendTool: 'Node.js/Python'
        },
        {
            name: 'CrestaX',
            description: 'Landing page for a lawyer enterprise',
            url:'https://crestax.vercel.app/',
            repository: 'https://github.com/pedrohrbarros/CrestaX',
            timeSpentInWeeks: 1,
            frontendTool: 'React.ts',
            backendTool: '-'
        },
        {
            name: 'Lizzard',
            description: 'Institutional educacional landing page',
            url:'https://lizzard.vercel.app/',
            repository: 'https://github.com/pedrohrbarros/lizzard',
            timeSpentInWeeks: 1,
            frontendTool: 'React.ts',
            backendTool: '-'
        }, 
        {
            name: 'LeporaceBar-Grill',
            description: 'Landing Page for restaurant',
            url: 'https://leporace-bar-grill.vercel.app/',
            repository: 'https://github.com/pedrohrbarros/LeporaceBar-Grill',
            timeSpentInWeeks: 2,
            frontendTool: 'React.ts',
            backendTool: '-'
        }, 
        {
            name: 'Authenticator',
            description: 'Backend authentication structure',
            url:'/',
            repository: 'https://github.com/pedrohrbarros/Authenticator',
            timeSpentInWeeks: 2,
            frontendTool: '-',
            backendTool: 'Django'
        },
        {
            name: 'Sun Sisters',
            description: 'Landing page for an events company',
            url: 'https://sun-sisters.vercel.app/',
            repository: 'https://github.com/pedrohrbarros/Sun-Sisters',
            timeSpentInWeeks: 1,
            frontendTool: 'React.js',
            backendTool: '-'
        },
        {
            name: 'Site Portfolio',
            description: 'My website portfolio',
            url: 'https://site-portfolio-pedro-barros.vercel.app/',
            repository: 'https://github.com/pedrohrbarros/site-portfolio',
            timeSpentInWeeks: 2,
            frontendTool: 'Next.ts',
            backendTool: '-'
        }
    ],
    [
        
        {
            workplace: 'Atlantic Forest Biosphere Reserve',
            roles: [
                {
                    name: 'IT Internship',
                    timeInMonths: 29,
                    description: 'IT assistant focused on cloud services such as Google Drive, Cloud, Azure, Oracle and AWS, setting up servers and file architectures for backup, managing networks and analyzing the best decisions for better digital security within the company.'
                }
            ]
        },
        {
            workplace: 'TraderEvolution',
            roles: [
                {
                    name: 'Financial Analyst',
                    timeInMonths: 8,
                    description: 'I analyzed financial cases between the client and the company, performing accounting services and analyzing timelines of events to determine the final verdict of a case, usually the analyzes were done using the back office tool with data from MySQL banks.'
                },
                {
                    name: 'Data Analyst',
                    timeInMonths: 3,
                    description: 'Analyzed data from raw databases in MySQL and SQLite from an investment platform, assembling graphs and indicators, automating processes and tasks with Pandas (Python) and integrating these automations in dashboards and administrative systems made in Django.'
                }
            ]
        },
        {
            workplace: 'Artius',
            roles: [ 
                {
                    name: 'System Analyst',
                    timeInMonths: 8,
                    description: 'Provided support to systems maintained in Django(Python) and React.js, analyzed data using PostgreSQL and some automations in Python, also provided maintenance support on Workpress sites and maintenance on sites hosted on AWS.'
                },
                {
                    name: 'Fullstack Jr. Developer',
                    timeInMonths: calculateMonthsSinceSpecificDate(9, 2022),
                    description: 'I developed fully functional fullstack websites with back end in .NET, Django(Python) and NodeJS, using front end tools like React.js, Next.js, with TailwindCSS, usually developing in Typescript and/or Javascript. For Database, I used PostgreSQL.'
                }
            ]
        }
    ]
)
import { create } from 'zustand'
import { Person } from '../entities/Person'
import { Work } from '../entities/Work'
import { Project } from '@/entities/Project'

interface PersonState extends Person {
  setName: (name: string) => void
  setEmail: (email: string) => void
  setDevRole: (dev_role: string) => void
  setGithub: (github: string) => void
  setWhatsapp: (whatsapp: string) => void
  setLinkedin: (linkedin: string) => void
  setProjects: (projects: Project[]) => void
  setWork: (work: Work[]) => void
}

export const personStore = create<PersonState>()((set) => ({
  name: '',
  email: '',
  dev_role: '',
  github: '',
  whatsapp: '',
  linkedin: '',
  projects: [
    {
      name: '',
      description: '',
      url: '',
      repository: '',
      frontendTool: '',
      backendTool: '',
      database: ''
    }
  ],
  works: [
    {
      workplace: '',
      roles: [
        {
          name: '',
          timeInMonths: 0,
          description: ''
        }
      ]
    }
  ],

  setName: (name: string) => set(() => ({ name: name })),
  setEmail: (email: string) => set(() => ({ email: email })),
  setDevRole: (dev_role: string) => set(() => ({ dev_role: dev_role })),
  setGithub: (github: string) => set(() => ({ github: github })),
  setWhatsapp: (whatsapp: string) => set(() => ({ whatsapp: whatsapp })),
  setLinkedin: (linkedin: string) => set(() => ({ linkedin: linkedin })),
  setProjects: (projects: Project[]) => set(() => ({ projects: projects })),
  setWork: (works: Work[]) => set(() => ({ works: works })),

}))
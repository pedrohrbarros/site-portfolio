import { api } from '@/api/instance'
import { Person } from '@/entities/Person'
import axios from 'axios'

export const handleGetPerson = async (): Promise<Person> => {
  try {
    const response = await api.get('person/')
    console.log(response.data[0])
    return response.data[0]
  } catch (error) {
    if(axios.isAxiosError(error)){
      if (error.response) {
        alert('Response error!')
        return {
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
        }
      } else if (error.request) {
        alert('Request error!')
        return {
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
        }
      } else {
        alert('Internal error!')
        return {
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
        }
      }
    } else {
      alert('Axios Error!')
      return {
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
      }
    }
  }
}
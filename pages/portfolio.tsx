import React from 'react'
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { pedro_barros } from '../hooks/usePersons'
import { useTranslation } from 'next-i18next'
import { Project } from '../entities/Project'
import Button from '../components/Button/index'
import { motion } from 'framer-motion'
import Planet from '../components/Planet/index'

function Portfolio() {

  const { t } = useTranslation('portfolio')

  const [chosenProject, setChosenProject] = React.useState<Project>({
    name: t('No choosen project'),
    description: t('Choose a work below'),
    url: '/portfolio/',
    repository: '/portfolio/',
    timeSpentInWeeks: 0 || '',
    frontendTool:'-',
    backendTool: '-',
  })

  const planets = [
    "bg-earth",
    "bg-jupiter",
    "bg-venus",
    "bg-mercury",
    "bg-mars",
    "bg-neptune",
    "bg-uranus",
    "bg-moon"
  ]

  const shadows = [
    "shadow-earth",
    "shadow-jupiter",
    "shadow-venus",
    "shadow-mercury",
    "shadow-mars",
    "shadow-neptune",
    "shadow-uranus",
    "shadow-moon"
  ]

  const [chosenPlanet, setChosenPlanet] = React.useState(planets[0])
  const [chosenShadowPlanet, setChosenShadowPlanet] = React.useState(shadows[0])
  const handleProjectClick = (project: Project, index: number) => {
    setChosenProject(project)
    setChosenPlanet(planets[index])
    setChosenShadowPlanet(shadows[index])
  }

  return ( 
      <div className="w-full h-full pb-6">
          <Navbar page="portfolio"/>
          <main className="w-full h-full px-2 pt-[4em] max-[560px]:px-1 flex flex-col gap-[4em]">
              <article className="w-full h-auto px-[3vw] flex flex-row flex-nowrap justify-between gap-[1em] items-start max-[715px]:flex-col max-[715px]:px-3 max-[715px]:py-1 max-[560px]:justify-center">
                <section className="w-auto h-full flex flex-col justify-start flex-nowrap items-start align-start gap-[3em] max-[400px]:gap-[2em] max-[400px]:h-auto">
                  <motion.h1
                    className="font-h1 text-white text-5xl font-bold max-[560px]:text-3xl"
                    initial={{ 
                      opacity: 0,
                      x: -20
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0 
                    }}
                    exit={{ 
                      opacity: 0,
                      x: -20
                    }}
                    key={chosenProject.name}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      ease: [0, 0, 0.8, 1.5]
                    }}
                  >
                    {chosenProject.name}
                  </motion.h1>
                  <motion.h2 
                    className="font-h2 text-4xl text-white max-[560px]:text- 2xl"
                    initial={{ 
                      opacity: 0,
                      x: -20
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0 
                    }}
                    exit={{ 
                      opacity: 0,
                      x: -20
                    }}
                    key={chosenProject.description}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [0, 0, 0.8, 1.5]
                    }}
                  >
                    {t(chosenProject.description)}
                  </motion.h2>
                  <motion.div 
                    className="w-full h-auto flex flex-row flex-nowrap justify-start items-center gap-[2em]"
                    initial={{ 
                      opacity: 0,
                      x: -20
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0 
                    }}
                    exit={{ 
                      opacity: 0,
                      x: -20
                    }}
                    key={chosenProject.url || chosenProject.repository}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                      ease: [0, 0, 0.8, 1.5]
                    }}
                  >
                    <Button text={t('See project')} alternate_text={t('Go to website')} onClick={() => window.open(chosenProject.url)}/>
                    <Button text={t('See repository')} alternate_text={t('Go to GitHub')} onClick={() => window.open(chosenProject.repository)}/>
                  </motion.div>
                </section>
                <motion.section 
                  className="w-auto h-[90%] grid gap-x-4 gap-y-10 grid-cols-3 grid-rows-2"
                  initial={{ 
                    opacity: 0,
                    y: -20
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0 
                  }}
                  exit={{ 
                    opacity: 0,
                    y: -20
                  }}
                  key={chosenProject.timeSpentInWeeks && chosenProject.frontendTool && chosenProject.backendTool}
                  transition={{
                    duration: 1,
                    delay: 0.9,
                    ease: [0, 0, 0.8, 1.5]
                  }}
                >
                  <h2 className="font-h2 text-white text-4xl max-[560px]:text-2xl text-center">{typeof chosenProject.timeSpentInWeeks === 'string' ? t(chosenProject.timeSpentInWeeks) : chosenProject.timeSpentInWeeks} {typeof chosenProject.timeSpentInWeeks === 'number' ? t('Weeks') : null}</h2>
                  <h2 className="font-h2 text-white text-4xl max-[560px]:text-2xl text-center">{chosenProject.frontendTool}</h2>
                  <h2 className="font-h2 text-white text-4xl max-[560px]:text-2xl text-center">{chosenProject.backendTool}</h2>
                  <label className="font-p text-white text-2xl max-[560px]:text-xl text-center">{t('Time Spent')}</label>
                  <label className="font-p text-white text-2xl max-[560px]:text-xl text-center">{'Front End'}</label>
                  <label className="font-p text-white text-2xl max-[560px]:text-xl text-center">{'Back End'}</label>
                </motion.section>
              </article>
              <div className="w-full h-auto flex flex-nowrap justify-center items-center flex-col py-8 gap-8">
                <ul className="w-full h-auto flex flex-wrap justify-center items-center gap-6 flex-row">
                {
                  pedro_barros.portfolio.map((project, index) => (
                    chosenProject.name === project.name ? 
                    <div key={index} className="w-auto h-auto">
                      <label key={index} className="font-p text-2xl text-white cursor-pointer border-white border-b-2 border-solid transition-all" htmlFor={project.name} onClick={() => console.log(index)}>{project.name}</label>
                      <input key={index} type="radio" name="portfolio" className="hidden" id={project.name} onClick={() => handleProjectClick(project, index)}/>
                    </div>
                    :
                    <div key={index} className="w-auto h-auto">
                      <label key={index} className="font-p text-2xl text-white cursor-pointer border-white border-b-0 border-solid transition-all duration-100" htmlFor={project.name}>{project.name}</label>
                      <input key={index} type="radio" name="portfolio" className="hidden" id={project.name} onClick={() => handleProjectClick(project, index)}/>
                    </div>
                  ))
                }
                </ul>
                <Planet
                  planet={chosenPlanet}
                  shadow={chosenShadowPlanet}
                  />
              </div>
          </main>
          <Footer/>
      </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'portfolio'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Portfolio
import React from 'react'
import { Role } from '../../entities/Work'
import { useTranslation } from 'next-i18next'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import getYearsAndMonths from '../../tools/getYearsAndMonths'

type Props = {
  workplace: string
  backgroundImage: string
  roles: Role[]
}

function Experience(props: Props) {

  const { t } = useTranslation('experiences')

  return (
    <div className="w-full h-full flex flex-col flex-nowrap justify-center items-start gap-4">
      <h1 className="font-h1 text-white text-4xl font-bold max-[400px]:text-3xl">{t(props.workplace)}</h1>
      <div className={`${props.backgroundImage} w-full h-full rounded-md border-[1px] border-solid border-white flex flex-col flex-nowrap justify-center items-start  bg-cover bg-no-repeat bg-center transition-all duration-[400ms] ease-in-out hover:shadow-card group`}>
        <Carousel infiniteLoop={true} className="w-full h-auto invisible group-hover:visible" showThumbs={false} showStatus={false}>
          {
            props.roles.map((role: Role, index: number) => {
              const { years, months: remainingMonths } = getYearsAndMonths(role.timeInMonths)
              return(
                <article className = "w-full h-full px-10 py-8 flex flex-col flex-nowrap justify-start items-start gap-6 text-justify max-[300px]:text-start max-[300px]:px-8" key={index}>
                  <h2 className="font-h2 text-3xl font-extralight max-[300px]:text-2xl text-transparent transition-all duration-[400ms] ease-in-out group-hover:text-white">{t(role.name)}</h2>
                  <p className="font-p text-xl font-normal max-[300px]:text-md text-transparent transition-all duration-[400ms] ease-in-out group-hover:text-white">{t(role.description)}</p>
                  {role.timeInMonths > 12 ?
                    <p className="font-p text-xl font-normal text-transparent transition-all duration-[400ms] ease-in-out group-hover:text-white">{years} {t('Years')} {t('and')} {remainingMonths} {t('Months')}</p>
                    :
                    <p className="font-p text-xl font-normal text-transparent transition-all duration-[400ms] ease-in-out group-hover:text-white">{role.timeInMonths} {t('Months')}</p>
                  }
                </article>
            )})
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Experience
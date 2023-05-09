
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from '.././components/Navbar/index'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import Button from '../components/Button/index'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { pedro_barros } from '../hooks/usePersons'
import Planet from '.././components/Planet/index'
import Footer from '.././components/Footer/index'

export default function Home() {

  const { t } = useTranslation('index')

  return (
    <div
    className="
    w-full
    h-full
    "
    >
      <main
      className="
      w-full
      h-screen
      pb-6
      max-[1060px]:h-full
      "
      >
        <Navbar page="index"/>
        <div
        className="
        w-full
        h-3/4
        px-5
        flex
        flex-row
        flex-wrap
        justify-around
        items-center
        max-[1060px]:py-10
        "
        >
          <article
          className="
          w-4/6
          h-auto
          flex
          flex-col
          justify-center
          items-start
          gap-[2.5vw]
          max-[1060px]:w-full
          max-[1060px]:items-center
          max-[1060px]:text-center
          "
          >
            <motion.h1
            className="
            font-h1
            text-6xl
            text-white
            uppercase
            font-bold
            max-[350px]:text-5xl
            "
            animate={{
              y: [80, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease:[0, 0, 0.8, 1.5],
            }}
            >
              {pedro_barros.name}
            </motion.h1>
            <div
            className="
            w-auto
            h-auto
            flex
            flex-row
            flex-wrap
            justify-start
            items-center
            gap-2
            max-[1060px]:justify-center
            max-[1060px]:text-center
            " 
            >
              <motion.h2
              animate={{
                y: [90, 0],
                opacity: [0, 1]
              }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease:[0, 0, 0.8, 1.5],
              }}
              className="
              font-h2
              text-white
              text-4xl
              uppercase
              font-bold
              max-[350px]:text-[1.75rem]
              "
              >
                {t('Developer')}
              </motion.h2>
              <motion.h2
              animate={{
                y: [90, 0],
                opacity: [0, 1]
              }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease:[0, 0, 0.8, 1.5],
              }}
              className="
              font-h2
              text-4xl
              uppercase
              text-fuchsia-700
              font-bold
              whitespace-nowrap
              max-[350px]:text-[1.75rem]
              "
              >
                <Typewriter
                options={{
                  delay: 550
                }}
                onInit={(typewriter) => {
                  typewriter.changeDelay(100)
                  typewriter.typeString('Front-End')
                  .pauseFor(1000)
                  .deleteAll()
                  typewriter.changeDelay(100)
                  typewriter.typeString('Back-End')
                  .pauseFor(1000)
                  .deleteAll()
                  typewriter.changeDelay(100)
                  typewriter.typeString(pedro_barros.dev_level)
                  .start()
                }}
                />
              </motion.h2>
            </div>
            <motion.p
            animate={{
              y:[90, 0],
              opacity:[0, 1],
            }}
            transition={{
              duration: 1,
              delay: 1,
              ease:[0, 0, 0.8, 1.5],
            }}
            className="
            font-p
            text-3xl
            text-white
            max-[350px]:text-xl
            "
            >
              {t('Currently working with Next.js and Django to build complete websites.')}
            </motion.p>
            <motion.div
            animate={{
              y: [90, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 1,
              delay: 1.3,
              ease:[0, 0, 0.8, 1.5],
            }}
            className="
            flex
            flex-row
            flex-nowrap
            w-auto
            h-auto
            gap-2
            justify-start
            items-center
            "
            >
              <Button
                text={t('Contact me')}
                alternate_text='Whatsapp'
                onClick={() => window.open('https://wa.me/' + pedro_barros.whatsapp, "_blank")}
              />
              <Button
                text='Portfolio'
                alternate_text={t('Works')}
                onClick={() => {
                  window.location.pathname = '/contact/'
                }}
              />
            </motion.div>
            <div
            className="
            w-auto
            h-auto
            flex
            flex-row
            flex-nowrap
            justify-start
            items-center
            gap-2
            "
            >
              <motion.a
                animate={{
                  y: [90, 0],
                  opacity: [0, 1],
                }} 
                transition={{
                  delay: 1.6,
                  duration: 1,
                  ease:[0, 0, 0.8, 1.5],
                }}
                href={pedro_barros.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin 
                  size={40}
                  color="#FFFFFF"
                />
              </motion.a>
              <motion.a
                animate={{
                  y: [90, 0],
                  opacity: [0, 1],
                }} 
                transition={{
                  delay: 1.6,
                  duration: 1,
                  ease:[0, 0, 0.8, 1.5],
                }} 
                href={pedro_barros.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub 
                  size={40}
                  color="#FFFFFF"
                />
              </motion.a>
            </div>
          </article>
          <div
            className="
            w-auto
            h-auto
            max-[1060px]:p-5
            "
          >
            <Planet
            planet="bg-earth"
            shadow="shadow-earth"
            />
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'index'
      ])),
      // Will be passed to the page component as props
    },
  }
}
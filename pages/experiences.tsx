import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'
import Experience from '../components/Experience/index'
import { Work } from '../entities/Work'
import { pedro_barros } from '../hooks/usePersons'

function Experiences() {
    
    const { t } = useTranslation('experiences')

    return (
        <div className="pb-4">
            <Navbar page="experiences"/>
            <main className="w-full h-auto min-h-[100vh] px-[6vw] py-[3vw] grid gap-4 grid-cols-2 grid-rows-2 place-content-center max-[810px]:grid-cols-1 max-[810px]:grid-rows-none max-[810px]:gap-[8vh]">
                <div className="h-auto w-auto max-w-xl flex flex-col justify-center items-start gap-7 max-[810px]:w-full">
                    <h1 className="font-h1 text-white text-6xl font-bold max-[400px]:text-4xl">{t('My last experiences')}</h1>
                </div>
                {
                    pedro_barros.work.map((work: Work, index: number) => (
                        <div className="h-auto w-auto max-w-xl flex flex-col justify-center items-start gap-7 max-[810px]:max-w-full" key={index}>
                            <Experience
                             workplace={work.workplace}
                             roles={work.roles}
                             backgroundImage={work.type}
                            />
                        </div>
                    ))
                }
            </main>
            <Footer/>
        </div>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
        ...(await serverSideTranslations(locale, [
            'experiences'
        ])),
        // Will be passed to the page component as props
        },
    }
}

export default Experiences
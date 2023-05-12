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
        <div>
            <Navbar page="experiences"/>
            <main className="w-full h-auto min-h-[100vh] p-[6vw] grid gap-6 grid=cols-2 grid-rows-2 place-content-center">
                <div className="h-auto w-[400px] flex flex-col justify-center items-start gap-7">
                    <h1 className="font-h1 text-white text-6xl font-bold">{t('My last experiences')}</h1>
                </div>
                {
                    pedro_barros.work.map((work: Work) => (
                        <div className="h-auto w-96 flex flex-col justify-center items-start gap-7">
                            <Experience
                             roles={work.roles}
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
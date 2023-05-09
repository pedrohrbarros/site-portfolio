import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'

function Experiences() {
    
    const { t } = useTranslation('index')

    return (
        <div>
            <Navbar page="experiences"/>
            <main>
                
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
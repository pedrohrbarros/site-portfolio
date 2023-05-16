import React from 'react'
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'
import { pedro_barros } from '../hooks/usePersons'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Contact() {

    const { t } = useTranslation('contact')

    return (
        <div className="pb-4 overflow-y-hidden overflow-x-hidden">
            <Navbar page="contact"/>
            <main className="w-full h-auto min-h-screen flex flex-col justify-center flex-nowrap items-center p-y-10 relative -z-50">
            <div
            className="shadow-sun bg-sun w-[15vw] h-[15vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%]"
            />
            {/* Mercury */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[25vw] h-[25vw] rounded-[50%] animate-[spin_4s_linear_infinite]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-mercury w-[5vw] h-[5vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[50%]"
                />
            </div>
            {/* Venus */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[40vw] h-[40vw] rounded-[50%] animate-[spin_7s_linear_infinite]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-venus w-[6vw] h-[6vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[100%]"
                />
            </div>
            {/* Earth */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[55vw] h-[55vw] rounded-[50%] animate-[spin_10s_linear_infinite]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-earth w-[7vw] h-[7vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[150%]"
                />
            </div>
            {/* Mars */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[70vw] h-[70vw] rounded-[50%] animate-[spin_18s_linear_infinite]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-mars w-[6vw] h-[6vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[280%]"
                />
            </div>
            {/* Jupiter */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[90vw] h-[90vw] rounded-[50%] animate-[spin_25s_linear_infinite]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-jupiter w-[10vw] h-[10vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[200%]"
                />
            </div>
            </main>
            <Footer/>
        </div>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
        ...(await serverSideTranslations(locale, [
            'contact'
        ])),
        // Will be passed to the page component as props
        },
    }
}

export default Contact
import React from 'react'
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'
import { useTranslation } from 'next-i18next'
import { pedro_barros } from '../hooks/usePersons'
import { AiOutlineClose } from 'react-icons/ai'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'
import Button from '../components/Button/index'

function Contact() {

    const [modalIsOpen, setModalIsOpen] = React.useState(true)

    const { t } = useTranslation('contact')

    return (
        <div className="pb-4 overflow-y-hidden overflow-x-hidden">
            <Navbar page="contact"/>
            <main className="w-full h-auto min-h-screen flex flex-col justify-center flex-nowrap items-center p-y-10 relative">
            <div
            className="shadow-sun bg-sun w-[15vw] h-[15vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] cursor-pointer"
            onClick={() => setModalIsOpen(!modalIsOpen)}
            />
            <motion.div className="w-auto h-auto px-14 py-7 flex flex-col justify-center items-center bg-[rgba(0,_0,_0,_0.30)] shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-sm rounded absolute z-[100] max-[310px]:px-4 max-[310px]:py-4 max-[310px]:mx-4"
            initial={{ scale: 0 }}
            animate={{  scale: modalIsOpen ? 1 : 0, rotate: modalIsOpen ? 360 : 0 }}
            exit = {{ scale: 0 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 23
            }}
            >
                <button className="p-2 bg-red-600 rounded-[50%] absolute right-2 top-2" role="button" onClick={()=> setModalIsOpen(!modalIsOpen)}>
                    <AiOutlineClose/>
                </button>
                <form className="w-auto h-auto flex flex-nowrap flex-col justify-center items-center gap-7">
                    <h1 className="font-h1 text-white text-4xl max-[310px]:text-2xl">{t('Contact me!')}</h1>
                    <div className="w-full h-full flex flex-row justify-center items-center gap-7 flex-wrap">
                        <Button
                            text='E-mail'
                            alternate_text="E-mail"
                            onClick={() => window.open('mailto:' + pedro_barros.email)}
                        />
                        <Button
                            text='Whatsapp'
                            alternate_text="Whatsapp"
                            onClick={() => window.open('https://wa.me/' + pedro_barros.whatsapp, "_blank")}
                        />
                        <Button
                            text='LinkedIn'
                            alternate_text="LinkedIn"
                            onClick={() => window.open(pedro_barros.linkedin)}
                        />
                        <Button
                            text='Github'
                            alternate_text="Github"
                            onClick={() => window.open(pedro_barros.github)}
                        />
                    </div>
                </form>
            </motion.div>
            {/* Mercury */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[25vw] h-[25vw] rounded-[50%] animate-[spin_4s_linear_infinite] -z-[1]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-mercury w-[5vw] h-[5vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[50%] cursor-pointer"
                />
            </div>
            {/* Venus */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[40vw] h-[40vw] rounded-[50%] animate-[spin_7s_linear_infinite] -z-[1]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-venus w-[6vw] h-[6vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[100%] cursor-pointer"
                />
            </div>
            {/* Earth */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[55vw] h-[55vw] rounded-[50%] animate-[spin_10s_linear_infinite] -z-[1]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-earth w-[7vw] h-[7vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[150%] cursor-pointer"
                />
            </div>
            {/* Mars */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[70vw] h-[70vw] rounded-[50%] animate-[spin_18s_linear_infinite] -z-[1]">
                <div
                className="shadow-[-0.5vw_-0.5vw_0.5vw_black_inset,_0.5vw_0.5vw_0.5vw_white_inset] bg-mars w-[6vw] h-[6vw] bg-cover bg-no-repeat bg-center animate-rotate rounded-[50%] absolute transform translate-x-[280%] cursor-pointer"
                />
            </div>
            {/* Jupiter */}
            <div className="absolute bg-transparent border-[1px] border-gray-300 border-solid w-[90vw] h-[90vw] rounded-[50%] animate-[spin_25s_linear_infinite] -z-[1]">
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
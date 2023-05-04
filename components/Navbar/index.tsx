import React from 'react'
import Button from '.././Button/index'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { pedro_barros } from '../../entities/Person'

function Navbar() {

  const { locale, push } = useRouter()

  const { t } = useTranslation('index')

  const handleChangeLanguage = (l: string) => {
    push('/', undefined, {locale: l})
  }

  return (
    <nav
    className="
    w-full
    h-auto
    bg-transparent
    flex
    flex-row
    justify-between
    items-center
    px-10
    py-5
    max-[715px]:px-8
    max-[715px]:py-6
    "
    >
      <a 
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="
        flex
        flex-col
        flex-nowrap
        "
      >
        <h1
        className="
        font-h1
        text-6xl
        text-white
        max-[715px]:text-4xl
        "
        >{pedro_barros.name}</h1>
      </a>
      <div
      className="
      w-4/6
      flex
      flex-row
      flex-wrap
      justify-end
      items-center
      gap-4
      "
      >
        <Button
          text={t('Work with me')}
          alternate_text={t('Set up budget')}
          onClick={() => window.open('https://wa.me/' + pedro_barros.whatsapp, "_blank")}
        />
        {
          locale === 'en' ?
          <Button
            text={t('Change language')}
            alternate_text='Brasileiro'
            onClick={() => handleChangeLanguage('br')}
          />
          : locale === 'br' ? 
          <Button
            text={t('Change language')}
            alternate_text='English'
            onClick={() => handleChangeLanguage('en')}
          />
          : null
        }
      </div>
    </nav>
  )
}

export default Navbar
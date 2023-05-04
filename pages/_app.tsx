import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from '../components/Loader/index'

function App({ Component, pageProps }: AppProps) {

  function Loading(){
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const handleStart = (url: string) => (url !== router.asPath) && setLoading(true)
      const handleComplete = (url: string) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 3000)

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
      }
    })
    return loading && (
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-space"
      >
        <Loader/>
      </div>
    )
  }

  return (
    <>
      <Loading/>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
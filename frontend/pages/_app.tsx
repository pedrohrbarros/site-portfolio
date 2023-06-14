import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader/index";
import Head from "next/head";
import { personStore } from '@/hooks/usePerson'
import { handleGetPerson } from '@/services/getPersonServer'

function App({ Component, pageProps }: AppProps) {

  const setName = personStore((state) => state.setName)
  const setEmail = personStore((state) => state.setEmail)
  const setDevRole = personStore((state) => state.setDevRole)
  const setGithub = personStore((state) => state.setGithub)
  const setWhatsapp = personStore((state) => state.setWhatsapp)
  const setLinkedin = personStore((state) => state.setLinkedin)
  const setProjects = personStore((state) => state.setProjects)
  const setWork = personStore((state) => state.setWork)

  useEffect(() => {
    const setPerson = async () => {
      const person = await handleGetPerson()
      setName(person.name)
      setEmail(person.email)
      setDevRole(person.dev_role)
      setGithub(person.github)
      setWhatsapp(person.whatsapp)
      setLinkedin(person.linkedin)
      setProjects(person.projects)
      setWork(person.works)
    }
    setPerson()
  })

  const name = personStore((state) => state.name)

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    router.events.off("routeChangeStart", handleStart);
    router.events.off("routeChangeComplete", handleComplete);
    router.events.off("routeChangeError", handleComplete);
  });
  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-space">
        <Loader />
      </div>
    );
  } else {
    return (
      <>
        <Head>
          <title>{name!}</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default appWithTranslation(App);

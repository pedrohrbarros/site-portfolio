import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Experience from "../components/Experience/index";
import { Work } from "../entities/Work";
import { personStore } from "@/hooks/usePerson";

function Experiences() {
  const { t } = useTranslation("experiences");
  const backgroundImages = ["bg-nature", "bg-financial", "bg-it"];

  const works = personStore((state) => state.works)

  return (
    <div className="pb-4">
      <Navbar page="experiences" />
      <main className="w-full h-auto min-h-[100vh] px-[6vw] py-[3vw] grid gap-y-5 grid-cols-2 grid-rows-2 place-content-center max-[1175px]:grid-cols-1 max-[1175px]:grid-rows-none max-[1175px]:gap-[8vh] max-[1175px]:px-[3vw]">
        <div className="h-auto w-auto max-w-xl flex flex-col justify-center items-start gap-7 max-[1175px]:w-full">
          <h1 className="font-h1 text-white text-6xl font-bold max-[400px]:text-4xl">
            {t("My last experiences")}
          </h1>
        </div>
        {works.map((work: Work, index: number) => (
          <div
            className="h-auto w-[90%] flex flex-col justify-center items-start gap-7 max-[1175px]:w-full"
            key={index}
          >
            <Experience
              workplace={work.workplace}
              roles={work.roles}
              backgroundImage={backgroundImages[index]}
            />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["experiences"])),
      // Will be passed to the page component as props
    },
  };
}

export default Experiences;

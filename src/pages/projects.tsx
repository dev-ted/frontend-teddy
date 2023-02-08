import Contact from "@/components/modals/Contact";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import PageLayout from "@/components/layouts/PageLayout";
import ProjectsCard from "@/components/cards/ProjectsCard";
import { client } from "@/components/utils/config";
import { useMediaQuery } from "@mui/material";
export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const matches = useMediaQuery("(max-width:769px)");
  return (
    <>
      <Head>
        <title>Frontend developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <section className="w-full h-96">
          <div className="max-w-screen-lg h-96  mt-10 mx-auto flex flex-col justify-center items-center">
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
              <div className="absolute inset-auto z-50 h-[200px] w-[32rem] -translatesss-y-1/2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 opacity-50 blur-3xl"></div>
            </div>
            <h1 className="bg-gradient-to-l -translate-y-[12.5rem] text-center grid place-items-center md:h-[100px]  px-10 font-black  from-pink-500  to-orange-400 bg-clip-text text-transparent text-6xl md:text-7xl">
              Featured Work
            </h1>
          </div>
        </section>

        <section className="  h-44 pb-20 w-full flex flex-col mt-10  gap-10 items-center  m-auto relative  ">
          <h4 className=" md:text-7xl text-2xl font-semibold">
            Want to start a{" "}
            <span className="bg-gradient-to-r  from-pink-500  to-orange-400 bg-clip-text text-transparent">
              project ?
            </span>{" "}
          </h4>
          <Contact />
        </section>

        <section className="max-w-screen-xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {projects?.map(
              ({
                description,
                id,
                desktop_image,
                mobile_image,
                name,
                link,
                github,
              }: {
                description: string;
                id: string;
                desktop_image: any;
                mobile_image: any;
                name: string;
                link: string;
                github: string;
              }) => (
                <ProjectsCard
                  key={id}
                  title={name}
                  description={description}
                  image={
                    matches
                      ? mobile_image?.asset._ref
                      : desktop_image?.asset?._ref
                  }
                  preview={link}
                  github={github}
                />
              )
            )}
          </div>
        </section>
      </PageLayout>
    </>
  );
}


  export async function getStaticProps() {
    const projects = await client.fetch(`*[_type == "projects"]`);

    return {
      props: {
        projects,
      },

      revalidate: 10,
    };
  }
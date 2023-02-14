import { Button, Text } from "@nextui-org/react";

import Contact from "@/components/modals/Contact";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import LandingHero from "@/components/heros/LandingHero";
import Link from "next/link";
import PageLayout from "@/components/layouts/PageLayout";
import ProjectsCard from "@/components/cards/ProjectsCard";
import { client } from "@/components/utils/config";
import { useMediaQuery } from "@mui/material";

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const matches = useMediaQuery("(max-width:769px)");

  return (
    <>
      <Head>
        <title>
          Teddy | Frontend Web Developer & UI/UX Designer in Johannesburg, South
          Africa
        </title>
        <meta
          name="description"
          content="Meet Teddy, a Creative Developer based in Johannesburg, South Africa dedicated to crafting immersive digital experiences on the web. With expertise in React, Next.js, UI/UX design, and Progressive Web Apps, Teddy is passionate about pushing the limits of what's possible with technology."
        />
        <meta
          name="keywords"
          content="next js,freelance, developer, freelance developer, frontend, react, frontend developer, frontend engineer,  creative, creative developer, creative engineer, tech, johannesburg, software, software developer, portfolio, frontend developer portfolio, creative developer portfolio"
        ></meta>

        {/* open grapgh and twitter card */}
        {/* create open graph tags */}
        <meta
          property="og:title"
          content=" Teddy | Frontend Web Developer & UI/UX Designer in Johannesburg, South
          Africa"
        />
        <meta
          property="og:description"
          content="Meet Teddy, a Creative Developer based in Johannesburg, South Africa dedicated to crafting immersive digital experiences on the web. With expertise in React, Next.js, UI/UX design, and Progressive Web Apps, Teddy is passionate about pushing the limits of what's possible with technology."
        />
        <meta
          name="keywords"
          content="next js,freelance, developer, freelance developer, frontend, react, frontend developer, frontend engineer,  creative, creative developer, creative engineer, tech, johannesburg, software, software developer, portfolio, frontend developer portfolio, creative developer portfolio"
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/devtedcloud/image/upload/v1675854371/frontend-teddy/68188559_bbpphr.png"
        />
        <meta property="og:url" content="https://frontendted.co.za" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frontend Teddy" />
        <meta property="og:locale" content="en_ZA" />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devted19" />
        <meta name="twitter:creator" content="@devted19" />
        <meta
          name="twitter:title"
          content=" Teddy | Frontend Web Developer & UI/UX Designer in Johannesburg, South
          Africa"
        />

        <meta
          name="twitter:description"
          content="Meet Teddy, a Creative Developer based in Johannesburg, South Africa dedicated to crafting immersive digital experiences on the web. With expertise in React, Next.js, UI/UX design, and Progressive Web Apps, Teddy is passionate about pushing the limits of what's possible with technology."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/devtedcloud/image/upload/v1675854371/frontend-teddy/68188559_bbpphr.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <LandingHero />

        <section className=" md:h-[600px] w-full flex flex-col mt-10  gap-10 items-center  m-auto relative  ">
          <h3 className="  text-4xl  md:text-9xl  tracking-wide capitalize text-center    p-12 font-black">
            {`Let's`} make your projects
            <span className="bg-gradient-to-r md:px-10 ml-2  from-pink-500  to-orange-400 bg-clip-text text-transparent">
              Pretty
            </span>
          </h3>

          <h4 className=" md:text-4xl px-5 text-2xl text-center font-semibold">
            Have an exciting{" "}
            <span className="bg-gradient-to-r  from-pink-500  to-orange-400 bg-clip-text text-transparent">
              project
            </span>{" "}
            in mind?
          </h4>
          <Contact />
        </section>
        <section className="  w-100 m-auto md:p-8  p-4">
          <div className=" py-20 max-w-screen-lg flex flex-col gap-10 m-auto md:p-4  ">
            <p className=" w-ful text-xl  font-light  ">
              Hi there! {`I'm`} Teddy, obviously ! <br />A Frontend Web
              Developer who loves to build beautiful, responsive websites. My
              expertise lies in React and Next.js, two of the most popular
              JavaScript libraries for building user interfaces. I enjoy using
              these technologies to create dynamic and engaging web experiences
              for users. With a strong focus on clean code, performance, and
              accessibility, I ensure that every project I work on is not just
              visually appealing, but also functional and accessible to all
              users.{` I'm`} always seeking new challenges and opportunities to
              improve my skills and create amazing websites.
            </p>

            <Button
              aria-label="Read more about me"
              auto
              as={Link}
              href="/about"
              className="relative rounded-lg w-20  px-20 py-4 ring-red-500/50 dark:bg-black bg-white ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
            >
              <span className="absolute  inset-px z-10 grid place-items-center rounded-lg dark:bg-black bg-white bg-gradient-to-t dark:from-neutral-800 text-black dark:text-neutral-300">
                {`Read more about me`}
              </span>
              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conics before:from-gray-200 before:via-pink-500 before:to-orange-400"
              />
            </Button>
          </div>
        </section>

        <section className="w-full">
          <div className="mx-auto  flex flex-col gap-10">
            <h4 className="md:text-8xl text-7xl text-center font-black py-20  tracking-wide ">
              Featured{" "}
              <span className="bg-gradient-to-r  from-pink-500  to-orange-400 bg-clip-text text-transparent">
                Work
              </span>
            </h4>

            <div className=" px-10 grid grid-cols-1 md:grid-cols-3 gap-20">
              {projects
                ?.slice(0, 3)
                ?.map(
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

            <div className="md:px-20 px-10 py-10">
              <Button
                auto
                as={Link}
                href="/projects"
                className="relative rounded-lg w-20  px-20 py-4 ring-red-500/50 dark:bg-black bg-white ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
              >
                <span className="absolute  inset-px z-10 grid place-items-center rounded-lg dark:bg-black bg-white bg-gradient-to-t dark:from-neutral-800 text-black dark:text-neutral-300">
                  {`View More`}
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conics before:from-gray-200 before:via-pink-500 before:to-orange-400"
                />
              </Button>
            </div>
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

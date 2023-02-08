import Contact from '@/components/modals/Contact';
import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '@/components/layouts/PageLayout'

export default function about() {
  return (
    <>
      <Head>
        <title>
          Teddy, the Creative Frontend Developer - Expert in React, Next.js,
          UI/UX, and Progressive Web Apps
        </title>
        <meta
          name="description"
          content="Meet Teddy, a Creative Developer based in Johannesburg, South Africa dedicated to crafting immersive digital experiences on the web. With expertise in React, Next.js, UI/UX design, and Progressive Web Apps, Teddy is passionate about pushing the limits of what's possible with technology."
        />
        <meta
          name="keywords"
          content="next js,freelance, developer, freelance developer, frontend, react, frontend developer, frontend engineer,  creative, creative developer, creative engineer, tech, johannesburg, software, software developer, portfolio, frontend developer portfolio, creative developer portfolio"
        ></meta>

        {/* create open graph tags */}
        <meta property="og:title" content="Teddy, the Creative Frontend Developer - Expert in React, Next.js, UI/UX, and Progressive Web Apps" />
        <meta property="og:description" content="Meet Teddy, a Creative Developer based in Johannesburg, South Africa dedicated to crafting immersive digital experiences on the web. With expertise in React, Next.js, UI/UX design, and Progressive Web Apps, Teddy is passionate about pushing the limits of what's possible with technology." />
        <meta property="og:image" content="https://res.cloudinary.com/devtedcloud/image/upload/v1675854371/frontend-teddy/68188559_bbpphr.png" />
        <meta property="og:url" content="https://frontendted.co.za" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frontend Teddy" />
        <meta property="og:locale" content="en_ZA" />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devted19" />
        <meta name="twitter:creator" content="@devted19" />
        <meta name="twitter:title" content="Teddy, the Creative Frontend Developer - Expert in React, Next.js, UI/UX, and Progressive Web Apps" />

        <meta name="twitter:description" content="Meet Teddy, a Creative Developer based in Johannesburg, South Africa dedicated to crafting immersive digital experiences on the web. With expertise in React, Next.js, UI/UX design, and Progressive Web Apps, Teddy is passionate about pushing the limits of what's possible with technology." />
        <meta name="twitter:image" content="https://res.cloudinary.com/devtedcloud/image/upload/v1675854371/frontend-teddy/68188559_bbpphr.png" />
        
        
        
        
       
        
        

      </Head>
      <PageLayout>
        <section className="w-full h-96">
          <div className="max-w-screen-lg h-96  mt-10 mx-auto flex flex-col justify-center items-center">
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
              <div className="absolute inset-auto z-50 h-[200px] w-[32rem] -translatesss-y-1/2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 opacity-50 blur-3xl"></div>
            </div>
            <h1 className="bg-gradient-to-l -translate-y-[12.5rem] text-center grid place-items-center md:h-[100px]  px-10 font-black  from-pink-500  to-orange-400 bg-clip-text text-transparent text-6xl md:text-7xl">
              A few things about me
            </h1>
          </div>
        </section>

        <section>
          <div className=" flex flex-col-reverse md:flex-row  items-center container items max-w-5xl mx-auto m-8">
            <div className="flex p-6 ">
              <div className=" w-full md:w-[600px] ">
                <h3 className="text-3xl  font-bold leading-none mb-3">
                  UI / UX Design
                </h3>
                <p className=" ">
                  I understand the importance of creating intuitive and
                  user-friendly interfaces, and I work closely with designers
                </p>

                <p>
                  With a keen eye for detail, I ensure that every element of the
                  interface is aesthetically pleasing, while also being
                  functional and easy to use. I believe that great design and
                  great technology go hand-in-hand, and I strive to strike a
                  balance between form and function in every project I work on.
                </p>

                <div className="pt-10">
                  <Contact />
                </div>
              </div>
            </div>
            <div className="">
              <Image
                src="https://res.cloudinary.com/devtedcloud/image/upload/v1658668213/interaction-design-animate_fjrarg.svg"
                alt="UX and UI Design"
                height={420}
                width={420}
              />
            </div>
          </div>
          <div className=" flex flex-col-reverse items-center md:flex-row-reverse items container max-w-5xl mx-auto m-8">
            <div className="flex p-6 ">
              <div className=" w-full md:w-[600px] ">
                <h3 className="text-3xl  font-bold leading-none mb-3">
                  Web Development
                </h3>
                <p className=" ">
                  I specialize in frontend development, using technologies like
                  HTML, CSS, JavaScript, React, and Next.js to bring designs to
                  life. My goal is to create websites that are not only
                  aesthetically pleasing, but also fast, accessible, and
                  user-friendly.
                </p>
                <p>
                  I have a strong understanding of web development best
                  practices and I strive to stay up-to-date with the latest
                  technologies and trends in the industry. Whether {`I'm `}
                  working on a small website or a complex web application, I
                  approach each project with the same level of commitment and
                  attention to detail. I believe that every website has the
                  potential to make a positive impact, and {`I'm`}
                  dedicated to helping my clients achieve their goals through
                  the power of great web development.
                </p>
                <div className="pt-10">
                  <Contact />
                </div>
              </div>
            </div>{" "}
            <div className="">
              <Image
                src="https://res.cloudinary.com/devtedcloud/image/upload/v1658670248/startup-life-animate_ltqpgk.svg"
                alt="Web Development"
                height={420}
                width={420}
              />
            </div>
          </div>
          <div className=" flex flex-col-reverse md:flex-row items-center container items max-w-5xl mx-auto m-8">
            <div className="flex p-6 ">
              <div className=" w-full md:w-[600px] ">
                <h3 className="text-3xl  font-bold leading-none mb-3">
                  Progressive Web Apps
                </h3>
                <p className=" ">
                  In addition to traditional web development, I also have
                  experience with Progressive Web Apps (PWAs). PWAs are a new
                  type of web application that aim to provide users with a
                  native app-like experience right from their browser. They are
                  fast, reliable, and work offline, making them a great option
                  for businesses looking to reach a wider audience without the
                  need for a native app.
                </p>
                <p>
                  I have a strong understanding of the key technologies and
                  concepts behind PWAs, including service workers, web manifest,
                  and push notifications. I have experience using frameworks
                  such as React and Next.js to build PWAs, and I am confident in
                  my ability to create fast, responsive, and engaging web
                  experiences for users. If {`you're`}
                  looking to bring your web application to the next level, I
                  would love to help you explore the possibilities of
                  Progressive Web Apps.
                </p>
                <div className="pt-10">
                  <Contact />
                </div>
              </div>
            </div>{" "}
            <div className="">
              <Image
                src="https://res.cloudinary.com/devtedcloud/image/upload/v1658670698/app-development-animate_sl0utz.svg"
                alt="Mobile and Web Applications"
                height={420}
                width={420}
              />
            </div>
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
      </PageLayout>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../utils/config";

export default function ProjectsCard({
  key,
  image,
  preview,
  github,
  description,
  title,

}: {
  image: string;
  preview: string;
  github: string;
  description: string;
  title: string;
  key: string;
  
}) {
  return (
    <>
      <div
        key={key}
        className="bg-neutral shadow-md   px-5 dark:border-gray-900 rounded-lg max-w-sm w-[500px] h-full flex flex-col  "
      >
        <Image
          className="object-contain h-64 w-full"
          src={urlFor(image ? image : "")?.url()}
          alt={title}
          width="200"
          height="200"
          priority
        />

        <div className="p-5 ">
          <h5 className=" font-bold text-2xl tracking-tight mb-2 ">{title}</h5>

          <p className="font-normal  mb-3">{description}</p>

          <div className=" flex flex-col  md:flex-row justify-between gap-4">
            {preview && (
              <Link
                target="_blank"
                href={preview}
                className="  font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center   "
              >
                Preview
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            )}

            {github && (
              <Link
                target="_blank"
                href={github}
                className="  border  border-neutral hover:border-orange-400 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center   "
              >
                Source Code
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

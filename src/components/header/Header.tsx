import { Navbar, useTheme } from "@nextui-org/react";

import Contact from "../modals/Contact";
import { Layout } from "./Layout";
import Link from "next/link";
import ThemeManager from "../utils/ThemeManager";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter()
  const { isDark } = useTheme();
  const navItems = [
    {
      label: "Home",
      link: "/",
      id: 1,
    },
    {
      label: "About",
      link: "/about",
      id: 2,
    },
    {
      label: "Projects",
      link: "/projects",
      id: 3,
    },
  ];

  return (
    <>
      <Layout>
        <Navbar variant="floating">
          <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
          <Navbar.Brand hideIn="xs">
            <Link
              href="/"
              className={`bg-gradient-to-r text-bold from-pink-500 font-black to-orange-400 bg-clip-text text-transparent text-xl  `}
            >
              Frontend Teddy
            </Link>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs" variant="underline">
            {navItems?.map(({ label, id, link }) => (
              <ul key={id}>
                <li>
                  <Link
                    className={`px-10 hover:text-orange-500 ${
                      router.asPath === link
                        ? "border-orange-500 rounded-sm px-10 py-2 border-b"
                        : ""
                    }`}
                    href={link}
                  >
                    {label}
                  </Link>
                </li>
              </ul>
            ))}
          </Navbar.Content>
          <Navbar.Collapse>
            <div className="flex flex-col gap-4">
              {navItems.map(({ label, id, link }) => (
                <ul key={id}>
                  <li>
                    <Link href={link}>{label}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </Navbar.Collapse>

          <div className="flex gap-5 items-center">
            <ThemeManager />
            <Contact />
          </div>
        </Navbar>
      </Layout>
    </>
  );
}

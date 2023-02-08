import { MoonIcon, SunIcon } from './Icons'

import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";

export default function ThemeManager() {
          const { setTheme } = useNextTheme();
          const { isDark, type } = useTheme();
  return (
    <span
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 cursor-pointer bg-nuetral grid place-items-center shadow-sm rounded-full"
    >
      {type === "dark" ? <SunIcon /> : <MoonIcon />}
    </span>
  );
}

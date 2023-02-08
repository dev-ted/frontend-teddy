import '@/styles/globals.css'

import { NextUIProvider, createTheme } from "@nextui-org/react";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from 'next/app'
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {

  const lightTheme = createTheme({
  type: 'light',
  theme: {
   
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    
  }
})
 return (
   <ThemeProvider
     defaultTheme="system"
     attribute="class"
     value={{
       light: lightTheme.className,
       dark: darkTheme.className,
     }}
   >
     <NextUIProvider>
       <main className={poppins.className}>
         <Component {...pageProps} />
         <Analytics />
       </main>
     </NextUIProvider>
   </ThemeProvider>
 );
}

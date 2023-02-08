import { Head, Html, Main, NextScript } from 'next/document'

import { CssBaseline } from "@nextui-org/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
        <meta
          name="google-site-verification"
          content="EP6VWzh0BkTlBj0c5iHBHkRpCrpWmDQ43L5Nix5LnS4"
        />
        <meta name="application-name" content="Frontend Teddy" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Frontend Teddy" />
        <meta name="description" content="Frontend Teddy website" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#1d1c1c" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

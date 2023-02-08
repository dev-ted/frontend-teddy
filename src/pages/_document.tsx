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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="google-site-verification" content="igKNeRPAB1hbSCqDFcJnykdzNu0dyIi0ry-kZ6HagHo" /> 
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
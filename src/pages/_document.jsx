import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="Journey" content="Travel Site" />
        <meta
          name="description"
          content="Trang web chuyên về booking du lịch"
        />
      </Head>
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}

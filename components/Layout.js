import Head from "next/head";

export default ({
  children,
  title = "Trapphusvalet",
  description = "Låt inte SD kidnappa din känsla av missnöje"
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:site_name" content="Trapphusvalet" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta
        property="og:image"
        content="https://trapphusvalet.se/thumbnail.jpg"
      /> */}
      {/* <meta
        property="og:url"
        content="https://trapphusvalet.se"
      />*/}

      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="twitter:image:alt" content="Trapphusvalet" />
      <meta name="twitter:site" content="@trapphusvalet" />
    </Head>
    {children}
  </>
);

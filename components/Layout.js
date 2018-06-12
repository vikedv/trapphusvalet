import Head from 'next/head';

export default ({
  children,
  title = 'Trapphusvalet',
  description = 'Låt inte SD kidnappa din känsla av missnöje',
}) => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
      <link
        href="https://use.typekit.net/wsv8sfc.css"
        rel="stylesheet"
      />
    </Head>
    <table>
      <tr>
        <td className="black sized" />
        <td className="purple" />
        <td className="white sized" />
      </tr>
      <tr>
        <td className="pink sized" />
        <td>
          <main>
            <div>{children}</div>
          </main>
        </td>
        <td className="orange sized" />
      </tr>
      <tr>
        <td className="white sized" />
        <td className="turquoise" />
        <td className="black sized" />
      </tr>
    </table>
    <style jsx>{`
      .sized {
        height: 1em;
        width: 1em;
      }
      @media (min-width: 600px) {
        .sized {
          height: 50px;
          width: 50px;
        }
      }
      .black {
        background-color: black;
      }
      .purple {
        background-color: #5835e5;
      }
      .white {
        background-color: white;
      }
      .pink {
        background-color: #ff0082;
      }
      .orange {
        background-color: #ff8e0a;
      }
      .white {
        background-color: white;
      }
      .turquoise {
        background-color: #00ffd7;
      }
      .black {
        background-color: black;
      }
      main {
        padding: 1em;
      }
      main > div {
        max-width: 700px;
        margin: 0 auto;
      }
    `}</style>
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      /*! Typebase.less v0.1.0 | MIT License */
      /* Setup */
      html {
        /* Change default typefaces here */
        font-family: 'objektiv-mk1', sans-serif;
        font-size: 100%;
        -webkit-font-smoothing: antialiased;
      }
      @media (min-width: 600px) {
        html {
          font-size: 137.5%;
        }
      }
      /* Copy & Lists */
      p {
        line-height: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 0;
      }
      ul,
      ol {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      ul li,
      ol li {
        line-height: 1.5rem;
      }
      ul ul,
      ol ul,
      ul ol,
      ol ol {
        margin-top: 0;
        margin-bottom: 0;
      }
      blockquote {
        line-height: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      /* Headings */
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        /* Change heading typefaces here */
        font-family: 'objektiv-mk1', sans-serif;
        margin-top: 1.5rem;
        margin-bottom: 0;
        line-height: 1.5rem;
        font-weight: 700;
      }
      h1 {
        font-size: 2rem;
        line-height: 2rem;
      }
      @media (min-width: 600px) {
        h1 {
          font-size: 4.242rem;
          line-height: 4.5rem;
        }
      }
      h2 {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
      @media (min-width: 600px) {
        h2 {
          font-size: 2.828rem;
          line-height: 3rem;
          margin-top: 3rem;
        }
      }
      h3 {
        font-size: 1.414rem;
      }
      h4 {
        font-size: 0.707rem;
      }
      h5 {
        font-size: 0.4713333333333333rem;
      }
      h6 {
        font-size: 0.3535rem;
      }
      /* Tables */
      table {
        width: 100%;
        border-spacing: 0px;
        border-collapse: collapse;
      }
      table td,
      table th {
        padding: 0;
        line-height: 33px;
      }
      /* Code blocks */
      code {
        vertical-align: bottom;
      }
      /* Leading paragraph text */
      .lead {
        font-size: 1.414rem;
      }
      /* Hug the block above you */
      .hug {
        margin-top: 0;
      }
    `}</style>
  </div>
);

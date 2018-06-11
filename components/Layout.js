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
    <div className="black" />
    <div className="purple" />
    <div className="white" />
    <div className="pink" />
    <main>{children}</main>
    <div className="orange" />
    <div className="white" />
    <div className="turquoise" />
    <div className="black" />
    <style jsx>{`
      .container {
        min-height: 100vh;
        display: grid;
        grid-template-columns: 50px auto 50px;
        grid-template-rows: 50px auto 50px;
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
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    <style global jsx>{`
      /* http://meyerweb.com/eric/tools/css/reset/
         v2.0 | 20110126
         License: none (public domain)
      */

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}</style>
  </div>
);

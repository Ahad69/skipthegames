import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class WebDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-JNSZ5HRBP9"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
        
           gtag('config', 'G-JNSZ5HRBP9');
        `}
          </Script>

          <Script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "k1393958v9");
                        `,
            }}
          />
          {/* <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5DTNFG5');`}}></Script> */}
        </Head>
        <body>
          {/* <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DTNFG5"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default WebDocument;

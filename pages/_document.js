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

          {/*<Script
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
          />*/}
        </Head>
        <body>
          {/* <Script type="text/javascript">
            {`	atOptions = {
		'key' : '76973f661d91255defc25e9ac01eed46',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/76973f661d91255defc25e9ac01eed46/invoke.js"></scr' + 'ipt>');`}
          </Script> */}
          <Main />
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}
export default WebDocument;
//
//http://localhost:5000

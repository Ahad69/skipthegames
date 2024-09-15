import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { createContext, useState } from "react";
import "react-quill/dist/quill.snow.css";

export const MyContext = createContext();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [blogcurrent, setBlogCurrent] = useState(1);
  const [catKey, setCatKey] = useState("");

  return (
    <SessionProvider session={session}>
      <MyContext.Provider
        value={{ blogcurrent, setBlogCurrent, catKey, setCatKey }}
      >
        {/* amader ipp  */}
        {/*<Script
          type="application/javascript"
          src="https://mzifx.ujscdn.com/ipp.js?id=3yFZb7MysUWZY7unZUeV2A&sub_id="
        ></Script>
        <Script
          type="application/javascript"
          src="https://mzifx.nxt-psh.com/ps/ps.js?id=D-HxyA6RB0m9rBd4EGpOvw"
        ></Script>*/}

        {/* boss push ad  */}
        {/*<Script
          type="application/javascript"
          src="https://bizhf.nxt-psh.com/ps/ps.js?id=49c_Gv6kp02qi7om3OJrlw"
        ></Script>*/}

        {/* now  */}
        <Script
          type="application/javascript"
          src="https://stumt.nxt-psh.com/ps/ps.js?id=ZlQAVEac70-Vs_K9IClrlg"
        ></Script>
        <Script
          type="application/javascript"
          src="https://stumt.ujscdn.com/ipp.js?id=5RiCTtRGgEi3dcYaD3gc-w&sub_id="
        ></Script>

        <Component {...pageProps} />
      </MyContext.Provider>
    </SessionProvider>
  );
}

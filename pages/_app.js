import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { createContext, useState } from "react";

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
        <Script
          type="application/javascript"
          src="https://mzifx.ujscdn.com/ipp.js?id=3yFZb7MysUWZY7unZUeV2A&sub_id="
        ></Script>

        {/* boss push ad  */}
        {/* <Script
          type="application/javascript"
          src="https://bizhf.nxt-psh.com/ps/ps.js?id=49c_Gv6kp02qi7om3OJrlw"
        ></Script> */}

        <Component {...pageProps} />
      </MyContext.Provider>
    </SessionProvider>
  );
}

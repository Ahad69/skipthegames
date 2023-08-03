import Head from "next/head";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/component/footer/footer"));
import styles from "../styles/moduleCss/home.module.css";
import Script from "next/script";
const Index = dynamic(() => import("@/component/countries"));
const Header2 = dynamic(() => import("@/component/header/header2"));
const Search = dynamic(() => import("@/component/search/search"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Skip The Games</title>
        <meta name="description" content="Ad Back List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="google-site-verification"
          content="TYiSHLlk3Y-BJ095SPo4lMOG4hSRTUyxfIKdLR-_sfs"
        /> */}
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="icon" href="/logo.png" /> */}
        <meta
          name="google-site-verification"
          content="LY6Z48B7wRP_Hrd7cDAs3wQjh83MGwWSv8hHQd6Ue6o"
        />
      </Head>

      <main className={styles.main}>
        <Header2 />
        <div className={styles.container}>
          <Search />
          <Index />
        </div>

        <Footer />
      </main>
    </>
  );
}

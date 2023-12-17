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
        <title>
          Skip the Games Your Go To Destination for Fun and female escort 
        </title>
        <meta
          name="description"
          content="Find the ultimate pleasure without the hassle. Skip the games and discover top-notch female escorts in CT, N.C, NJ, and more. 
Indulge in a discreet and unforgettable experience with Escort Dude. Explore Tryst San Antonio escorts for an adventure like no other. 
Satisfaction guaranteed!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="google-site-verification"
          content="TYiSHLlk3Y-BJ095SPo4lMOG4hSRTUyxfIKdLR-_sfs"
        /> */}
        <meta
          name="title"
          content="Skip the Games Your Go To Destination for Fun and female escort "
        />
        <meta
          name="keywords"
          content="Skip the Games, female escort, Tryst San Antonio escorts, skipthe games, skip yhe games, akip the games"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="icon" href="/logo.png" /> */}
        <meta
          name="google-site-verification"
          content="LY6Z48B7wRP_Hrd7cDAs3wQjh83MGwWSv8hHQd6Ue6o"
        />
        <meta name="tlsdk" content="90c01e78bd56459db4fa068765c5fdeb"></meta>
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

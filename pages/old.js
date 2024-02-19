import Link from "next/link";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";
import style from "../styles/moduleCss/services.module.css";
import Head from "next/head";
import category from "../public/category.json";
import axios from "axios";
import dynamic from "next/dynamic";
import Drawer from "../component/drawer/drawer";
import Script from "next/script";
const Footer = dynamic(() => import("@/component/footer/footer2"));

const Name = () => {
  const router = useRouter();
  const { city, Headers } = Drawer(router.query);
  const [links, setLinks] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get(
        `https://skipthegames-backend.vercel.app/api/links`,
        {
          method: "GET",
        }
      );
      const data = response.data.links[0];

      setLinks(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  let content;
  if (router.query.category == undefined) {
    content = (
      <div>
        <div className="btn  bg-transparent border-0 loading flex m-auto">
          loading
        </div>
      </div>
    );
  }

  if (router.query.category) {
    if (router.query?.category?.[0] == undefined) {
      router.push("/");
    } else {
      content = (
        <>
          <div className="bg-white text-black flex flex-wrap items-center px-0 sm:px-32 ">
            <p className="text-red-600 font-bold">Nearest Cities : </p>
            {city?.map((a) => (
              <p className=" ml-2 underline" key={a._id}>
                <Link href={`/${a}`}>{a}</Link>
              </p>
            ))}
          </div>
          <div className={style.container}>
            <div className="flex  flex-col">
              {category?.slice(0, 3).map((a) => (
                <div key={a.name}>
                  <h2 className={style.cateTitlte}> {a.name} </h2>

                  <div className={style.categoryParent}>
                    {a.children?.map((b) => (
                      <ul className={style.subCategoryList} key={b.name}>
                        <li>
                          <Link
                            href={`/post/${router?.query?.category}/${a.name}/${b.name}`}
                          >
                            {b.name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex  flex-col">
              {category?.slice(3, 5).map((a) => (
                <div key={a.name}>
                  <h2 className={style.cateTitlte}> {a.name} </h2>

                  <div className={style.categoryParent}>
                    {a.children?.map((b) => (
                      <ul className={style.subCategoryList} key={b.name}>
                        <li>
                          <Link
                            href={`/post/${router?.query?.category}/${a.name}/${b.name}`}
                          >
                            {b.name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex  flex-col">
              {category?.slice(5, 7).map((a) => (
                <div key={a.name}>
                  <h2 className={style.cateTitlte}> {a.name} </h2>

                  <div className={style.categoryParent}>
                    {a.children?.map((b) => (
                      <ul className={style.subCategoryList} key={b.name}>
                        <li>
                          <Link
                            href={`/post/${router?.query?.category}/${a.name}/${b.name}`}
                          >
                            {b.name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex  flex-col">
              {category?.slice(7, 10).map((a) => (
                <div key={a.name}>
                  <h2 className={style.cateTitlte}> {a.name} </h2>

                  <div className={style.categoryParent}>
                    {a.children?.map((b) => (
                      <ul className={style.subCategoryList} key={b.name}>
                        <li>
                          <Link
                            href={`/post/${router?.query?.category}/${a.name}/${b.name}`}
                          >
                            {b.name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="bg-gray-200 text-black">
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>
          {router?.query?.category &&
            `Backpage ${router?.query?.category} | ${router?.query?.category} Escorts
          | Erotic Massage in ${router?.query?.category}`}
        </title>

        <meta
          name="description"
          content={
            router?.query?.category &&
            `${router?.query?.category} Backpage | After backpage, SKIPTHEGAMES is the most popular classified site for ${router?.query?.category} Escorts. 
SKIPTHEGAMES is a free adult entertainment site for ${router?.query?.category} Escorts or Hardcore in ${router?.query?.category}.
Hookup hotshot and erotic massage services in ${router?.query?.category} on SKIPTHEGAMES.
Explore SKIPTHEGAMES.com now!`
          }
        />
        <meta
          name="keywords"
          content={
            router?.query?.category &&
            `Backpages ${router?.query?.category}, 
            Bedpage ${router?.query?.category}, 
            back pages ${router?.query?.category}, 
            ${router?.query?.category} Escort, 
            escorts ${router?.query?.category}, 
            Escorts in ${router?.query?.category}, 
            independent escort ${router?.query?.category}, 
            Erotic massage in ${router?.query?.category}, 
            Hookup in ${router?.query?.category}, 
            hookup hotshot full, 
            hooker girls, 
            hookers online, 
            online prostitute, 
            Monterey escort`
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Headers />
      {links ? (
        <div className="flex justify-around text-xl p-2 text-blue-600">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${links?.shemale}`}
          >
            Shemale Escorts
          </Link>{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${links?.meet}`}
          >
            Meet & Fuck
          </Link>{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${links?.live}`}
          >
            Live Escorts
          </Link>{" "}
        </div>
      ) : (
        <div className="flex justify-around text-xl p-2 text-blue-600">
          <Link href={`#`}>Shemale Escorts</Link>{" "}
          <Link href={`#`}>Meet & Fuck</Link>{" "}
          <Link href={`#`}>Live Escorts</Link>{" "}
        </div>
      )}
      {content}
      {/*<Script
        type="application/javascript"
        src="https://bizhf.nxt-psh.com/ps/ps.js?id=49c_Gv6kp02qi7om3OJrlw"
      ></Script>*/}
      <Footer></Footer>
    </div>
  );
};

export default Name;

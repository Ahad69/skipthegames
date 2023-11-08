import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import styles from "../../styles/moduleCss/home.module.css";
import { useRouter } from "next/router";

const Header2 = () => {
  const router = useRouter();

  return (
    <div>
      <div className="navbar bg-gray-50 w-full sm:w-4/6 sm:m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="https://adbacklist.com/blogs">Blogs</Link>
              </li>
                    <li>
                <Link href="https://adbacklist.com/login">Login/SignUp</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h1 className={styles.title}>
              {" "}
              <Link href="/">SKIPTHEGAMES</Link>{" "}
            </h1>
            <Link href={"https://adbacklist.com/user/post"}>
              <button className={styles.postButton}> + Add Post </button>
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <ul className={styles.menu}>
            <li>
              <Link href="https://adbacklist.com/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="https://adbacklist.com/login">Login/SignUp</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header2;

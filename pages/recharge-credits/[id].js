import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Header = dynamic(() => import("@/component/header/header"));
const Footer = dynamic(() => import("@/component/footer/footer2"));
import style from "../../styles/moduleCss/credit.module.css";
import axios from "axios";
import User from "@/component/user";
import Link from "next/link";

const Credits = () => {
  const [amount, setAmount] = useState(10);
  const [loading, setLoading] = useState(false);
  const usersStringfy = Cookies.get("token");
  const { users } = User();
  const router = useRouter();
  const id = router?.query?.id;

  useEffect(() => {
    if (!id) {
      return;
    }
    if (!users?._id) {
      return;
    }
    if (users?._id !== id) {
      Cookies.remove("token");
      router.push("/login");
    }
  }, [id]);

  let requested = false;

  async function recharge(e) {
    e.preventDefault();
    setLoading(true);
    if (requested) return;
    requested = true;
    try {
      const response = await axios.post(
        `https://api3.adbacklist.com/api/recharge/${id}`,
        { amount },
        {
          headers: {
            authorization: `Bearer ${usersStringfy}`,
          },
        }
      );
      const data = response.data;

      setLoading(false);
      if (data?.redirectURI) {
        location.href = data.redirectURI;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // async function addCredit(event) {
  //   setLoading(true)
  //   event.preventDefault();
  //   const data = {
  //     date,
  //     amount,
  //     userId: users?._id,
  //     email: users?.email,
  //     invoice: randomnum,
  //   };
  //   await axios
  //     .post("https://api3.adbacklist.com/api/transaction", data)

  //     .then((response) => {
  //       if (response.data.status == "success") {
  //         recharge();
  //       } else {
  //         console.log(response);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="bg-gray-200 h-screen">
      <Header></Header>
      <div>
        <div className="bg-black mx-auto text-white w-4/5 mt-10 p-2 rounded  shadow-lg shadow-blue-500/50 flex justify-between">
          <span className="m-auto">
            <li className="hover:text-blue-400 text-gray-300 font-bold hover:underline list-none inline">
              Buy Credits
            </li>

            <Link
              href={"/dashboard/profile"}
              className="ml-5 sm:ml-16 hover:text-blue-400 font-bold hover:underline"
            >
              My Account
            </Link>
            <Link
              href={"/support"}
              className="ml-5 sm:ml-16  hover:text-blue-400  font-bold hover:underline"
            >
              Support
            </Link>
            <Link
              href={"/verify"}
              className="ml-5 sm:ml-16  hover:text-blue-400  font-bold hover:underline"
            >
              Verify
            </Link>
          </span>
        </div>

        <div className="w-4/5 mx-auto mt-5">
          <h1 className="text-2xl font-bold">
            Your Current Account Balance : $ {users?.credit?.toFixed(2)}
          </h1>
          <p>
            Add Credits in your Skipthegames account to post & upgrade your Ad.{" "}
            <br />
            After one ads promotion, remaining credits will be still available
            in your account for feature ads promotions!
          </p>
        </div>

        <form onSubmit={recharge}>
          <div className={style.container}>
            <h1 className="text-2xl text-black font-bold mb-5">
              Recharge Credits -
            </h1>
            <div>
              <h1 className="text-lg text-black">Select Amount</h1>
              <input
                className="p-1 bg-gray-50 text-black border rounded select-info w-full"
                placeholder="Input Amount"
                required
                type="number"
                min={10}
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
            <small className="text-red-400">
              Minimum deposit amount is $10
            </small>

            <div>
              <label className="cursor-pointer label flex gap-2 justify-start items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info"
                  required
                />
                <Link
                  href="/terms"
                  className="sm:text-lg  text-sm hover:underline hover:text-blue-600"
                >
                  I agree to Terms and Conditions
                </Link>
              </label>
            </div>
            {loading ? (
              <button className="px-10 bg-red-600 p-2 text-white font-bold rounded hover:bg-blue-400">
                Submitting...
              </button>
            ) : (
              <button className="px-10 bg-red-600 p-2 text-white font-bold rounded hover:bg-blue-400">
                Submit
              </button>
            )}
          </div>
        </form>
        <div className="sm:w-6/12 mx-5 sm:m-auto bg-white p-5">
          <div className="flex items-center">
            <p className="text-green-500 text-2xl font-bold">Bonus Offers</p>
            <img className="w-[40px]" src="/rose.gif" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              onClick={() => setAmount(100)}
              className="border  border-2 font-bold text-lg text-black border-sky-500 border-dotted  text-normal px-1 rounded flex items-center gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-info"
                required
                checked={amount == 100}
              />
              <p>Diposit $100 to get $120</p>
            </button>
            <button
              onClick={() => setAmount(200)}
              className="border  border-2 font-bold text-lg text-black border-sky-500 border-dotted  text-normal px-1 rounded flex items-center gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-info"
                required
                checked={amount == 200}
              />
              <p>Diposit $200 to get $250 </p>
            </button>
            <button
              onClick={() => setAmount(500)}
              className="border  border-2 font-bold text-lg text-black border-sky-500 border-dotted  text-normal px-1 rounded flex items-center gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-info"
                required
                checked={amount == 500}
              />
              <p>Diposit $500 to get $650</p>
            </button>
            <button
              onClick={() => setAmount(1000)}
              className="border  border-2 font-bold text-lg text-black border-sky-500 border-dotted  text-normal px-1 rounded flex items-center gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-info"
                required
                checked={amount == 1000}
              />
              <p>Diposit $1000 to get $1500</p>
            </button>
          </div>
        </div>
      </div>
      <div className="border-4 rounded border-dashed border-green-600 sm:mt-10 mt-10  mx-auto w-3/5 p-5">
        <h1 className="text-xl font-bold">How do I buy Bitcoin ?</h1>
        <p>You can buy Bitcon from several place:</p>
        <div>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white text-normal py-1 px-3 rounded">
            <a
              href="https://www.youtube.com/watch?v=HK57o2JQDeI"
              target="_blank"
            >
              Cashapp
            </a>
          </button>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white text-normal py-1 px-3 rounded ml-5">
            <a href="https://www.coinbase.com/signin" target="_blank">
              Coinbase
            </a>
          </button>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white text-normal py-1 px-3 rounded ml-5">
            <a href="https://abra.com/" target="_blank">
              abra.com
            </a>
          </button>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white text-normal py-1 px-3 rounded ml-5">
            <a href="https://bitcoin.com/" target="_blank">
              bitcoin.com
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Credits;

import Link from "next/link";
import React from "react";
import data from "../../public/usa.json";
import styles from "../../styles/moduleCss/home.module.css";

const Usa = () => {
  return (
    <div>
      {data.map((a) => (
        <div id="United%20States" key={a._id}>
          <h1 className={`text-lg uppercase font-bold text-white ${a.name}`}>
            {a.name}
          </h1>
          <div className={styles.countryBox}>
            {a?.children?.map((b) => (
              <div key={b._id}>
                <h1 className="font-bold">{b.name}</h1>
                {b?.children?.map((c) => (
                  <ul key={c._id}>
                    <li className="item text-yellow-600 hover:underline mt-3">
                      <Link
                        href={`/${c?.name}?state=${b.name}`}
                        className="text-decoration-none m-2  py-2"
                      >
                        {c.name}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Usa;

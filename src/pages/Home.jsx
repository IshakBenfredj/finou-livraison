/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import limg from "../assets/landing.png";
import simg from "../assets/services.png";
import underline from "../assets/underline.svg";
import services, { translations } from "../constants";

export default function Home({ langue }) {
  const t = translations[langue];

  function highlightFinOu(paragraph) {
    const wordToHighlight = "finOu";

    const highlightedParagraph = paragraph.replace(
      new RegExp(wordToHighlight, "g"),
      `<span class="text-yellow-400">${wordToHighlight}</span>`
    );

    return <span dangerouslySetInnerHTML={{ __html: highlightedParagraph }} />;
  }

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="grid md:grid-cols-2 md:py-16 pt-24 bg-gradient-to-tr from-yellow-500 to-gray-950 mb-10 md:px-0 px-4 to-70%">
        <div className="flex justify-center md:items-center items-start md:order-1 order-2">
          <img src={limg} alt="limg" className="w-full" />
        </div>
        <div className="flex items-center justify-center md:order-2 order-1">
          <div>
            <p className="text-white text-lg mb-2">{t.welcomeMessage}</p>
            <h1 className="text-yellow-400 font-bold md:text-5xl text-4xl">
              FinOu Livraison
            </h1>
            <p className="md:w-2/3 mt-4 text-gray-300">
              {highlightFinOu(t.withFinOu)}
            </p>
            <p className="md:w-2/3 mt-[2px] text-gray-300">{highlightFinOu(t.urgentOrder)}</p>
            <div className="mt-5 flex items-center gap-8">
              <Link className="btn" to={"/order"}>
                {t.orderNow}
              </Link>
              <a href="#services" className="btn-outline">
                {t.ourServices}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="md:px-0 px-4">
        <h1 className="text-center font-bold text-3xl text-gray-950 dark:text-white relative w-fit mx-auto md:mb-6 mb-12">
          🛵 {highlightFinOu(t.deliveryService)}
          <img src={underline} alt="" className="absolute w-1/2" />
        </h1>
        <div className="grid md:grid-cols-2 items-center pb-10">
          <div className="md:order-1 order-2">
            <img src={simg} alt="" className="w-11/12" />
          </div>
          <div className="space-y-2 md:order-2 order-1">
            {services[langue].map((s, i) => (
              <p
                key={i}
                className={`p-2 md:w-2/3 bg-gray-300 dark:bg-gray-800 text-gray-950 dark:text-white text-[14px] border-yellow-500 ${
                  langue === "ar" ? "pr-4 border-r-4" : "pl-4 border-l-4"
                }`}
              >
                {s}
              </p>
            ))}
            <Link className="btn block w-fit mt-10" to={"/order"}>
              {t.orderNow}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

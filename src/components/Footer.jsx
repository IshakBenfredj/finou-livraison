import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaSnapchatSquare } from "react-icons/fa";
import { translations } from "../constants";
import Profile from "./Profile";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Footer({ langue, setLangue, user, setUser }) {
  const t = translations[langue];
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      {openProfile && (
        <Profile
          setOpenProfile={setOpenProfile}
          langue={langue}
          setLangue={setLangue}
          user={user}
          setUser={setUser}
        />
      )}
      <footer className="grid md:grid-cols-3 items-center bg-gray-800 px-16 py-8 md:gap-0 gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={logo} alt="Logo" className="w-64" />
          <Link className="btn" to={"/order"}>
            {t.orderNow}
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="md:block flex items-center justify-center flex-col md:text-start text-center">
            <h1 className="font-bold text-yellow-500">{t.contactUs}</h1>
            {t.phoneNumbers.map((number, index) => (
              <a
                key={index}
                style={{ direction: "ltr" }}
                href={`tel:${number.replace(/\s+/g, "")}`}
                className="text-white font-semibold text-end md:text-xs text-base block p-3 transition-all hover:text-yellow-400"
              >
                {number}
              </a>
            ))}
            <a
              style={{ direction: "ltr" }}
              className="text-white flex items-center gap-2 font-semibold text-end md:text-xs text-base p-3 transition-all hover:text-yellow-400"
              href="https://www.snapchat.com/add/finou_livraison?share_id=WRkDCa_TvWI&locale=fr-FR"
            >
              <span>{t.snapchat}</span>
              <FaSnapchatSquare className="text-yellow-500" />
            </a>
            <a
              style={{ direction: "ltr" }}
              className="text-white flex items-center gap-2 font-semibold text-end md:text-xs text-base p-3 transition-all hover:text-yellow-400"
              href="https://www.facebook.com/profile.php?id=61560248804340&mibextid=ZbWKwL"
            >
              <span>{t.facebook}</span>
              <FaFacebook className="text-blue-600" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="md:block flex items-center justify-center flex-col md:text-start text-center">
            <h1 className="font-bold text-yellow-500">{t.quickLinks}</h1>
            <button
              className="text-white font-semibold md:text-xs text-base block p-3 transition-all hover:text-yellow-400"
              onClick={() => setOpenProfile(true)}
            >
              {t.profile}
            </button>
            <Link
              className="text-white font-semibold md:text-xs text-base block p-3 transition-all hover:text-yellow-400"
              to={"/order"}
            >
              {t.orderNow}
            </Link>
            <Link
              className="text-white font-semibold md:text-xs text-base block p-3 transition-all hover:text-yellow-400"
              to={"/my-orders"}
            >
              {t.myOrders}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

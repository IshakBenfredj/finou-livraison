/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { IoCloseCircleOutline } from "react-icons/io5";
import Profile from "./Profile";
import Theme from "./Theme";

export default function Navbare({ langue, setLangue, user, setUser }) {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = useLocation().pathname;

  // Language translations
  const translations = {
    ar: {
      home: "الرئيسية",
      profile: "الملف الشخصي",
      orderNow: "أطلب الآن",
      myOrders: "طلباتي",
      contactUs: "إتصل بنا",
    },
    fr: {
      home: "Accueil",
      profile: "Profil",
      orderNow: "Commander",
      myOrders: "Mes commandes",
      contactUs: "Contactez-nous",
    },
  };

  const t = translations[langue] || translations.ar;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <header
        className={`md:px-24 px-8 h-16 flex justify-between md:justify-around transition-all duration-300 items-center fixed z-40 top-0 left-0 right-0 ${
          (scrolled || pathname !== "/") && "bg-gray-950"
        }`}
      >
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <nav
          className={`flex items-center z-50 md:flex-row flex-col md:relative md:bg-transparent md:dark:bg-transparent bg-gray-500 dark:bg-gray-800 absolute top-0 right-0 md:w-auto w-2/3 md:h-auto h-screen md:justify-normal justify-center md:translate-x-0 ${
            !open ? "translate-x-full" : "translate-x-0"
          } transition-all`}
        >
          <IoCloseCircleOutline
            className="md:hidden text-white absolute top-4 left-4 cursor-pointer"
            size={40}
            onClick={() => setOpen(false)}
          />
          <NavLink
            className="text-white font-semibold md:text-xs text-base md:p-3 p-6 transition-all hover:text-yellow-400"
            to={"/"}
            onClick={() => setOpen(false)}
          >
            {t.home}
          </NavLink>
          <button
            onClick={() => {
              setOpenProfile(true), setOpen(false);
            }}
            className="text-white font-semibold md:text-xs text-base md:p-3 p-6 transition-all hover:text-yellow-400"
          >
            {t.profile}
          </button>
          <NavLink
            className="text-white font-semibold md:text-xs text-base md:p-3 p-6 transition-all hover:text-yellow-400"
            to={"/order"}
            onClick={() => setOpen(false)}
          >
            {t.orderNow}
          </NavLink>
          <NavLink
            className="text-white font-semibold md:text-xs text-base md:p-3 p-6 transition-all hover:text-yellow-400"
            to={"/my-orders"}
            onClick={() => setOpen(false)}
          >
            {t.myOrders}
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Theme />
          <a
            href="tel:0559705247"
            className="text-gray-950 flex items-center gap-2 bg-yellow-400 transition-all hover:bg-yellow-300 font-bold text-xs py-2 px-2 md:px-4 rounded-lg "
          >
            <FaPhone className="md:text-base text-lg" />
            <span className="hidden md:block">{t.contactUs}</span>
          </a>
          <TbMenuDeep
            className="md:hidden text-white cursor-pointer"
            size={36}
            onClick={() => setOpen(!open)}
          />
        </div>
      </header>
    </>
  );
}

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Input from "./Input";
import Langue from "./Langue";
import { toast } from "react-toastify";
import { translations } from "../constants";

export default function Profile({
  setOpenProfile,
  langue,
  setLangue,
  user,
  setUser,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [langueS, setLangueS] = useState("");

  useEffect(() => {
    setLangueS(langue);
    if (user) {
      setName(user.name);
      setPhone(user.phone);
      setAddress(user.address);
    }
  }, [user, langue]);

  const handleSubmit = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        phone,
        address,
      })
    );
    setUser({
      name,
      phone,
      address,
    });
    localStorage.setItem("langue", langueS);
    setLangue(langueS);
    toast.success(translations[langue].saveChanges);
    setOpenProfile(false);
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-50 flex justify-center items-center ${
        langue === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="md:w-1/2 w-[90%] h-fit bg-white dark:bg-gray-900 p-2 rounded-lg">
        <h1 className="text-center font-bold mb-4 dark:text-white">
          {translations[langue].profile}
        </h1>
        <Input
          label={translations[langue].fullName}
          value={name}
          setValue={setName}
        />
        <Input
          label={translations[langue].phoneNumber}
          value={phone}
          setValue={setPhone}
          isPhone
        />
        <Input
          label={translations[langue].address}
          placeholder={translations[langue].address}
          value={address}
          setValue={setAddress}
        />
        <Langue value={langueS} setValue={setLangueS} langue={langue} />
        <div className="mt-4 flex items-center gap-4">
          <button className="btn" onClick={handleSubmit}>
            {translations[langue].saveChanges}
          </button>
          <button
            className="btn-outline text-gray-950 dark:text-white"
            onClick={() => setOpenProfile(false)}
          >
            {translations[langue].cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

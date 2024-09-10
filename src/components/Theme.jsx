import { useEffect, useState } from "react";
import Switch from "react-switch";
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

export default function Theme() {
  const [checked, setChecked] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setChecked(theme && theme === "dark" ? true : false);
    if (!theme || theme === 'dark') {
      document.body.classList.add("dark");
      setChecked(true)
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const handleTheme = (checked) => {
    setChecked(checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
    if (checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <Switch
      onChange={handleTheme}
      checked={checked}
      onColor="#ca8a04"
      checkedIcon={<IoMdSunny className="h-full p-1 w-full mr-6" size={30} />}
      uncheckedIcon={<IoIosMoon className="h-full p-1" size={30} />}
      className="z-30 relative"
    />
  );
}

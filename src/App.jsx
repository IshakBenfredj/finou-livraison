import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbare from "./components/Navbare";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Order from "./pages/Order";
import MyOrders from "./pages/MyOrders";
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [langue, setLangue] = useState("ar");

  useEffect(() => {
    const currentLang = localStorage.getItem("langue");
    const storedUser = localStorage.getItem("user");
    if (currentLang) {
      setLangue(currentLang);
    } else {
      localStorage.setItem("langue", "ar");
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (
    user &&
    user.name === import.meta.env.VITE_FINOU &&
    user.phone === import.meta.env.VITE_PHONE
  ) {
    return <Dashboard setUser={setUser} />;
  } else {
    return (
      <div style={{ direction: langue === "ar" ? "rtl" : "ltr" }}>
        <Navbare
          langue={langue}
          setLangue={setLangue}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home langue={langue} />} />
          <Route
            path="/order"
            element={<Order langue={langue} user={user} />}
          />
          <Route path="/my-orders" element={<MyOrders langue={langue} />} />
        </Routes>
        <Footer
          langue={langue}
          setLangue={setLangue}
          user={user}
          setUser={setUser}
        />
      </div>
    );
  }
}

export default App;

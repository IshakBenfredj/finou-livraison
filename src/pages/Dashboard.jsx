import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import supabase from "../supabase";
import underline from "../assets/underline.svg";
import AdminOrder from "../components/AdminOrder";
import { FaSearch } from "react-icons/fa";
import Input from "../components/Input";

// eslint-disable-next-line react/prop-types
export default function Dashboard({ setUser }) {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all', 'confirmed', 'waiting'
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("demands")
        .select("*")
        .order("created_at", { ascending: false });

      setLoading(false);

      if (error) {
        toast.error("حدث خطأ أثناء جلب الطلبيات. الرجاء المحاولة مرة أخرى.");
      } else {
        setOrders(data);
      }
    };

    fetchOrders();
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.name.toLowerCase().includes(searchText.toLowerCase()) ||
      order.phone.toLowerCase().includes(searchText.toLowerCase()) ||
      order.address.toLowerCase().includes(searchText.toLowerCase());

    if (filter === "confirmed") return !order.state && matchesSearch;
    if (filter === "waiting") return order.state && matchesSearch;
    return matchesSearch;
  });

  return (
    <div
      className="py-10 bg-white dark:bg-gray-950 min-h-screen"
      style={{ direction: "rtl" }}
    >
      <button
        className="w-fit mx-auto text-red-500 block mb-10"
        onClick={logout}
      >
        تسجيل الخروج
      </button>
      <h1 className="text-center font-bold text-3xl text-gray-950 dark:text-white relative w-fit mx-auto md:mb-8 mb-12">
        جميع الطلبيات
        <img src={underline} alt="" className="absolute w-1/2" />
      </h1>
      <div className="flex gap-1 justify-center items-center">
        <Input
          placeholder={"إبحث عن عميل"}
          value={searchText}
          setValue={setSearchText}
        />
        <button className="bg-yellow-600 rounded-lg p-3 mb-3">
          <FaSearch size={25} />
        </button>
      </div>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "btn" : "btn-outline"}
        >
          الكل
        </button>
        <button
          onClick={() => setFilter("confirmed")}
          className={`mx-2 ${filter === "confirmed" ? "btn" : "btn-outline"}`}
        >
          المؤكدة
        </button>
        <button
          onClick={() => setFilter("waiting")}
          className={filter === "waiting" ? "btn" : "btn-outline"}
        >
          قيد الانتظار
        </button>
      </div>
      {loading ? (
        <div className="w-full px-4 py-16 flex justify-center items-center">
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            جاري تحميل الطلبيات ...
          </h1>
        </div>
      ) : !filteredOrders.length ? (
        <div className="w-full px-4 py-16 flex justify-center items-center">
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            لا توجد طلبيات
          </h1>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:px-24 px-4 gap-3 items-start">
          {filteredOrders.map((order) => (
            <AdminOrder
              order={order}
              key={order.id}
              orders={orders}
              setOrders={setOrders}
            />
          ))}
        </div>
      )}
    </div>
  );
}

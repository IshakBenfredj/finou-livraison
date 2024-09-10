/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import supabase from "../supabase";
import underline from "../assets/underline.svg";
import UserOrder from "../components/UserOrder";
import { translations } from "../constants";

export default function MyOrders({ langue }) {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const t = translations[langue];

  useEffect(() => {
    const fetchOrders = async () => {
      const demandIds = JSON.parse(localStorage.getItem("userDemands")) || [];

      if (demandIds.length === 0) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("demands")
        .select("*")
        .in("id", demandIds);

      setLoading(false);

      if (error) {
        toast.error(t.getError);
      } else {
        setOrders(data);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="py-24 bg-white dark:bg-gray-950 min-h-screen">
      <h1 className="text-center font-bold text-3xl text-gray-950 dark:text-white relative w-fit mx-auto md:mb-6 mb-12">
        {t.myOrdersTitle}
        <img src={underline} alt="" className="absolute w-1/2" />
      </h1>
      <p className="bg-red-300 text-red-700 p-2 rounded-lg my-16 w-fit md:mx-24 mx-4">
        {t.cancellationNote}
      </p>
      {loading ? (
        <div className="w-full px-4 py-16 flex justify-center items-center">
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            {t.loadingOrders}
          </h1>
        </div>
      ) : !orders.length ? (
        <div className="w-full px-4 py-16 flex justify-center items-center">
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            {t.noOrders}
          </h1>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:px-24 px-4 gap-3 items-start">
          {orders.map((order) => (
            <UserOrder
              order={order}
              key={order.id}
              orders={orders}
              setOrders={setOrders}
              langue={langue}
            />
          ))}
        </div>
      )}
    </div>
  );
}

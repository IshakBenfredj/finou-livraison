import { toast } from "react-toastify";
import supabase from "../supabase";
import { translations } from "../constants"; // Import the translations object

/* eslint-disable react/prop-types */
export default function UserOrder({ order, orders, setOrders, langue }) {
  const translate = (key) => translations[langue][key]; // Translation function

  const deleteOrder = async () => {
    const confirmDelete = confirm(translate("confirmDelete"));
    if (confirmDelete) {
      const { error } = await supabase
        .from("demands")
        .delete()
        .eq("id", order.id);

      if (error) {
        toast.error(translate("deleteError"));
      } else {
        toast.success(translate("deleteSuccess"));

        setOrders(orders.filter((o) => o.id !== order.id));

        const existingDemands =
          JSON.parse(localStorage.getItem("userDemands")) || [];
        const updatedDemands = existingDemands.filter((id) => id !== order.id);
        localStorage.setItem("userDemands", JSON.stringify(updatedDemands));
      }
    }
  };

  return (
    <div
      key={order.id}
      className="space-y-2 bg-gray-300 dark:bg-gray-800 text-gray-950 dark:text-white p-3 rounded-lg"
    >
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          {translate("name")}:
        </span>{" "}
        {order.name}
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          {translate("phone")}:
        </span>{" "}
        <a href={`tel:${order.phone}`} className="underline">
          {order.phone}
        </a>
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          {translate("address")}:
        </span>{" "}
        {order.address}
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          {translate("category")}:
        </span>{" "}
        {order.category}
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          {translate("products")}:
        </span>{" "}
        {order.products.join(", ")}
      </p>
      {order.receiverName && (
        <p>
          <span className="text-yellow-700 dark:text-yellow-500">
            {translate("receiverName")}:
          </span>{" "}
          {order.receiverName}
        </p>
      )}
      {order.receiverPhone && (
        <p>
          <span className="text-yellow-700 dark:text-yellow-500">
            {translate("receiverPhone")}:
          </span>{" "}
          <a href={`tel:${order.receiverPhone}`} className="underline">
            {order.receiverPhone}
          </a>
        </p>
      )}
      {order.receiverAddress && (
        <p>
          <span className="text-yellow-700 dark:text-yellow-500">
            {translate("receiverAddress")}:
          </span>{" "}
          {order.receiverAddress}
        </p>
      )}
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          {translate("orderStatus")}:
        </span>{" "}
        <span className={order.state ? "text-red-500" : "text-green-600"}>
          {order.state ? translate("pending") : translate("confirmed")}
        </span>
      </p>
      {order.state && (
        <button
          className="btn bg-red-400 border-red-500 text-white"
          onClick={deleteOrder}
        >
          {translate("cancelOrder")}
        </button>
      )}
    </div>
  );
}

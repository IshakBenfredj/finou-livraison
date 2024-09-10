import { toast } from "react-toastify";
import supabase from "../supabase";
import { ImBin } from "react-icons/im";

/* eslint-disable react/prop-types */
export default function AdminOrder({ order, orders, setOrders, langue }) {
  const confirmOrder = async () => {
    const confirmAction = confirm("هل أنت متأكد من تأكيد الطلب ؟");
    if (confirmAction) {
      const { error } = await supabase
        .from("demands")
        .update({ state: false })
        .eq("id", order.id);

      if (error) {
        toast.error("حدث خطأ أثناء تأكيد الطلب. الرجاء المحاولة مرة أخرى.");
      } else {
        toast.success("تم تأكيد الطلب بنجاح!");
        setOrders(
          orders.map((o) => (o.id === order.id ? { ...o, state: false } : o))
        );
      }
    }
  };

  const unconfirmOrder = async () => {
    const confirmAction = confirm("هل أنت متأكد من إلغاء تأكيد الطلب ؟");
    if (confirmAction) {
      const { error } = await supabase
        .from("demands")
        .update({ state: true })
        .eq("id", order.id);

      if (error) {
        toast.error("حدث خطأ أثناء تأكيد الطلب. الرجاء المحاولة مرة أخرى.");
      } else {
        toast.success("تم تأكيد إلغاء الطلب بنجاح!");
        setOrders(
          orders.map((o) => (o.id === order.id ? { ...o, state: true } : o))
        );
      }
    }
  };

  const deleteOrder = async () => {
    const confirmDelete = confirm("هل أنت متأكد من حذفك للطلب ؟");
    if (confirmDelete) {
      const { error } = await supabase
        .from("demands")
        .delete()
        .eq("id", order.id);

      if (error) {
        toast.error("حدث خطأ أثناء حذف الطلب. الرجاء المحاولة مرة أخرى.");
      } else {
        toast.success("تم حذف الطلب بنجاح!");

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
        <span className="text-yellow-700 dark:text-yellow-500">الإسم:</span>{" "}
        {order.name}
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          رقم الهاتف:
        </span>{" "}
        <a href={`tel:${order.phone}`} className="underline">
          {order.phone}
        </a>
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">العنوان:</span>{" "}
        {order.address}
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          فئة المشتريات:
        </span>{" "}
        {order.category}
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">المنتجات:</span>{" "}
        {order.products.join(", ")}
      </p>
      <p>
        <span className="text-yellow-700 dark:text-yellow-500">
          حالة الطلب:
        </span>{" "}
        <span className={order.state ? "text-red-500" : "text-green-600"}>
          {order.state ? "قيد الإنتظار" : "تم تأكيده"}
        </span>
      </p>
      <div className="flex items-center gap-2">
        {order.state && (
          <button
            className="btn bg-green-400 border-green-500 text-white ml-2"
            onClick={confirmOrder}
          >
            تأكيد الطلب
          </button>
        )}
        {!order.state && (
          <button
            className="btn bg-red-400 border-red-500 text-white ml-2"
            onClick={unconfirmOrder}
          >
            إلغاء التأكيد
          </button>
        )}
        <button
          className="btn-outline border-red-500 text-red-500"
          onClick={deleteOrder}
        >
          <ImBin size={24} />
        </button>
      </div>
    </div>
  );
}

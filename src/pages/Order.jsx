/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import underline from "../assets/underline.svg";
import Input from "../components/Input";
import services, { translations } from "../constants";
import { ImBin } from "react-icons/im";
import supabase from "../supabase";
import { toast } from "react-toastify";
import sendEmail from "../lib/sendEmail";

export default function Order({ langue, user }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([""]);
  const [productsNum, setProductsNum] = useState([1]);
  const [loading, setLoading] = useState(false);
  const t = translations[langue];
  const form = useRef();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhone(user.phone);
      setAddress(user.address);
    }
  }, [user]);

  const handleAddProduct = () => {
    setProductsNum([...productsNum, productsNum.length + 1]);
    setProducts([...products, ""]);
  };

  const handleProductChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index] = value;
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    const updatedProductsNum = productsNum.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    setProductsNum(updatedProductsNum);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define the phone number patterns
    const validPhonePattern = /^(\+213[567]\d{8}|0[567]\d{8})$/;

    // Check if all required fields are filled
    if (!name || !phone || !address || !category || products.some((p) => !p)) {
      toast.error(t.fillAllFields);
      return;
    }

    // Validate the phone number
    if (!validPhonePattern.test(phone)) {
      toast.error(t.invalidPhoneNumber);
      return;
    }

    // Validate the receiver's phone number if category is selected
    if (category === services[langue][0]) {
      if (!receiverName || !receiverPhone || !receiverAddress) {
        toast.error(t.fillReceiverFields);
        return;
      }

      if (!validPhonePattern.test(receiverPhone)) {
        toast.error(t.invalidPhoneNumber);
        return;
      }
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("demands")
      .insert({
        name,
        phone,
        address,
        receiverName,
        receiverPhone,
        receiverAddress,
        category,
        products,
      })
      .select()
      .single();

    setLoading(false);

    if (error) {
      toast.error(t.submitError);
    } else {
      sendEmail(form)
      toast.success(t.submitSuccess);

      // Save demands to localStorage
      const existingDemands =
        JSON.parse(localStorage.getItem("userDemands")) || [];
      const updatedDemands = [...existingDemands, data.id];
      localStorage.setItem("userDemands", JSON.stringify(updatedDemands));

      // Reset form after submission
      setName("");
      setPhone("");
      setAddress("");
      setReceiverName("");
      setReceiverPhone("");
      setReceiverAddress("");
      setCategory("");
      setProducts([""]);
      setProductsNum([1]);
    }
  };

  return (
    <div className="py-24 bg-white dark:bg-gray-950">
      <h1 className="text-center font-bold text-3xl text-gray-950 dark:text-white relative w-fit mx-auto md:mb-6 mb-12">
        🛵 <span>{t.orderFromFinou}</span>
        <span className="text-yellow-500">finOu</span>
        <img src={underline} alt="" className="absolute w-1/2" />
      </h1>
      <form
        onSubmit={handleSubmit}
        className="md:px-24 px-4 py-10 grid md:gap-4 md:grid-cols-2"
        ref={form}
      >
        <div>
          <Input label={t.fullName} value={name} setValue={setName} name={'name'} />
          <Input
            label={t.phoneNumber}
            value={phone}
            setValue={setPhone}
            isPhone
            name='phone'
          />
          <Input
            label={t.addressGps}
            placeholder={t.address}
            value={address}
            setValue={setAddress}
            name={'address'}
          />
          <div>
            <label
              htmlFor="category"
              className="text-gray-900 dark:text-gray-200"
            >
              {t.categoryLabel}
            </label>
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg block mt-2 mb-5 outline-none border-[2px] border-gray-300 dark:border-gray-600 dark:text-gray-100 p-3 dark:bg-gray-800 bg-gray-200 w-full"
            >
              <option disabled selected={!category}>
                {t.selectCategory}
              </option>
              {services[langue].map((s, i) => (
                <option value={s} key={i} selected={category === s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          {category === services[langue][0] && (
            <>
              <Input
                label={t.receiverName}
                value={receiverName}
                setValue={setReceiverName}
              />
              <Input
                label={t.receiverPhone}
                value={receiverPhone}
                setValue={setReceiverPhone}
                isPhone
              />
              <Input
                label={t.receiverAddress}
                placeholder={t.address}
                value={receiverAddress}
                setValue={setReceiverAddress}
              />
            </>
          )}
        </div>
        <div>
          <h3 className="text-gray-900 dark:text-gray-200">{t.productList}</h3>
          {productsNum.map((n, index) => (
            <div key={n} className="relative mt-2 mb-5">
              <input
                type="text"
                placeholder={`${t.orderNum} ${n}`}
                value={products[index]}
                onChange={(e) => handleProductChange(index, e.target.value)}
                className="w-full outline-none border-[2px] border-gray-300 dark:border-gray-600 dark:text-gray-100 p-3 rounded-lg dark:bg-gray-800 bg-gray-200"
              />
              {n != 1 && (
                <ImBin
                  className={`absolute h-full text-red-400 top-0 text-lg cursor-pointer ${
                    langue == "ar" ? "left-2" : "right-2"
                  }`}
                  onClick={() => handleRemoveProduct(index)}
                />
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddProduct}
            className="text-yellow-500"
          >
            {t.addProduct}
          </button>
        </div>
      </form>
      <button
        type="submit"
        onClick={handleSubmit}
        className={`btn w-1/2 mx-auto block ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? t.submittingOrder : t.submitOrder}
      </button>
    </div>
  );
}

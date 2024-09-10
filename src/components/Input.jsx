/* eslint-disable react/prop-types */
export default function Input({
  label,
  placeholder,
  value,
  setValue,
  isPhone,
  name,
}) {
  const handleChange = (e) => {
    let inputValue = e.target.value;

    // If isPhone is true, only allow numeric input
    if (isPhone) {
      inputValue = inputValue.replace(/\D/g, ""); // Remove all non-numeric characters
    }

    setValue(inputValue);
  };

  return (
    <div>
      {label && (
        <label htmlFor={label} className="text-gray-900 dark:text-gray-200">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder || label}
        value={value}
        onChange={handleChange}
        className="w-full mt-2 mb-5 outline-none border-[2px] border-gray-300 dark:border-gray-600 dark:text-gray-100 p-3 rounded-lg dark:bg-gray-800 bg-gray-200"
        name={name || ""}
      />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export default function Langue({ value, setValue, langue }) {
  console.log(langue == "fr");

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="langue" className="text-gray-900 dark:text-gray-200">
        {langue === "ar" ? "لغة الموقع" : "Site Language"}
      </label>
      <select
        name="langue"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="border-2 border-gray-300 rounded-lg p-2"
        defaultValue={langue}
      >
        <option value="ar" selected={value == "ar"}>
          العربية
        </option>
        <option value="fr" selected={value == "fr"}>
          Français
        </option>
      </select>
    </div>
  );
}

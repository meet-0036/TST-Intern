export default function HeaderButton({ title }) {
  let classes = "bg-teal-400";
  let symbol = "+";

  if (title === "EXPENSES") {
    classes = " bg-rose-500";
    symbol = "-";
  }

  return (
    <div
      className={`${classes} my-2 px-4 py-3 text-xl flex justify-between items-center shadow-md`}
    >
      <div className="flex justify-between basis-5/6">
        <span className="text-black">{title}</span>

        <span className="">{symbol}30,000.00</span>
      </div>
      {/* Add Button */}
      {symbol !== '+' && <button className="bg-white/40 w-10 text-white text-lg font-bold hover:bg-white/60 rounded-sm transition">
        {symbol}
      </button>}
    </div>
  )
}

//bg-teal-400
// bg-rose-500

import Button from "./Button.jsx";

import { currencyFormatter } from "../util/formatting.js";

export default function Log({ isTrue, name, date, amount, handleChange }) {
  return (
    <div className="h-12 flex justify-between items-center border-t-2 border-gray-100 text-lg">
      <span>{name}</span>
      <span className="font-semibold">{date}</span>
      <span className={`${isTrue ? "text-teal-400" : "text-rose-500"}`}>
        {!isTrue && "-"}
        {currencyFormatter.format(amount)}
      </span>
      {!isTrue && <Button label="-" onChange={handleChange} />}
    </div>
  );
}

// <button
//   onClick={handleChange}
//   className="bg-amber-100/50 w-10 text-lg font-bold hover:bg-sky-100/50 rounded-sm transition"
// >
//   -
// </button>

//bg-teal-400
// bg-rose-500

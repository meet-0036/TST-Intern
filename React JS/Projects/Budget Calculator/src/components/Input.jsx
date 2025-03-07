import { useContext, useRef } from "React";

import { BalanceContext } from "../store/balance-context.jsx";

export default function Input() {
  const { addMovement } = useContext(BalanceContext);

  const symbol = useRef("+");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const type = formData.get("type");
    const title = formData.get("title");
    const amount = formData.get("amount");

    // console.log(data);

    addMovement(type, title, amount);
  }

  return (
    <div className="bg-neutral-100 py-3 h-20 text-center text-xl flex gap-4  justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-100 py-3 h-20 text-center text-xl flex gap-4  justify-center items-center"
      >
        <select
          name="type"
          ref={symbol}
          id="select_sign"
          className="w-20 p-2 h-14 text-2xl border border-gray-200"
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          type="text"
          name="title"
          placeholder="Add or search description"
          className="w-96 p-6 h-14 text-black rounded-lg border border-gray-200border border-gray-300 focus:border-gray-500  focus:outline-none"
        />
        <input
          type="number"
          name="amount"
          placeholder="value"
          className="w-48 px-4 h-14 rounded-lg border border-gray-200 focus:border-gray-500  focus:outline-none"
        />
        <button className="w-10 h-10 flex items-center justify-center ">
          <img
          // handle image loading according select option
            // src={symbol.current.option === "+" ? "/greenBtn.svg" : "/redBtn.svg"}
            src="/greenBtn.svg"
            alt="Submit Button"
            className="w-full h-full object-cover"
          />
        </button>
      </form>
    </div>
  );
}

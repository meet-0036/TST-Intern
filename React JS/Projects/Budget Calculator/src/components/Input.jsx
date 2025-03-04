export default function Input() {
  return (
    <div className="bg-neutral-100 py-3 h-20 text-center text-xl flex gap-4  justify-center items-center">
      <select
        name="sign"
        id="select_sign"
        className="w-20 p-2 h-14 text-2xl border border-gray-200"
      >
        <option value="income">+</option>
        <option value="expense">-</option>
      </select>
      <input
        type="text"
        placeholder="Add or search description"
        className="w-96 p-6 h-14 text-black rounded-lg border border-gray-200border border-gray-300 focus:border-gray-500  focus:outline-none"
      />
      <input
        type="number"
        placeholder="value"
        className="w-48 px-4 h-14 rounded-lg border border-gray-200 focus:border-gray-500  focus:outline-none"
      />
      <button className="w-10 h-10 flex items-center justify-center ">
        <img
          src="/greenBtn.svg"
          alt="Submit Button"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}

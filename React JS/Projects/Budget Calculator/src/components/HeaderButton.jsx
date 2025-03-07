import { useContext } from "React";

import Button from "./Button.jsx";
import { currencyFormatter } from "../util/formatting.js";
import { BalanceContext } from "../store/balance-context.jsx";

export default function HeaderButton({ title }) {
  const { totalIncome, totalExpenses, removeMovement } = useContext(BalanceContext);

  // dynamic styling purpose
  const isIncome = title === "INCOME";

  const formattedTotalIncome = currencyFormatter.format(totalIncome);
  const formattedTotalExpenses = currencyFormatter.format(totalExpenses);
  
  return (
    <div
      className={`${
        isIncome ? "bg-teal-400" : "bg-rose-500"
      } my-2 px-4 py-3 text-xl flex justify-between items-center shadow-md`}
    >
      <div className="flex justify-between basis-5/6">
        <span className="text-black">{title}</span>

        <span>
          {isIncome ? formattedTotalIncome : `-${formattedTotalExpenses}`}
        </span>
      </div>

      {!isIncome && <Button label="-" onChange={() => removeMovement(null)} />}
    </div>
  );
}


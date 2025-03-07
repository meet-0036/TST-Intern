import { useContext } from "React";

import Log from "./Log.jsx";
import { BalanceContext } from "../store/balance-context.jsx";

export default function Logs({ title }) {
  const { income, expenses, removeMovement } = useContext(BalanceContext);

  const isIncome = title === "INCOME";

  return (
    <div className={`${isIncome ? "lg:pl-20 lg:pr-8 2xl:pl-36 2xl:pr-12" : "lg:pr-20 lg:pl-12 2xl:pr-36 2xl:pl-12"} mt-8 pt-4 w-full px-4 sm:px-10 md:px-20 lg:px-8 xl:px-16
  sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2`}>
      <h1
        className={`${
          isIncome ? "text-teal-400" : "text-rose-400"
        } mb-8 font-semibold text-left text-2xl`}
      >
        {title}
      </h1>

      {/* { income.map((mov) => (
            <Log
              title={mov.amount >= 0 ? "INCOME" : "EXPENSES"}
              name={mov.title}
              date={mov.date}
              amount={mov.amount}
            />
          ))} */}

      {isIncome
        ? income.map((mov) => (
            <Log
              key={mov.id}
              title={mov.amount >= 0 ? "INCOME" : "EXPENSES"}
              name={mov.title}
              date={mov.date}
              amount={mov.amount}
              isTrue={true}
              handleChange={() => removeMovement(mov.id)}
            />
          ))
        : expenses.map((mov) => (
            <Log
              key={mov.id}
              title={mov.amount >= 0 ? "INCOME" : "EXPENSES"}
              name={mov.title}
              date={mov.date}
              amount={mov.amount}
              isTrue={false}
              handleChange={() => removeMovement(mov.id)}
            />
          ))}
    </div>
  );
}

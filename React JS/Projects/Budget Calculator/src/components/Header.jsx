import { useContext } from "React";

import Button from "./HeaderButton.jsx";
import { currencyFormatter } from "../util/formatting.js";
import { BalanceContext } from "../store/balance-context.jsx";

export default function Header() {
  const { totalBalance } = useContext(BalanceContext);

  const amount = currencyFormatter.format(totalBalance); // formattedTotalBalance

  return (
    <header
      className="w-full h-72 text-white flex justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(/bg.png)`,
      }}
    >
      <div className="h-72 w-96 flex flex-col justify-center">
        <p>Available budget in February 2025:</p>
        <div className="text-5xl m-4">{amount}</div>
        <Button title="INCOME"></Button>
        <Button title="EXPENSES"></Button>
      </div>
    </header>
  );
}

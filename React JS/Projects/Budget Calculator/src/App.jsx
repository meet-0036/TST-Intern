import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
// import Income from "./components/Income.jsx";
// import Expenses from "./components/Expenses.jsx";
import Logs from "./components/Logs.jsx";
import BalanceContextProvider from "./store/balance-context.jsx";

export default function App() {
  return (
    <BalanceContextProvider>
      <Header />
      <Input />
      <section className="w-full flex text-center flex-wrap">
        <Logs title="INCOME" />
        <Logs title="EXPENSES" />
      </section>
    </BalanceContextProvider>
  );
}

import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import Sample from "./components/Sample.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
      <Sample />
    </>
  );
}

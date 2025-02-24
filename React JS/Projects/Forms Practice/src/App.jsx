import Header from "./components/Header.jsx";
import RLogin from "./components/RefLogin.jsx";
import SLogin from "./components/StateLogin.jsx";
import CustomSLogin from "./components/CustomStateLogin.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <RLogin /> */}
        {/* <SLogin /> */}
        <CustomSLogin />
        {/* <Signup /> */}
      </main>
    </>
  );
}

export default App;

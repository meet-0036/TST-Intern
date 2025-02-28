import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import CheckoutAction from "./components/CheckoutAction.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        {/* <Checkout /> */}
        <CheckoutAction />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

// ContextProvider - return CartContext.provider

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;

// what happens when context value is changed : React will re-execute child that subscribes to context when any of the state in that context is changed.

// Context.Provider - This component provides the context value to its children components.
// It allows components to access the shopping cart state and the `handleAddItemToCart` function.

// or

/*
// Context.Consumer : also use as Provider but not healthly for default use
<CartContext.Consumer>
  {(context) => (       // this fun receives automatic context value
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {context.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
    </div>
  )}
</CartContext.Consumer>
*/

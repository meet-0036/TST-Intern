import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  // const [shoppingCart, setShopping  Cart] = useState({
  //   items: [],
  // });

  // function handleAddItemToCart(id) {
  //   setShoppingCart((prevShoppingCart) => {
  //     const updatedItems = [...prevShoppingCart.items];

  //     const existingCartItemIndex = updatedItems.findIndex(
  //       (cartItem) => cartItem.id === id
  //     );
  //     const existingCartItem = updatedItems[existingCartItemIndex];

  //     if (existingCartItem) {
  //       const updatedItem = {
  //         ...existingCartItem,
  //         quantity: existingCartItem.quantity + 1,
  //       };
  //       updatedItems[existingCartItemIndex] = updatedItem;
  //     } else {
  //       const product = DUMMY_PRODUCTS.find((product) => product.id === id);
  //       updatedItems.push({
  //         id: id,
  //         name: product.title,
  //         price: product.price,
  //         quantity: 1,
  //       });
  //     }

  //     return {
  //       items: updatedItems,
  //     };
  //   });
  // }

  // function handleUpdateCartItemQuantity(productId, amount) {
  //   setShoppingCart((prevShoppingCart) => {
  //     const updatedItems = [...prevShoppingCart.items];
  //     const updatedItemIndex = updatedItems.findIndex(
  //       (item) => item.id === productId
  //     );

  //     const updatedItem = {
  //       ...updatedItems[updatedItemIndex],
  //     };

  //     updatedItem.quantity += amount;

  //     if (updatedItem.quantity <= 0) {
  //       updatedItems.splice(updatedItemIndex, 1);
  //     } else {
  //       updatedItems[updatedItemIndex] = updatedItem;
  //     }

  //     return {
  //       items: updatedItems,
  //     };
  //   });
  // }

  // //add state in Context
  // // default value need to pass in Context
  // const ctxValue = {
  //   items: shoppingCart.items,
  //   addItemToCart: handleAddItemToCart, // Forward handling function through global context
  //   updateCartItemQuantity: handleUpdateCartItemQuantity,
  // };

  return (
    // <CartContext.Provider value={shoppingCart}>  // also this way link with the state
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

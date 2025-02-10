import { createContext, useReducer } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // not needed here because we have only one value
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

// useReducer(handleReducer(state, action), initialValue)
export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    // dispatch(action);
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

// State and context management seperator

// We need to initial value provided.

// createContext() use for nested all components[reduce to sharing a props across components]
// way to manage state globally.
// It allows you to share values between components without having to explicitly pass props through every level of the component tree.
// This can be particularly useful for themes, user authentication, and other global settings.

/*
1. Create a Context: Use the createContext function to create a context object.
2. Provide the Context: Use the Provider component from the context object to wrap the part of your component tree that needs access to the context.
3. Consume the Context: Use the useContext hook or the Consumer component to access the context values in your components.
*/

//  const [state(reducer), Dispatch(dispatch)] = useReducer() : The useReducer hook in React is a way to manage state in your components, especially when the state logic is complex or involves multiple sub-values.
//                                                              It is an alternative to the useState hook and is often used for more advanced state management.

// 1.Reducer Function: This is a function that takes the current state and an action, and returns a new state.

// 2.useReducer Hook: You use this hook in your component to manage state with the reducer function.
//                    It returns the current state and a dispatch function to send actions to the reducer.

// 3.Dispatching Actions: You use the dispatch function to update the state by sending actions to the reducer.

// Ex of UseReducer() :
/*
import React from 'react';
export function counterReducer(state, action) {
        if(action.type === 'INCREMENT') {
            return {count: state.count + 1};
        } 
        if(action.type === 'DECREMENT') {
            return {count: state.count - 1};
        }
        if(action.type === 'RESET') {
            return {count: 0};
        }
    }

function App() {
    const [countState, countDispatch] = React.useReducer(counterReducer, {count: 0});
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={() => countDispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={() => countDispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={() => countDispatch({type: "RESET"})}>Reset</button>
      </p>
      <p id="counter">{countState.count}</p>
    </div>
  );
}

export default App;
*/

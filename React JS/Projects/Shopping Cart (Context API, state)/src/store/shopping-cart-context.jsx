import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
});

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

// 1 load router API
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// if root not found display error page
import ErrorPage from "./pages/Error";

import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// 2 set routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: "/"
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  // 3 forward Rounters
  return <RouterProvider router={router} />;
}

export default App;

// when default domain - localhost:3000 /

// React-router-dom < 6.4

// import { createRouteFromElement } from "react-router-dom";

// const routeElements = createRouteFromElement(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//   </Route>
// );
// const router = createBrowserRouter(routeElements);

// Allocate absolute path if root change other not works.
// {
//   path: "/",
//   element: <RootLayout />,
//   errorElement:<ErrorPage/>,
//   children: [
//     { path: "/", element: <HomePage /> },
//     { path: "/products", element: <ProductsPage /> },
//     { path: "/products/:productId", element: <ProductDetailPage /> },
//   ],
// },
// solution: gives currently active path

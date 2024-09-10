import React from "react";
import { About, HomeLayout, Error, Landing, Products, Login, Register, Cart, Checkout, Orders, SingleProduct } from "./Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Landing /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "Checkout",
          element: <Checkout/>,
        },
        {
          path: "Orders",
          element: <Orders />,
        },
        {
          path: "singleProduct",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/Register",
      element: <Register/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

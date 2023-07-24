import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Restromenu from "./component/Restromenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import appStore from "./component/AppStore";


const Applayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restromenu />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // }
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

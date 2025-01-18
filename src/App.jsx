import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import "./App.css"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { Product } from "./pages/Product";
import { Category } from "./pages/Category";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },

      {
        path: "contact",
        element: <Contact />
      },

      {
        path: "products",
        element: <Product />
      },
      {
        path: "category",
        element: <Category />
      },
    ],

  },


]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}


export default App;
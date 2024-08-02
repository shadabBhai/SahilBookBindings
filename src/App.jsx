import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Login from "./Pages/Login"
import Home from "./Pages/Home.page"
import Product from "./Pages/Product"
import Thesis from "./Pages/Thesis"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/thesis",
        element: <Thesis />
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}



export default App

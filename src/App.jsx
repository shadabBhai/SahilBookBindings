import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Thesis from "./Pages/Thesis"
import Layout from "./Components/Layout"
import Error from "./Pages/Error"





const App = () => {
  const AuthenticatedRoute = ({ element }) => {
    const user = useSelector((state) => state.user);
    return user ? element : <Navigate to="/" />;
  };

  const user = useSelector((state) => state.user)
  const router = createBrowserRouter([


    {
      path: '/',
      element: user ? <Navigate to="/layout/home" /> : <Login />,
    },

    {
      path: '/layout',
      element: user ? <Layout /> : <Navigate to="/" />,
      children: [
        {
          path: 'home',
          element: <AuthenticatedRoute element={<Home />} />
        },
        {
          path: 'product',
          element: <AuthenticatedRoute element={<Product />} />
        },
        {
          path: 'thesis',
          element: <AuthenticatedRoute element={<Thesis />} />
        }
      ]
    },
    {
      path: "*",
      element: <Error />
    }



  ])




  return (


    <RouterProvider router={router} />

  )
}



export default App

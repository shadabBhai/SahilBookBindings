import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Thesis from "./Pages/Thesis"
import Layout from "./Components/Layout"
import Error from "./Pages/Error"
import ProductDetail from "./Pages/ProductDetail"
import Cart from "./Pages/Cart"
import CheckOut from "./Pages/CheckOut"



// eslint-disable-next-line react/prop-types
const AuthenticatedRoute = ({ element }) => {
  const user = useSelector((state) => state.user);
  //console.log("AuthenticatedRoute user:", user) //Debuging line 
  return user ? element : <Navigate to="/" />;
};

const App = () => {
  const user = useSelector((state) => state.user)

  // console.log(products)
  // console.log(user)
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
        },
        {
          path: 'product/:id',
          element: <AuthenticatedRoute element={<ProductDetail />} />
        },
        {
          path: 'cart',
          element: <AuthenticatedRoute element={<Cart />} />
        },

      ],

    },
    {
      path: 'checkout',
      element: <AuthenticatedRoute element={<CheckOut />} />
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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './page/Home'
import AllProducts from './component/products/component/AllProducts'
import ProductDetailPage from './page/ProductDetailPage'
import ProductDetail from './component/products/component/ProductDetail'
import ContactPage from './page/ContactPage'
import Login from './component/auth/component/Login'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/shop",
      element: <AllProducts />
    },
    {
      path: "/product/:id",
      element: <ProductDetailPage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    },
    {
      path: "/login",
      element: <Login />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import { AuthLayout } from './components/index.js'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Image from './components/Image.jsx'



const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />

    },
    {
      path: "/login",
      element: (
          <Login />
        // <AuthLayout authentication={false}>
        // </AuthLayout>
      )
    },
    {
      path: "/signup",
      element: (

          <Signup />
      )
    },
    {
      path :"/all-posts",
      element:(
        <AuthLayout authentication= {true}>
          <AllPost/>
        </AuthLayout>
      )
    },
    {
      path :"/add-post",
      element:(
        <AuthLayout authentication = {true}>
          <AddPost/>
        </AuthLayout>
        // <Image/>
      )
    },
    {
      path :"/edit-post/:slug",
      element:(
        <AuthLayout authentication = {true}>
          <EditPost/>
        </AuthLayout>
      )
    },
    {
      path :"/post/:slug",
      element : <Post/>
    },
  ],
} ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      < RouterProvider router = {router}/>
     
    </Provider>
  </StrictMode>,
)

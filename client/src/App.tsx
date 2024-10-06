import './App.css'
import { lazy, Suspense} from "react"
import Loader from './pages/Loader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

const Login = lazy(() => import("./auth/Login"))
const Signup = lazy(() => import("./auth/Signup"))
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    // children:[
    //   {
    //     path:'/login'
    //   }
    // ]
  },{
    path:'/login',
    element:<Login/>
  },{
    path:'/signup',
    element:<Signup/>
  }
])
function App() {

  return (
    <>
    <Suspense fallback={<Loader/>}>
    <RouterProvider router={appRouter}>
    <Login/>
    </RouterProvider>
    </Suspense>
       </>
  )
}

export default App

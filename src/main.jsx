import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import {Layout} from './Layout'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from './Components/Contact/Contact'
import StuDashboard from './Components/StuDashboard/StuDashboard'
import Signup from './Components/Signup/Signup'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='Contact' element={<Contact/>}/>
       <Route path='StuDashboard' element={<StuDashboard/>}/>
       <Route path='Signup' element={<Signup/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
 
<StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,

)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import {Layout} from './Layout'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from './Components/Contact/Contact'
import StuDashboard from './Components/StuDashboard/StuDashboard'
import SignUp from './Components/SignUp/SignUp'
import Signup from './pages/Signup';
import Login from './pages/Login';
import AccountCreatedPage from './Components/AccountCreatedPage';
import ClassForm from './Components/ClassForm/ClassForm';
import StuDetailPage from './Components/StuDetailPage/StuDetailPage';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='Contact' element={<Contact/>}/>
       <Route path='StuDashboard' element={<StuDashboard/>}/>
       <Route path='SignUp' element={<SignUp/>}/>
       <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-created" element={<AccountCreatedPage />} />
        <Route path="/classForm" element={<ClassForm/>}></Route>
        <Route path="/stuDetailPage" element={<StuDetailPage/>}></Route>

        
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
 
<StrictMode>
  <RouterProvider router={router} />
    </StrictMode>,

)

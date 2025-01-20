import Navbar from "./Components/NavBar/Navbar"
import Footer from "./Components/Footer/Footer"
import {Outlet} from "react-router"
export const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default Layout

import { Footer, Navbar, Scroll } from "../components"
import { Outlet } from "react-router-dom"
import style from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={style.Layout}>
      <Scroll />
      <Navbar />
      <main className={style.Layout__Container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

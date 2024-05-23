import { Navbar, Scroll } from "../components"
import { Outlet } from "react-router-dom"

import React from "react"

const Layout = () => {
  return (
    <div>
      <Scroll />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout

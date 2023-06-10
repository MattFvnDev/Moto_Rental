import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { logo } from "../../assets"
import { CgClose, CgMenu } from "react-icons/cg"
import style from "./Navbar.module.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={style.Navbar}>
        <div className={style.Navbar__Logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul
          className={
            open
              ? [style.Navbar__Links, style.Open].join(" ")
              : [style.Navbar__Links]
          }
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="models">Models</NavLink>
          </li>
          <li>
            <NavLink to="team">Team</NavLink>
          </li>
          <li>
            <NavLink to="testimonials">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <div className={style.Navbar__Buttons}>
          <Link className={style.SignIn} to="/">
            Sign in
          </Link>
          <Link className={style.Register} to="/">
            Register
          </Link>
        </div>
        {/* Mobile */}
        <div
          className={style.Mobile__Hamburger}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CgClose size={40} /> : <CgMenu size={40} />}
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { logo } from "../../assets/index"
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="models">Models</Link>
          </li>
          <li>
            <Link to="team">Team</Link>
          </li>
          <li>
            <Link to="testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <div className={style.Navbar__Buttons}>
          <Link className={style.SignIn} to="signin">
            Sign in
          </Link>
          <Link className={style.Register} to="register">
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

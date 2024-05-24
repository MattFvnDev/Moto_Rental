import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { logo } from "../../assets"
import { CgClose, CgMenu } from "react-icons/cg"
import style from "./Navbar.module.css"
import { navigationLinks } from "../../constants"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  const openLink = () => {
    setOpen(!open)
  }
  return (
    <nav className={style.Navbar}>
      <div className={style.Navbar__Logo}>
        <Link to="/">
          <img src={logo} alt="Moto Rental Logo" />
        </Link>
      </div>
      <ul
        className={
          open
            ? [style.Navbar__Links, style.Open].join(" ")
            : [style.Navbar__Links]
        }
      >
        {navigationLinks.map((link) => (
          <NavLink onClick={openLink} key={link.id} to={link.path}>
            {link.name}
          </NavLink>
        ))}
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
  )
}

export default Navbar

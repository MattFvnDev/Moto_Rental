import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { CgClose, CgMenu } from "react-icons/cg"
import style from "./Navbar.module.css"
import { navigationLinks } from "../../constants"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const openLink = () => {
    setOpen(!open)
  }
  return (
    <nav className={style.Navbar}>
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

import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import { CgClose, CgMenu } from "react-icons/cg"
import { navigationLinks } from "../../constants"
import style from "./MobileNavbar.module.css"

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleNavigation = () => {
    open
      ? (setOpen(false), enablePageScroll())
      : (setOpen(true), disablePageScroll())
  }
  const handleClick = () => {
    if (!open) return
    enablePageScroll()
    setOpen(false)
  }
  return (
    <div className={style.MobileHamburger} onClick={toggleNavigation}>
      <button type="button" className={style.MobileHamburger__Button}>
        {open ? <CgClose size={40} /> : <CgMenu size={40} />}
      </button>
      <nav
        className={`${style.MobileHamburger__Navbar} ${open ? style.Open : ""}`}
      >
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={handleClick}
                className={`${pathname === link.path ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavbar

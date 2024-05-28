import { navigationLinks } from "../../constants"
import { Link, NavLink } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={style.Navbar}>
      <ul>
        <li>
          {navigationLinks.map((link) => (
            <NavLink key={link.id} to={link.path} className={style.Link}>
              {link.name}
            </NavLink>
          ))}
          <Link to="/" className={style.Link_MemberArea}>Member Area</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

import { logo } from "../../assets"
import style from "./Logo.module.css"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link className={style.Link} to="/">
      <img src={logo} alt="Moto Rental Logo" className={style.Logo} />
      <div className={style.Logo_Container}>
        <span className={style.Span}>
          Moto <br />
          Rental
        </span>
      </div>
    </Link>
  )
}

export default Logo

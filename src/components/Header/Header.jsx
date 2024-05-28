import { Navbar, Logo} from "../"
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Header_Container}>
        <Logo />
        <Navbar />
        {/* <MobileMenu/> */}
      </div>
    </header>
  )
}

export default Header

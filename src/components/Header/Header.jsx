import { Navbar, Logo, MobileNavbar} from "../"
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Header_Container}>
        <Logo />
        <Navbar />
        <MobileNavbar/>
      </div>
    </header>
  )
}

export default Header

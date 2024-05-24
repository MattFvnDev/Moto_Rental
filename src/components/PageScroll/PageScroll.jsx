import { useState, useEffect } from "react"
import style from "./PageScroll.module.css"
import { FaRoad } from "react-icons/fa"

const PageScroll = () => {
  const [moveUp, setMoveUp] = useState(false)

  useEffect(() => {
    const pageScroll = () => {
      if (window.scrollY > 500) {
        setMoveUp(true)
      } else {
        setMoveUp(false)
      }
    }
    window.addEventListener("scroll", pageScroll)

    return () => {
      window.removeEventListener("scroll", pageScroll)
    }
  }, [])

  const scrollMoveToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" })
  }
  return (
    <div
      onClick={scrollMoveToTop}
      className={`${style.Scroll} ${moveUp ? `${style.Scroll_Show}` : ""}`}
    >
      <FaRoad size={35} />
    </div>
  )
}

export default PageScroll

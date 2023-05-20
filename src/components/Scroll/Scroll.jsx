import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Scroll = () => {
  // Extracts pathname property(key) from an object. Look at Router component, where main paths have been defined.
  const { pathname } = useLocation()

  // Automatically scrolls to top whenever pathname changes.
  useEffect(() => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" })
  }, [pathname])
}

export default Scroll

// Implementing a feature (functionality) that automatically scrolls the user back to the top of the page whenever the route changes.
// Finally add the ScrollToTop component to root App component. In our case it is located in the Router component just inside the "Layout" function.

import Scroll from "./components/Scroll/Scroll"
import { Navbar } from "./components"
import {
  Home,
  About,
  Contact,
  Models,
  Team,
  TestimonialsPage,
  Success,
  Confirmation,
} from "./pages"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

export function Router() {
  const Layout = () => (
    <>
      <Scroll />
      <Navbar />
      <Outlet />
    </>
  )

  const BrowserRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<Models />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="success" element={<Success />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  return <BrowserRoutes />
}

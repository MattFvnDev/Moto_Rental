import Scroll from "./components/Scroll/Scroll"
import { Navbar } from "./components/index"
import {
  Home,
  About,
  Contact,
  Models,
  Register,
  SignIn,
  Team,
  TestimonialsPage,
} from "./pages/index"
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
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  return <BrowserRoutes />
}

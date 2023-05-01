import { Navbar } from "./components/index";
import {
  Home,
  About,
  Contact,
  Models,
  Register,
  SignIn,
  Team,
  Testimonials,
} from "./pages/index";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export function Router() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="models" element={<Models />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  return <BrowserRoutes />;
}

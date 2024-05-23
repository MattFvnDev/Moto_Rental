import style from "./Home.module.css"
import {
  Hero,
  BookForm,
  Plan,
  Banner,
  ChooseUs,
  Testimonials,
  MobileApp,
  Pick,
  FAQ,
} from "../../components"

const Home = () => (
  <>
    <Hero />
    <Plan />
    <Pick />
    <BookForm />
    <Banner />
    <ChooseUs />
    <FAQ />
    <Testimonials />
    <MobileApp />
  </>
)

export default Home

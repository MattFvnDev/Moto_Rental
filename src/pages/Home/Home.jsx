import React from "react"
import style from "./Home.module.css"
import {
  Hero,
  BookForm,
  Plan,
  Banner,
  ChooseUs,
  Testimonials,
  Footer,
  MobileApp,
  Pick,
  FAQ,
} from "../../components/index"

const Home = () => (
  <>
    <Hero />
    <Plan />
    <Pick />
    <BookForm />
    <Banner />
    <ChooseUs />
    <FAQ/>
    <Testimonials />
    <MobileApp />
    <Footer />
  </>
)

export default Home

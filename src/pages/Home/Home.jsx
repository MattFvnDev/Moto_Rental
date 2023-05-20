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
} from "../../components/index"

const Home = () => (
  <>
    <Hero />
    <Plan />
    <Pick />
    <BookForm />
    <Banner />
    <ChooseUs />
    <Testimonials />
    <MobileApp />
    <Footer />
  </>
)

export default Home

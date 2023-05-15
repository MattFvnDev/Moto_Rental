import React from "react"
import style from "./TestimonialsPage.module.css"
import { PagesHeader, PagesBanner, Testimonials, Footer } from "../../components"

const TestimonialsPage = () => (
  <>
    <section className={style.TestimonialsPage}>
      <PagesHeader name={"Testimonials"} />
      <Testimonials/>
      <PagesBanner />
      <Footer />
    </section>
  </>
)

export default TestimonialsPage

import style from "./TestimonialsPage.module.css"
import {
  PagesHeader,
  PagesBanner,
  Testimonials,
} from "../../components"

const TestimonialsPage = () => (
  <>
    <section className={style.TestimonialsPage}>
      <PagesHeader name={"Testimonials"} />
      <Testimonials />
      <PagesBanner />
      </section>
  </>
)

export default TestimonialsPage

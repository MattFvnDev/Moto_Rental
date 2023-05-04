import React from "react"
import style from "./Testimonials.module.css"
import { testimonials } from "../../constants/index.js"
import { TestimonialsCard } from "../index"

const Testimonials = () => {
  return (
    <section className={style.Testimonials_Section}>
      <div className={style.Testimonials_Container}>
        <div className={style.Testimonials_Content}>
          <div className={style.Testimonials_Content__Text}>
            <h1>
              What People are saying <span>about us</span>
            </h1>
            <h2>Client's Testimonials</h2>
            <p>
              Explore favorable impact we've made on our Customers reading
              through their testimonials. Our Customers have experienced our
              services and they're willing to share their feedback.
            </p>
          </div>
          <div className={style.Testimonials_Content__Cards}>
            {testimonials.map((testimonial) => (
              <TestimonialsCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

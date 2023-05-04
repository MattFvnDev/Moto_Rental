import React from "react"
import style from "./TestimonialsCard.module.css"
import { quotes } from "../../assets"

const TestimonialsCard = ({ content, name, img, city }) => {
  return (
    <div className={style.TestimonialCard}>
      <div className={style.TestimonialCard__Content}>
        <img src={quotes} alt="" />
        <p>{content}</p>
      </div>
      <div className={style.TestimonialCard__Box}>
        <img src={img} alt="" />
        <div className={style.TestimonialCard__Box__Text}>
          <h4>{name}</h4>
          <p>{city}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCard

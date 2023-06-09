import React from "react"
import style from "./Pick.module.css"
import { Carousel } from "../index"

const Pick = () => (
  <section className={style.Pick_Section}>
    <div className={style.Pick_Container}>
      <div className={style.Pick_Content}>
        <h3>Motorcycle Models</h3>
        <h2>Our rental fleet</h2>
        <p>
          Choose from wide range of our stunning rental motorcycle models for
          your needs and start your amazing adventure today!
        </p>
      </div>
      <Carousel />
    </div>
  </section>
)

export default Pick

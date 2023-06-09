import React from "react"
import style from "./FAQ.module.css"
import { Accordion } from "../index"
import { questions } from "../../constants"

const FAQ = () => (
  <section id="FAQ-Section" className={style.FAQ_Section}>
    <div className={style.FAQ_Container}>
      <div className={style.FAQ_Content}>
        <div className={style.FAQ_Content__Title}>
          <h3>FAQ</h3>
          <h2>Frequently Asked Questions</h2>
          <p>
            Welcome to Moto Rental Frequently Asked Questions. Curious about
            Moto Rental's booking process. Ask us anything about our booking
            process and get factual responses.
          </p>
        </div>
        <Accordion questions={questions} />
      </div>
    </div>
  </section>
)

export default FAQ

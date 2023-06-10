import React from "react"
import style from "./Plan.module.css"
import { plans } from "../../constants"
import { PlanCard } from "../index"

const Plan = () => (
  <section id="Plan-Section" className={style.Plan_Section}>
    <div className={style.Plan_Container}>
      <div className={style.Plan_Content}>
        <div className={style.Plan_Content__Title}>
          <h3>Plan your rental now</h3>
          <h2>Lightning-fast and simple experience</h2>
        </div>
        <div className={style.PlanCard_Container}>
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Plan

import React from "react"
import style from "./PlanCard.module.css"

const PlanCard = ({ icon, title, content, }) => (
  <div className={style.PlanCard__Box}>
    <img src={icon} alt="" className={style.PlanCard__img} />
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
)

export default PlanCard

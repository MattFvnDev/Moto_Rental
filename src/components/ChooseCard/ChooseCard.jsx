import React from "react"
import style from "./ChooseCard.module.css"

const ChooseCard = ({ icon, title, content }) => (
  <>
    <div className={style.ChooseCard__Box}>
      <img src={icon} alt="" />
      <div className={style.ChooseCard__Box__Text}>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  </>
)

export default ChooseCard

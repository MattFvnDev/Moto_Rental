import React from "react"
import style from "./TeamCard.module.css"

const TeamCard = ({ img, name, occupation }) => (
    <div className={style.TeamCard_Content}>
      <div className={style.TeamCard_Content__Box}>
        <img src={img} alt="" />
      </div>
      <div className={style.TeamCard_Content__Box__Text}>
        <h3>{name}</h3>
        <p>{occupation}</p>
      </div>
    </div>
)

export default TeamCard

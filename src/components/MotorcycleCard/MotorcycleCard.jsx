import React from "react"
import style from "./MotorcycleCard.module.css"
import { TbEngine } from "react-icons/tb"
import { BsFuelPumpFill } from "react-icons/bs"
import { ImPower } from "react-icons/im"
import { GiWeight } from "react-icons/gi"

const MotorcycleCard = ({
  img,
  mark,
  model,
  hP,
  weight,
  fuelCapacity,
  engineDisplacement,
  price,
}) => (
  <>
    <div className={style.MotorcycleCard_Content}>
      <div className={style.MotorcycleCard_Title}>
        <div className={style.MotorcycleCard_Title__Text}>
          <h3>{mark}</h3>
          <h4>{model}</h4>
          <p>{price} per day</p>
        </div>
        <img src={img} alt={model} />
      </div>
      <div className={style.MotorcycleCard_Stats}>
        <div className={style.MotorcycleCard_Stats__Box}>
          <ImPower size={35} style={{ color: "#1690f3" }} />
          <p>{hP} HP</p>
        </div>
        <div className={style.MotorcycleCard_Stats__Box}>
          <GiWeight size={35} style={{ color: "#1690f3" }} />
          <p>{weight} KG</p>
        </div>
        <div className={style.MotorcycleCard_Stats__Box}>
          <BsFuelPumpFill size={35} style={{ color: "#1690f3" }} />
          <p>{fuelCapacity} L</p>
        </div>
        <div className={style.MotorcycleCard_Stats__Box}>
          <TbEngine size={35} style={{ color: "#1690f3" }} />
          <p>{engineDisplacement} cm³</p>
        </div>
      </div>
      <div></div>
    </div>
  </>
)

export default MotorcycleCard

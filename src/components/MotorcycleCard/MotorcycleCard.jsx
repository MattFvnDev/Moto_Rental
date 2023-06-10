import React from "react"
import style from "./MotorcycleCard.module.css"
import { TbEngine } from "react-icons/tb"
import { BsFuelPumpFill } from "react-icons/bs"
import { ImPower } from "react-icons/im"
import { GiWeight } from "react-icons/gi"

const MotorcycleCard = ({ model }) => (
  <>
    {model.map((value) => {
      return (
        <div key={value.id} className={style.MotorcycleCard_Content}>
          <div className={style.MotorcycleCard_Title}>
            <div key={value.id} className={style.MotorcycleCard_Title__Text}>
              <h3>{value.brand}</h3>
              <h4>{value.model}</h4>
              <p>{value.price} /day</p>
            </div>
            <img src={value.img} alt={value.model} />
          </div>
          <div className={style.MotorcycleCard_Stats}>
            <div className={style.MotorcycleCard_Stats__Box}>
              <ImPower size={35} style={{ color: "#1690f3" }} />
              <p>{value.hP} HP</p>
            </div>
            <div className={style.MotorcycleCard_Stats__Box}>
              <GiWeight size={35} style={{ color: "#1690f3" }} />
              <p>{value.weight} KG</p>
            </div>
            <div className={style.MotorcycleCard_Stats__Box}>
              <BsFuelPumpFill size={35} style={{ color: "#1690f3" }} />
              <p>{value.fuelCapacity} L</p>
            </div>
            <div className={style.MotorcycleCard_Stats__Box}>
              <TbEngine size={35} style={{ color: "#1690f3" }} />
              <p>{value.engineDisplacement} cm³</p>
            </div>
          </div>
        </div>
      )
    })}
  </>
)

export default MotorcycleCard

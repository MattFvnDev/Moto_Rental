import React from "react"
import style from "./CarouselItem.module.css"
import { ImPower } from "react-icons/im"
import { GiWeight } from "react-icons/gi"
import { BsFuelPumpFill } from "react-icons/bs"
import { TbEngine } from "react-icons/tb"

const CarouselItem = ({
  id,
  img,
  brand,
  type,
  model,
  engineDisplacement,
  fuelCapacity,
  price,
  hP,
  weight,
}) => {
  return (
    <div key={id} className={style.CarouselItem} >
      <div className={style.CarouselItem_Content}>
        <div className={style.CarouselItem_Title}>
          <div className={style.CarouselItem_Title__Text}>
            <h3>{brand}</h3>
            <h4>{model}</h4>
            <p>{price} per day</p>
          </div>
          <img src={img} alt={model} />
          <h5>{type}</h5>
        </div>
        <div className={style.CarouselItem_Stats}>
          <div className={style.CarouselItem_Stats__Box}>
            <ImPower size={35} style={{ color: "#1690f3" }} />
            <p>{hP} HP</p>
          </div>
          <div className={style.CarouselItem_Stats__Box}>
            <GiWeight size={35} style={{ color: "#1690f3" }} />
            <p>{weight} KG</p>
          </div>
          <div className={style.CarouselItem_Stats__Box}>
            <BsFuelPumpFill size={35} style={{ color: "#1690f3" }} />
            <p>{fuelCapacity} L</p>
          </div>
          <div className={style.CarouselItem_Stats__Box}>
            <TbEngine size={35} style={{ color: "#1690f3" }} />
            <p>{engineDisplacement} cm³</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem

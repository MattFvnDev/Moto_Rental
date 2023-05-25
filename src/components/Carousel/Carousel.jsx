import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from "./Carousel.module.css"
import { CarouselItem } from "../index"
import { motorcycleModels } from "../../constants"
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdRadioButtonChecked,
} from "react-icons/md"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  let timeOut = null

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        goForward()
      }, 2500)
  })

  const goBackward = () => {
    const isFirstItem = currentIndex === 0
    const newIndex = isFirstItem
      ? motorcycleModels.length - 1
      : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goForward = () => {
    const isLastItem = currentIndex === motorcycleModels.length - 1
    const newIndex = isLastItem ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goItem = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className={style.Carousel}
      onMouseEnter={() => {
        setAutoPlay(false)
        clearTimeout(timeOut)
      }}
      onMouseLeave={() => {
        setAutoPlay(true)
      }}
    >
      <div
        className={style.Carousel__Inner}
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {motorcycleModels.map((item, index) => {
          return <CarouselItem item={item} {...item} key={item.id} />
        })}
      </div>

      <div className={style.Carousel__Buttons}>
        <button className={style.Left_Arrow} onClick={goBackward}>
          <span>
            <MdOutlineArrowBackIos size={40} style={{ color: "#1690f3" }} />
          </span>
        </button>
        <div className={style.Radio__Buttons}>
          {motorcycleModels.map((item, index) => {
            return (
              <button
                key={item.id}
                className={style.Radio_Indicator}
                onClick={() => goItem(index)}
              >
                <span
                  className={`${
                    index === currentIndex
                      ? `${style.Indicator_Active}`
                      : `${style.Indicator}`
                  }`}
                >
                  <MdRadioButtonChecked size={25} />
                </span>
              </button>
            )
          })}
        </div>
        <button className={style.Right_Arrow} onClick={goForward}>
          <span>
            <MdOutlineArrowForwardIos size={40} style={{ color: "#1690f3" }} />
          </span>
        </button>
      </div>
      <Link to="models">Check our Fleet</Link>
    </div>
  )
}

export default Carousel

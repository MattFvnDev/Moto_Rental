import React from "react"
import style from "./Hero.module.css"
import { Link } from "react-router-dom"
import { main, shape } from "../../assets/index"
import { FaCheckDouble, FaAngleDoubleRight } from "react-icons/fa"

const Hero = () => {
  return (
    <>
      <section id="Home-Section" className={style.Hero_Section}>
        <div className={style.Hero_Container}>
          <img className={style.Shape} src={shape} alt="Doha City" />
          <div className={style.Hero_Content}>
            <div className={style.Hero_Content__Text}>
              <h4>Plan your rental now</h4>
              <h1>
                Save <span>huge</span> with our rental plan
              </h1>
              <p>
                Rent the motorcycle of your dreams. Unbeatable prices, unlimited
                miles, flexible pick-up options and convenient monthly payment
                schedule
              </p>
              <div className={style.Hero_Content__Text__Buttons}>
                <Link className={style.BookRide}>
                  Book a Ride&nbsp;
                  <FaCheckDouble size={20} />
                </Link>
                <Link className={style.LearnMore}>
                  Learn More&nbsp;
                  <FaAngleDoubleRight size={25} />
                </Link>
              </div>
            </div>
            <img className={style.Motorcycle} src={main} alt="Motorcycle" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

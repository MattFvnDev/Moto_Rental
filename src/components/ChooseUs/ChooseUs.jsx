import React from "react"
import style from "./ChooseUs.module.css"
import { Link } from "react-router-dom"
import { group } from "../../assets"
import { choices } from "..//../constants"
import { FaAngleRight } from "react-icons/fa"
import { ChooseCard } from "../index"

const ChooseUs = () => (
  <>
    <section className={style.Choose_Section}>
      <div className={style.Choose_Container}>
        <div className={style.Choose_Content}>
          <img className={style.Group} src={group} alt="" />
          <div className={style.ChooseUs_Content}>
            <div className={style.ChooseUs_Content__Text}>
              <h4>Why Customers Choose Us</h4>
              <h2>Best deals you have ever seen</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're providing you the top-quality services for your
                money. Our deals are designed to give you the ultimate renting
                experience.
              </p>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className={style.Details}
              >
                More Details&nbsp;
                <FaAngleRight size={25} />
              </Link>
            </div>
            <div className={style.ChooseUs_Content__Cards}>
              {choices.map((choice) => (
                <ChooseCard key={choice.id} {...choice} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ChooseUs

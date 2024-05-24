import style from "./Hero.module.css"
import {PageScroll} from "../index"
import { Link } from "react-router-dom"
import { main, shape } from "../../assets"
import { FaCheckDouble, FaAngleDoubleRight} from "react-icons/fa"

const Hero = () => {
  const bookARideButton = () => {
    document
      .querySelector("#Booking-Section")
      .scrollIntoView({ behavior: "smooth" })
  }

  const learnMoreButton = () => {
    document
      .querySelector("#FAQ-Section")
      .scrollIntoView({ behavior: "smooth" })
  }

  return (
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
                Rent the motorcycle of your dreams. Flexible pick-up options and
                convenient monthly payment schedule. Unbeatable prices,
                unlimited miles and the best rental experience you've ever had
                in Poland.
              </p>
              <div className={style.Hero_Content__Text__Buttons}>
                <Link className={style.BookRide} onClick={bookARideButton}>
                  Book a Ride&nbsp;
                  <FaCheckDouble size={20} />
                </Link>
                <Link className={style.LearnMore} onClick={learnMoreButton}>
                  Learn More&nbsp;
                  <FaAngleDoubleRight size={25} />
                </Link>
              </div>
            </div>
            <img className={style.Motorcycle} src={main} alt="Motorcycle" />
          </div>
        </div>
        {/* Move page up */}
        <PageScroll/>
      </section>
  )
}

export default Hero

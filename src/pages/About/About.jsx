import React from "react"
import style from "./About.module.css"
import { Footer, PagesBanner, PagesHeader, Plan } from "../../components/index"
import { aboutmain } from "../../assets"
import { about } from "../../constants"

const About = () => (
  <>
    <section className={style.About_Page}>
      <PagesHeader name={"About"} />
      <div className={style.About_Container}>
        <div className={style.About_Main}>
          <img src={aboutmain} alt="Company-members" />
          <div className={style.About_Main__Text}>
            <h3>About Us</h3>
            <h2>What we've achieved so far</h2>
            <p>
              Moto Rental operates motorcycle rental throughout Poland. We are
              one of the largest motorcycle rental companies in Poland. We have
              been on the market for more than a decade, and every day we make
              any effort to satisfy our customers.
            </p>
            <div className={style.About_Main__Text__Icons}>
              {about.map((about) => (
                <div
                  className={style.About_Main__Text__Icons__Box}
                  key={about.id}
                  {...about}
                >
                  <img src={about.icon} alt="About-icon" />
                  <h3>{about.number}</h3>
                  <p>{about.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Plan />
      <PagesBanner />
    </section>
    <Footer />
  </>
)

export default About

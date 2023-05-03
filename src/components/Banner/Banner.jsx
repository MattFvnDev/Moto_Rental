import React from "react"
import style from "./Banner.module.css"

const Banner = () => (
  <>
    <section id="Banner-Section" className={style.Banner_Section}>
      <div className={style.Banner_Container}>
        <div className={style.Banner_Content}>
          <div className={style.Banner_Content__Text}>
            <h3>
              Save <span>huge</span> with the cheapest rental offers!
            </h3>
            <p>
              Best locations in Poland.&nbsp;Top local motorcycle dealers.
              <span> 24/7</span> Support.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Banner

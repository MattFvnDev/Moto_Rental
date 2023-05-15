import React from "react"
import style from "./PagesBanner.module.css"
import { BsTelephoneFill } from "react-icons/bs"

const PagesBanner = () => (
  <>
    <section className={style.PagesBanner_Section}>
      <div className={style.PagesBanner_Container}>
        <div className={style.PagesBanner_Content}>
          <h2>Rent motorcycle of your dreams now!</h2>
          <div className={style.PagesBanner_Content__Box}>
            <BsTelephoneFill size={45} />
            <p>71-123-98-77</p>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default PagesBanner

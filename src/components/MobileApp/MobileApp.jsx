import React from "react"
import style from "./MobileApp.module.css"
import { google, apple } from "../../assets/index"

const MobileApp = () => (
  <>
    <section className={style.MobileApp_Section}>
      <div className={style.MobileApp_Container}>
        <div className={style.MobileApp_Content}>
          <h2>Manage yor rentals wherever you are</h2>
          <p>
            Manage your rental from virtually anywhere with our Mobile App.
            Request pickup & extend rental, manage & pay invoices. Get a quick
            summary of your rentals in your dashboard.
          </p>
        </div>
        <div className={style.MobileApp_Buttons}>
          <a href="https://play.google.com/store/apps" target="_blank">
            <img src={google} alt="Google Play store" />
          </a>
          <a href="https://www.apple.com/pl/app-store/" target="_blank">
            <img src={apple} alt="Apple store" />
          </a>
        </div>
      </div>
    </section>
  </>
)

export default MobileApp

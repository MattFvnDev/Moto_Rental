import React from "react"
import style from "./Contact.module.css"
import { Banner, Footer, PagesHeader } from "../../components"

const Contact = () => (
  <>
    <section className={style.Contact_Page}>
      <PagesHeader name={"Contact"} />
      <div className={style.Contact_Container}>
        <div className={style.Contact_Content}>
          <main className={style.Contact_Container}>
            <div className={style.Contact__Text}>
              <h2></h2>
              <p></p>
            </div>
           
          </main>
        </div>
      </div>
      <Banner />
      <Footer />
    </section>
  </>
)

export default Contact

import React from "react"
import style from "./PagesHeader.module.css"
import { Link } from "react-router-dom"

const PagesHeader = ({ name }) => (
  <>
    <section className={style.PagesHeader}>
      <div className={style.PagesHeader_Background}></div>
      <div className={style.PagesHeader_Container}>
        <div className={style.PagesHeader_Container__Text}>
          <h2>{name}</h2>
          <h3>
            <Link to="/">Home</Link> / {name}
          </h3>
        </div>
      </div>
    </section>
  </>
)

export default PagesHeader

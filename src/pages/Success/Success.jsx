import React from "react"
import style from "./Success.module.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Success = () => {
  const location = useLocation()

  return (
    <main className={style.Success_Container}>
      <div className={style.Success_Content}>
        <h1>
          Thank you for your email{" "}
          <span>{location.state.values.firstName}</span> 🏍️
        </h1>
        <div className={style.Success_Content__Text}>
          <p>
            We have sent you a confirmation over at{" "}
            <span> {location.state.values.emailAdress}</span>
            <br></br>
          </p>
          <p>We'll get back with a reply as soon as possible.</p>
        </div>
        <Link to="/">Back</Link>
      </div>
    </main>
  )
}

export default Success

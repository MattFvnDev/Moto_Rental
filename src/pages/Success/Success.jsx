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
        <p>
          We have sent you an email over at{" "}
          <span> {location.state.values.emailAdress}</span>
          <br></br>We will get back with a reply as soon as possible.
        </p>
        <Link to="/">Back</Link>
      </div>
    </main>
  )
}

export default Success

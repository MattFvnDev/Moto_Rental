import style from "./Confirmation.module.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Confirmation = () => {
  const {state} = useLocation()
  const personalDetails = state.values
  const {firstName, emailAdress} = personalDetails

  return (
    <main className={style.Confirmation_Container}>
      <div className={style.Confirmation_Content}>
        <h1>
          Thank you for your email{" "}
          <span>{firstName}</span> 🏍️
        </h1>
        <div className={style.Confirmation_Content__Text}>
          <p>
            We have sent you a booking confirmation over at{" "}
            <span> {emailAdress}</span>
            <br></br>
          </p>
          <p>
            If there are any questions or concerns about the rental process,
            please kindly contact us.
          </p>
        </div>
        <Link to="/">Back</Link>
      </div>
    </main>
  )
}

export default Confirmation

import React, { useState } from "react"
import style from "./BookForm.module.css"
import { RiMotorbikeFill } from "react-icons/ri"
import { GoLocation, GoCalendar } from "react-icons/go"
import { cities, motorcycles } from "../../constants"
import { IoClose } from "react-icons/io5"

const BookForm = () => {
  const [modal, setModal] = useState(false)

  //Booking motrocycle
  const [motoType, setMotoType] = useState("")
  const [pickUp, setPickUp] = useState("")
  const [dropOff, setDropOff] = useState("")
  const [pickTime, setPickTime] = useState("")
  const [dropTime, setDropTime] = useState("")

  //Modal informations
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")

  // Taking value of modal inputs
  const handleName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleZip = (e) => {
    setZipCode(e.target.value)
  }

  // Open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault()
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      motoType === ""
    ) {
    } else {
      setModal(!modal)
    }
  }

  // Getting value each booking input
  const handleMoto = (e) => {
    setMotoType(e.target.value)
  }

  const handlePick = (e) => {
    setPickUp(e.target.value)
  }

  const handleDrop = (e) => {
    setDropOff(e.target.value)
  }

  const handlePickTime = (e) => {
    setPickTime(e.target.value)
  }

  const handleDropTime = (e) => {
    setDropTime(e.target.value)
  }

  return (
    <>
      <section id="Booking-Section" className={style.Book_Section}>
        {/* overlay */}
        <div
          onClick={openModal}
          className={`${style.Modal_Overlay} ${
            modal ? `${style.Modal_Active}` : `""`
          }`}
        ></div>
        <div className={style.Book_Container}>
          <div className={style.Book_Content}>
            <div className={style.Book_Content__Box}>
              <h2>Book motorcycle</h2>
              <form className={style.Book_Form} action="">
                <div className={style.Book_Form__Type}>
                  <label>
                    <RiMotorbikeFill size={20} />
                    &nbsp;Choose a Motorcycle <b>*</b>
                  </label>
                  <select value={motoType} onChange={handleMoto}>
                    <option>Select your motorcycle</option>
                    {motorcycles.map((motorcycle) => (
                      <option key={motorcycle.id}>{motorcycle.name}</option>
                    ))}
                  </select>
                </div>
                <div className={style.Book_Form__Type}>
                  <label>
                    <GoLocation size={20} />
                    Pick-up <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    {cities.map((city) => (
                      <option key={city.id}>{city.name}</option>
                    ))}
                  </select>
                </div>
                <div className={style.Book_Form__Type}>
                  <label>
                    <GoLocation size={20} />
                    Drop-of <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop of location</option>
                    {cities.map((city) => (
                      <option key={city.id}>{city.name}</option>
                    ))}
                  </select>
                </div>
                <div className={style.Book_Form__Time}>
                  <label>
                    <GoCalendar size={20} />
                    Pick-up <b>*</b>
                  </label>
                  <input
                    type="date"
                    name=""
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                  />
                </div>
                <div className={style.Book_Form__Time}>
                  <label>
                    <GoCalendar size={20} />
                    Drop-of <b>*</b>
                  </label>
                  <input
                    type="date"
                    name=""
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                  />
                </div>
                <button
                  className={style.Search}
                  type="Submit"
                  onClick={openModal}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`${style.Modal} ${modal ? `${style.Modal_Active}` : ""}`}>
        <div className={style.Modal__Title}>
          <h2>Complete Your Booking</h2>
          <span>
            <IoClose size={40} onClick={openModal} />
          </span>
        </div>

        <div className={style.Modal__Information}>
          <h4>Upon completing booking request, you will receive:</h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and
            customer support number.
          </p>
        </div>

        <div className={style.Modal__Moto_Details}>
          <div className={style.Modal_Container}>
            <h4>Location & Date</h4>
            <div className={style.Modal__Moto_Details__Dates}>
              <div className={style.Modal__Moto_Details__Dates__Box}>
                <h5>Pick-Up Date & Time</h5>
                <p>
                  {pickTime} / <input type="time"></input>
                </p>
              </div>
            </div>

            <div className={style.Modal__Moto_Details__Dates}>
              <div className={style.Modal__Moto_Details__Dates__Box}>
                <h5>Drop-Off Date & Time</h5>
                <p>
                  {dropTime} / <input type="time"></input>
                </p>
              </div>
            </div>

            <div className={style.Modal__Moto_Details__Dates}>
              <div className={style.Modal__Moto_Details__Dates__Box}>
                <h5>Pick-Up Location</h5>
                <p>{pickUp}</p>
              </div>
            </div>

            <div className={style.Modal__Moto_Details__Dates}>
              <div className={style.Modal__Moto_Details__Dates__Box}>
                <h5>Drop-Off Location</h5>
                <p>{dropOff}</p>
              </div>
            </div>
          </div>
          <div className={style.Modal__Moto_Details__Dates__Box}>
            <h5>
              <span>Motorcycle -</span> {motoType}
            </h5>
          </div>
        </div>

        <div className={style.Modal__Moto_Informations}>
          <h4>Personal Information</h4>
          <form className={style.Modal__Form}>
            <div className={style.Form_Content__Box}>
              <label>
                First Name <b>*</b>
              </label>
              <input
                value={firstName}
                onChange={handleName}
                type="text"
                placeholder="Enter your first name"
              ></input>
            </div>
            <div className={style.Form_Content__Box}>
              <label>
                Last Name <b>*</b>
              </label>
              <input
                value={lastName}
                onChange={handleLastName}
                type="text"
                placeholder="Enter your last name"
              ></input>
            </div>

            <div className={style.Form_Content__Box}>
              <label>
                Phone Number <b>*</b>
              </label>
              <input
                value={phone}
                onChange={handlePhone}
                type="tel"
                placeholder="Enter your phone number"
              ></input>
            </div>
            <div className={style.Form_Content__Box}>
              <label>
                Age <b>*</b>
              </label>
              <input
                value={age}
                onChange={handleAge}
                type="number"
                placeholder="18"
              ></input>
            </div>

            <div className={style.Form_Content__Box}>
              <label>
                Email <b>*</b>
              </label>
              <input
                value={email}
                onChange={handleEmail}
                type="email"
                placeholder="Enter your email address"
              ></input>
            </div>
            <div className={style.Form_Content__Box}>
              <label>
                Address <b>*</b>
              </label>
              <input
                value={address}
                onChange={handleAddress}
                type="text"
                placeholder="Enter your street address"
              ></input>
            </div>
            <div className={style.Form_Content__Box}>
              <label>
                City <b>*</b>
              </label>
              <input
                value={city}
                onChange={handleCity}
                type="text"
                placeholder="Enter your city"
              ></input>
            </div>
            <div className={style.Form_Content__Box}>
              <label>
                Zip Code <b>*</b>
              </label>
              <input
                value={zipCode}
                onChange={handleZip}
                type="text"
                placeholder="Enter your zip code"
              ></input>
            </div>

            <button className={style.Book_Now}>Book Now</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookForm

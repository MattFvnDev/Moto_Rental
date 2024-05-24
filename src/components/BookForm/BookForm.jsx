import React, { useState, useEffect } from "react"
import style from "./BookForm.module.css"
import { RiMotorbikeFill } from "react-icons/ri"
import { GoLocation, GoCalendar } from "react-icons/go"
import { cities, motorcycles } from "../../constants"
import { Modal } from "../index"

const BookForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  //Booking motrocycle
  const [motoType, setMotoType] = useState("")
  const [pickUp, setPickUp] = useState("")
  const [dropOff, setDropOff] = useState("")
  const [pickTime, setPickTime] = useState("")
  const [dropTime, setDropTime] = useState("")

  // Disable page scroll when modal shows
  useEffect(() => {
    if (isModalOpen === true) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  // Open modal when all Booking inputs are selected
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
      setIsModalOpen(!isModalOpen)
    }
  }

  // Getting value each Booking input
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
      <section id="Booking-Section" className={style.Book_Section}>
        {/* Use portal to create Modal that floats above the rest of the Home page. */}
        <Modal
          isOpen={isModalOpen}
          pickTime={pickTime}
          dropTime={dropTime}
          pickUp={pickUp}
          dropOff={dropOff}
          motoType={motoType}
          onClose={() => setIsModalOpen(false)}
        />
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
  )
}

export default BookForm

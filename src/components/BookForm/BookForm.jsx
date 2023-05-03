import React from "react"
import style from "./BookForm.module.css"
import { RiMotorbikeFill } from "react-icons/ri"
import { GoLocation, GoCalendar } from "react-icons/go"
import { cities, motorcycles } from "../../constants"

const BookForm = () => {
  return (
    <>
      <section id="Booking-Section" className={style.Book_Section}>
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
                  <select>
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
                  <select>
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
                  <select>
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
                  <input type="date" name="" id="picktime" />
                </div>
                <div className={style.Book_Form__Time}>
                  <label>
                    <GoCalendar size={20} />
                    Drop-of <b>*</b>
                  </label>
                  <input type="date" name="" id="droptime" />
                </div>
                <button className={style.Search} type="Submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookForm

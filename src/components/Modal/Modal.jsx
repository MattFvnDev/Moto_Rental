import React from "react"
import style from "./Modal.module.css"
import { createPortal } from "react-dom"
import { IoClose } from "react-icons/io5"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

const Modal = ({
  isOpen,
  onClose,
  pickTime,
  dropTime,
  pickUp,
  dropOff,
  motoType,
}) => {
  const navigate = useNavigate({})

  // Basic Formik Logics
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      age: "",
      emailAdress: "",
      adress: "",
      city: "",
      zipCode: "",
    },

    // Validate Form with Yup
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      age: Yup.string().required("Age must be at least 18"),
      emailAdress: Yup.string()
        .email("Invalid Email Adress")
        .required("Email Adress is required"),
      adress: Yup.string().required("Adress is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.string().required("Zip Code is required"),
    }),

    // Submit Booking Form
    onSubmit: (values) => {
      console.log("Booking Form Submitted", formik.values)
      // Navigate on submission, pass form values in route state
      navigate("/confirmation", { state: { values } })
    },
  })
  if (!isOpen) return null
  // CreatePortal that renders children into a different part of the Document Object Model
  return createPortal(
    <>
      <div className={style.Modal_Overlay} />
      <div className={style.Modal}>
        <div className={style.Modal_Content}>
          <div className={style.Modal_Content__Title}>
            <h2>Complete Your Booking</h2>
            <span>
              <IoClose size={40} onClick={onClose} />
            </span>
          </div>
          <div className={style.Modal_Content__Information}>
            <h4>Upon completing booking request, you will receive:</h4>
            <p>
              Rental voucher and customer support number to confirm on arrival.
            </p>
          </div>
          <div className={style.Modal_Content__Details}>
            <div className={style.Modal_Content__Details__Container}>
              <h4>Location & Date</h4>
              <div className={style.Modal_Content__Details__Dates}>
                <div className={style.Modal_Content__Details__Dates__Box}>
                  <h5>Pick-Up Date & Time</h5>
                  <p>
                    {pickTime} / <input type="time"></input>
                  </p>
                </div>
              </div>

              <div className={style.Modal_Content__Details__Dates}>
                <div className={style.Modal_Content__Details__Dates__Box}>
                  <h5>Drop-Off Date & Time</h5>
                  <p>
                    {dropTime} / <input type="time"></input>
                  </p>
                </div>
              </div>

              <div className={style.Modal_Content__Details__Dates}>
                <div className={style.Modal_Content__Details__Dates__Box}>
                  <h5>Pick-Up Location</h5>
                  <p>{pickUp}</p>
                </div>
              </div>

              <div className={style.Modal_Content__Details__Dates}>
                <div className={style.Modal_Content__Details__Dates__Box}>
                  <h5>Drop-Off Location</h5>
                  <p>{dropOff}</p>
                </div>
              </div>
            </div>
            <div className={style.Modal_Content__Details__Dates__Box}>
              <h4>Motorcycle - {motoType}</h4>
            </div>
          </div>
          <div className={style.Modal_Content__Personal_Informations}>
            <h4>Personal Information</h4>
          </div>
          <form
            className={style.Modal_Content__Form}
            onSubmit={formik.handleSubmit}
          >
            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.firstName && formik.errors.firstName
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : "First Name"}
                <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                autoComplete="off"
                {...formik.getFieldProps("firstName")}
              ></input>
            </div>
            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.lastName && formik.errors.lastName
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : "Last Name"}
                <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                autoComplete="off"
                {...formik.getFieldProps("lastName")}
              ></input>
            </div>

            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? formik.errors.phoneNumber
                  : "Phone Number"}
                <b>*</b>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                name="phoneNumber"
                {...formik.getFieldProps("phoneNumber")}
              ></input>
            </div>
            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.age && formik.errors.age
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.age && formik.errors.age
                  ? formik.errors.age
                  : "Age"}
                <b>*</b>
              </label>
              <input
                type="number"
                placeholder="18"
                name="age"
                autoComplete="off"
                {...formik.getFieldProps("age")}
              ></input>
            </div>

            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.emailAdress && formik.errors.emailAdress
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.emailAdress && formik.errors.emailAdress
                  ? formik.errors.emailAdress
                  : "Email Adress"}
                <b>*</b>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="emailAdress"
                autoComplete="off"
                {...formik.getFieldProps("emailAdress")}
              ></input>
            </div>
            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.adress && formik.errors.adress
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.adress && formik.errors.adress
                  ? formik.errors.adress
                  : "Adress"}
                <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your street address"
                name="adress"
                {...formik.getFieldProps("adress")}
                autoComplete="off"
              ></input>
            </div>
            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.city && formik.errors.city
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : "City"}
                <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                name="city"
                autoComplete="off"
                {...formik.getFieldProps("city")}
              ></input>
            </div>
            <div className={style.Modal_Content__Form__Box}>
              <label
                className={`${
                  formik.touched.zipCode && formik.errors.zipCode
                    ? `${style.Error}`
                    : `${""}`
                }`}
              >
                {formik.touched.zipCode && formik.errors.zipCode
                  ? formik.errors.zipCode
                  : "Zip Code"}
                <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your zip code"
                name="zipCode"
                autoComplete="off"
                {...formik.getFieldProps("zipCode")}
              ></input>
            </div>
            <button className={style.Book_Now} type="submit">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  )
}

export default Modal

import React from "react"
import style from "./Contact.module.css"
import { Banner, PagesHeader } from "../../components"
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import { RiMailSendFill } from "react-icons/ri"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate({})

  // Basic Formik Logics
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAdress: "",
      phoneNumber: "",
      textArea: "",
      consent: "",
    },

    // Validate Form with Yup
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "First Name must be maximum 15 charracters or less.")
        .required("First Name is required"),
      lastName: Yup.string()
        .max(15, "Last Name must be maximum 15 charracters or less.")
        .required("Last Name is required"),
      emailAdress: Yup.string()
        .email("Invalid Email Adress")
        .required("Email Adress is required"),
      phoneNumber: Yup.string().optional("Phone number is not obligatory"),
      textArea: Yup.string().required("Content is mandatory"),
      consent: Yup.array().required("Consent to process data must be checked"),
    }),
    // Submit Form
    onSubmit: (values) => {
      console.log("Contact Form Submitted", formik.values)
      // Navigate on submission, pass form values in route state
      navigate("/success", { state: { values }, replace: true })
    },
  })

  return (
    <>
      <section className={style.Contact_Page}>
        <PagesHeader name={"Contact"} />
        <div className={style.Contact_Container}>
          <div className={style.Contact_Content}>
            <div className={style.Contact__Text}>
              <h2>Need more information?</h2>
              <p>
                Our team is excited to help you find answers and resolve your
                concerns.
              </p>
              <div className={style.Contact__Text_Content}>
                <div className={style.Contact__Text_Content__Box}>
                  <BsFillTelephoneFill size={30} style={{ color: "1690F3" }} />
                  <p>71-123-98-77</p>
                </div>
                <div className={style.Contact__Text_Content__Box}>
                  <BsFillEnvelopeFill size={30} style={{ color: "1690F3" }} />
                  <p>motorental@rental.com</p>
                </div>
                <div className={style.Contact__Text_Content__Box}>
                  <IoLocationSharp size={30} style={{ color: "1690F3" }} />
                  <p>Wroclaw, Poland</p>
                </div>
              </div>
            </div>
            <div className={style.Contact__Form}>
              <form
                className={style.Form_Content}
                onSubmit={formik.handleSubmit}
              >
                <div className={style.Form_Content__Box}>
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
                    placeholder="First Name"
                    autoComplete="off"
                    name="firstName"
                    // value={formik.values.firstName}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // Reducing input props (getFieldProps return object with properties)
                    {...formik.getFieldProps("firstName")}
                  />
                </div>

                <div className={style.Form_Content__Box}>
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
                    placeholder="Last Name"
                    autoComplete="off"
                    name="lastName"
                    // value={formik.values.lastName}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps("lastName")}
                  />
                </div>

                <div className={style.Form_Content__Box}>
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
                    placeholder="E-mail Adress"
                    autoComplete="off"
                    name="emailAdress"
                    // value={formik.values.emailAdress}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps("emailAdress")}
                  />
                </div>

                <div className={style.Form_Content__Box}>
                  <label>
                    Phone (optional)
                    <b>*</b>
                  </label>
                  <input
                    type="tel"
                    autoComplete="off"
                    name="phoneNumber"
                    // value={formik.values.phoneNumber}
                    // onChange={formik.handleChange}
                    {...formik.getFieldProps("phoneNumber")}
                  />
                </div>

                <div className={style.Form_Content__Box}>
                  <label
                    className={`${
                      formik.touched.textArea && formik.errors.textArea
                        ? `${style.Error}`
                        : `${""}`
                    }`}
                  >
                    {formik.touched.textArea && formik.errors.textArea
                      ? formik.errors.textArea
                      : "Tell us about it"}
                    <b>*</b>
                  </label>
                  <textarea
                    name="textArea"
                    placeholder="Write here..."
                    autoComplete="off"
                    // value={formik.values.textArea}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps("textArea")}
                  ></textarea>
                </div>
                <div className={style.Consent}>
                  <label
                    className={`${
                      formik.touched.consent && formik.errors.consent
                        ? `${style.Error}`
                        : `${""}`
                    }`}
                  >
                    {formik.touched.consent && formik.errors.consent
                      ? formik.errors.consent
                      : "Consent"}
                    <b>*</b>
                  </label>
                  <div>
                    <input
                      type="checkbox"
                      value="checked"
                      name="consent"
                      onChange={formik.handleChange}
                    />
                    <p>
                      I agree to processing of my personal data included in this
                      form for contact purposes.
                    </p>
                  </div>
                </div>
                <button className={style.Send} type="submit">
                  <RiMailSendFill size={30} />
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className={style.Contact__Map}>
            <h2>You can find us here</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80129.83120664426!2d16.8166112416431!3d51.125852477517505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc06ff77c5dbf%3A0x24e0a20e9dc06e7f!2sPort%20Lotniczy%20Wroc%C5%82aw%20S.A.!5e0!3m2!1spl!2spl!4v1684846476806!5m2!1spl!2spl"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Banner />
      </section>
    </>
  )
}
export default Contact

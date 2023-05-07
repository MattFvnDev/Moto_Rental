import React from "react"
import style from "./Footer.module.css"
import { footerLinks, socialMedia } from "../../constants/index"
import { logo } from "../../assets"
import { BsTelephoneFill, BsEnvelopeAtFill } from "react-icons/bs"

const Footer = () => (
  <section className={style.Footer_Section}>
    <div className={style.Footer_Container}>
      <div className={style.Footer_Content}>
        <div className={style.Footer_Content__Details}>
          <img src={logo} alt="Moto Rental" />
          <p>
            We offer the best range of motorcycles for your needs. Rent the
            motorcycle of your dreams now.
          </p>
        </div>
        <div className={style.Footer_Content__Containers}>
          <div className={style.Footer_Content__Contact}>
            <h4>Contact details</h4>
            <span>
              <BsTelephoneFill size={30} />
              <p>71-123-98-77</p>
            </span>
            <span>
              <a href="mailto:motorental@gmail.com">
                <BsEnvelopeAtFill size={30} />
                <p>motorental@gmail.com</p>
              </a>
            </span>
          </div>
          {footerLinks.map((footerLink) => (
            <div className={style.Footer_Content__Links} key={footerLink.key}>
              <h4>{footerLink.title}</h4>
              <ul>
                {footerLink.Links.map((Link) => (
                  <li>
                    <a href="/">{Link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={style.SocialMedia_Container}>
      <div className={style.SocialMedia_Content}>
        <div className={style.SocialMedia_Content__Text}>
          2023 Moto Rental®. All Rights Reserved.
        </div>
        <div className={style.SocialMedia_Content__Box}>
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Footer

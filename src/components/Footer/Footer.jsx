import React from "react"
import style from "./Footer.module.css"
import { footerLinks, socialMedia } from "../../constants"
import { logo } from "../../assets"

const Footer = () => (
  <footer className={style.Footer}>
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
          {footerLinks.map((footerLink, index) => (
            <div className={style.Footer_Content__Links} key={index}>
              <h4>{footerLink.title}</h4>
              <ul>
                {footerLink.Links.map((Link, index) => (
                  <li key={index}>
                    <a href="/" key={index}>
                      {Link.name}
                    </a>
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
          2023 Moto Rental®. All rights reserved.
        </div>
        <div className={style.SocialMedia_Content__Box}>
          {socialMedia.map((social, index) => (
            <a href={`${social.link}`} target="_blank" key={index}>
              <img key={social.id} src={social.icon} alt={social.id} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

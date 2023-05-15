import React from "react"
import style from "./Models.module.css"
import {
  PagesHeader,
  PagesBanner,
  Footer,
  MotorcycleCard,
} from "../../components/index"
import { motorcycleModels } from "../../constants"

const Models = () => (
  <>
    <section className={style.Models_Page}>
      <PagesHeader name={"Models"} />
      <div className={style.Models_Container}>
        <div className={style.Models_Container__Box}>
          {motorcycleModels.map((motorcycle) => (
            <MotorcycleCard key={motorcycle.id} {...motorcycle} />
          ))}
        </div>
      </div>
      <PagesBanner />
      <Footer />
    </section>
  </>
)

export default Models

import React, { useState } from "react"
import style from "./Models.module.css"
import {
  PagesHeader,
  PagesBanner,
  Footer,
  MotorcycleCard,
  Filter,
} from "../../components"
import { motorcycleModels } from "../../constants"

const Models = () => {
  const [model, setModel] = useState(motorcycleModels)
  const modelBrands = [...motorcycleModels.map((value) => value.brand)]

  const filterBrand = (currentBrand) => {
    const newBrand = motorcycleModels.filter((newValue) => {
      return newValue.brand === currentBrand
    })
    setModel(newBrand)
  }

  const modelTypes = [...motorcycleModels.map((value) => value.type)]

  const filterType = (currentType) => {
    const newType = motorcycleModels.filter((newType) => {
      return newType.type === currentType
    })
    setModel(newType)
  }

  return (
    <>
      <section className={style.Models_Page}>
        <PagesHeader name={"Models"} />
        <div className={style.Models_Container}>
          <div className={style.Models_Container__Box}>
            <Filter
              modelBrands={modelBrands}
              setModel={setModel}
              filterBrand={filterBrand}
              modelTypes={modelTypes}
              filterType={filterType}
            />
            <MotorcycleCard model={model} />
          </div>
        </div>
        <PagesBanner />
        <Footer />
      </section>
    </>
  )
}

export default Models

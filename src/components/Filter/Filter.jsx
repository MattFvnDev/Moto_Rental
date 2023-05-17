import React from "react"
import style from "./Filter.module.css"
import { motorcycleModels } from "../../constants"

const Filter = ({ filterBrand, setModel, filterType }) => (
  <div className={style.Filter_Container}>
    <h3>Choose your motorcycle from our fleet. </h3>
    <h2>Don't wait! Rent today!</h2>
    <div className={style.Filter__Buttons}>
      <button className={style.All} onClick={() => setModel(motorcycleModels)}>
        All
      </button>
      <button onClick={() => filterBrand("Yamaha")}>Yamaha</button>
      <button onClick={() => filterType("Super Sport")}>Sport</button>
      <button onClick={() => filterBrand("Honda")}>Honda</button>
      <button onClick={() => filterType("Adventure")}>Adventure</button>
      <button onClick={() => filterBrand("Kawasaki")}>Kawasaki</button>
      <button onClick={() => filterType("Naked")}>Naked</button>
    </div>
  </div>
)

export default Filter

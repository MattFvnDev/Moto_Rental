import React, { useState } from "react"
import style from "./Accordion.module.css"
import { Question } from "../index"

const Accordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className={style.Accordion}>
      {questions.map((question, index) => (
        <Question
          question={question}
          key={index}
          {...question}
          isActiveQuestion={index === activeIndex}
          setActiveIndex={setActiveIndex}
          questionIndex={index}
        />
      ))}
    </div>
  )
}

export default Accordion

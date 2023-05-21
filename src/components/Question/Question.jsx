import React from "react"
import style from "./Question.module.css"
import { TbCircleArrowDownFilled, TbCircleArrowUpFilled } from "react-icons/tb"

const Question = ({
  question,
  answer,
  isActiveQuestion,
  setActiveIndex,
  questionIndex,
}) => {
  const toggleQuestion = () => {
    const nextQuestion = isActiveQuestion ? null : questionIndex
    setActiveIndex(nextQuestion)
  }
  return (
    <div className={style.Question}>
      <div className={style.Question_Content} onClick={toggleQuestion}>
        <div className={style.Question_Content__Box}>{question}</div>
        <div className={style.Question_Content__Arrow}>
          {isActiveQuestion ? (
            <TbCircleArrowUpFilled size={40} style={{ color: "#1690f3" }} />
          ) : (
            <TbCircleArrowDownFilled size={40} style={{ color: "#1690f3" }} />
          )}
        </div>
      </div>
      {isActiveQuestion && <div className={style.Answer}>{answer}</div>}
    </div>
  )
}

export default Question

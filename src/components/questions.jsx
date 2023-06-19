import React from 'react'
import AccordItem from './accordion'
import '../css/questions.css'

const Questions = () => {
  return (
    <>
      <section className="questions">
        <div className="container questions__container">
          <h2 className="title questions__title">
            Вопросы
          </h2>
          <AccordItem />
        </div>
      </section>
    </>
  )
}

export default Questions;
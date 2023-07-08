import React from 'react'
import Accord from './accordion'
//import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/questions.css'

const Questions = () => {
  return (
    <>
      <section className="questions">
        <div className="container questions__container">
          <h2 className="title questions__title">
            Вопросы
          </h2>
          <Accord />
        </div>
      </section>
    </>
  )
}

export default Questions;
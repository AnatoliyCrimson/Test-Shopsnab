import React from 'react'
import '../css/consultation.css'
import Img from '../assets/consultation-img.svg'

const Consultation = ({active, setActive}) => {
  return (
    <>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="consultation__content" onClick={e => e.stopPropagation()}>
          <img src={Img} className="consultation__img" alt="Телефон" />
          <h2 className="title consultation__title">
            Скоро вам позвонят
          </h2>
          <p className="consultation__text">
            В ближайшее время наш менеджер свяжется с вами и ответит на все вопросы
          </p>
          <button className="btn btn-modal consultation__btn" onClick={() => setActive(false)}>
            Закрыть
          </button>
        </div>
      </div>
    </>
  )
}

export default Consultation;
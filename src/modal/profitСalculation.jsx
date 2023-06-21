import React from 'react'
import '../css/profitСalculation.css'
import Img from '../assets/profit-calculation-img.svg'

const ProfitCalculation = ({active, setActive}) => {
  return (
    <>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="profitCalculation__content" onClick={e => e.stopPropagation()}>
          <img src={Img} alt="Калькулятор" className="profitCalculation__img" />
          <h2 className="title profitCalculation__title">
            Укажите ваш город и мы сделаем расчет средней прибыли в месяц по каждому из Тарифов
          </h2>
          <form action="/" className="profitCalculation__form">
            <input type="text" name="Fio" placeholder="ФИО" className="profitCalculation__input" required />
            <input type="text" name="City" placeholder="Город" className="profitCalculation__input" required />
            <input type="number" name="phone"  placeholder="+7 (000) 000-00-00" className="profitCalculation__input" required />
            <button type="submit" className="btn btn-modal profitCalculation__btn" onClick={() => setActive(false)} >Расчитать</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProfitCalculation;
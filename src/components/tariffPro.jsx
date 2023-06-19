import React from 'react'
import '../css/tariffPro.css'

const TariffPro = () => {
  return (
    <>
      <section className='pro' id="tariff-pro">
        <div className="container pro__container">
          <h2 className="title pro__title">
            Тариф Pro
          </h2>
          <div className='pro__info'>
            <div className="pro__pro-left pro-left">
              <img src={ require ("../assets/pro-left.png") } alt="Реклама" className="pro-left__img" />
              <div className="pro-left__text">
                <h3 className="pro-left__title">
                  Включает полностью Тариф Plus, но вам не придется самостоятельно заниматься рекламой.
                </h3>
                <p className="pro-left__p">
                  Мы полностью продвинем интернет-магазин и выведем его на прибыль от 120 000 рублей в месяц
                </p>
              </div>
            </div>
            <div className="pro__pro-right pro-right">
            <img src={ require ("../assets/pro-right.png") } alt="Переписка в телефоне" className="pro-right__img" />
              <div className="pro-right__text">
                <h3 className="pro-right__title">
                  Вы только принимаете заявки от покупателей и осуществляете доставку
                </h3>
                <p className="pro-right__p">
                  Гарантия и защита вложенных средств, условия фиксируются в договоре
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TariffPro; 
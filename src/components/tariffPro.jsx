import React from 'react'
import '../styles/tariffPro.css'

const TariffPro = () => {
  return (
    <>
      <section className='pro'>
        <div className="container pro__container">
          <h1 className="pro__title">
            Тариф Pro
          </h1>
          <div className='pro__info'>
            <div className="pro__store store">
              <img src="/" alt="Реклама" className="store__img" />
              <div className="store__text">
                <h3 className="store__title">
                  Включает полностью Тариф Plus, но вам не придется самостоятельно заниматься рекламой.
                </h3>
                <p className="store__p">
                  Мы полностью продвинем интернет-магазин и выведем его на прибыль от 120 000 рублей в месяц
                </p>
              </div>
            </div>
            <div className="pro__provider provider">
            <img src="/" alt="Переписка в телефоне" className="provider__img" />
              <div className="provider__text">
                <h3 className="provider__title">
                  Вы только принимаете заявки от покупателей и осуществляете доставку
                </h3>
                <p className="provider__p">
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
import React, { useState } from 'react'
import '../css/hero.css'
import ProfitCalculation from '../modal/profitСalculation';

const Hero = () => {
  const [modalActive, setModalActive] = useState ()
  return (
    <>
      <section className='hero'>
        <div className="container hero__container">
          <div className="hero__top">
            <div className='hero__title-text'>
              <h1 className='title hero__title'>
                Интернет-магазин диванов 
              </h1>
              <ul className='hero__descr'>
                <li className='hero__li'>
                  • Откроем и раскрутим магазин под ваш регион
                </li>
                <li className='hero__li'>
                  • Отличные условия от поставщика, закупка товара не требуется!
                </li>
                <li className='hero__li'>
                  • Ваш заработок на продаже диванов составит 1 400 00 руб в год &emsp;&emsp;&emsp;(указана средняя прибыль)
                </li>
              </ul>
            </div>
            <div className="hero__btns">
              <a href="/" className='btn hero__btn hero__btn_opacity'>
                Онлайн-демо магазина
              </a>
              <button className='btn hero__btn' onClick={() => setModalActive(true)}>
                Расчет прибыли для вашего города
              </button>
            </div>
          </div>
          <div className='hero__bottom'>
            <div className='hero__column'>
              <p className='hero__up-item'>
                СКОЛЬКО 
              </p>
              <p className='hero__down-item'>
                3-5 рабочих дней
              </p>
            </div>
            <div className='hero__column'>
              <p className='hero__up-item'>
                ПРИБЫЛЬ 
              </p>
              <p className='hero__down-item'>
                от 90 000 до 230 000 рублей в месяц
              </p>
            </div>
            <div className='hero__column'>
              <p className='hero__up-item'>
                ЧТО ВЫ ПОЛУЧИТЕ 
              </p>
              <p className='hero__down-item'>
                интернет-магазин + поставщики + продвижение
              </p>
            </div>
            <div className='hero__column'>
              <p className='hero__up-item'>
                КОМПЛЕКТ ВКЛЮЧАЕТ 
              </p>
              <p className='hero__down-item'>
                хостинг, домен, поддержка
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProfitCalculation active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Hero;
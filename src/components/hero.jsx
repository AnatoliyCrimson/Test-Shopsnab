import React from 'react'
import '../styles/hero.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container hero__container">
          <div className='hero__info'>
            <h1 className='hero__title'>
              Интернет-магазин диванов 
            </h1>
            <ul className='hero_descr'>
              <li className='hero__li'>
                Откроем и раскрутим магазин под ваш регион
              </li>
              <li className='hero__li'>
                Отличные условия от поставщика, закупка товара не требуется!
              </li>
              <li className='hero__li'>
                Ваш заработок на продаже диванов составит 1 400 00 руб в год (указана средняя прибыль)
              </li>
            </ul>
          </div>
          <div>
            <a href="/" className='btn hero__btn '>
              Онлайн-демо магазина
            </a>
            <a href="/" className='btn hero__btn hero__btn_transparent'>
              Расчет прибыли для вашего города
            </a>
          </div>
          <div className='hero__info'>
            <p className='hero__paragraph'>
              СКОЛЬКО <span className='hero__span'>3-5 рабочих дней</span>
            </p>
            <p className='hero__paragraph'>
              ПРИБЫЛЬ <span className='hero__span'>от 90 000 до 230 000 рублей в месяц</span>
            </p>
            <p className='hero__paragraph'>
              ЧТО ВЫ ПОЛУЧИТЕ <span className='hero__span'>интернет-магазин + поставщики + продвижение</span>
            </p>
            <p className='hero__paragraph'>
              КОМПЛЕКТ ВКЛЮЧАЕТ <span className='hero__span'>хостинг, домен, поддержка</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
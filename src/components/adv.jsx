import React from 'react'
import '../css/adv.css'

const Adv = () => {
  return (
    <>
      <section className='advert'>
        <div className="container advert__container">
          <div className="advert__discount">
            <p className='advert__value'>
              20% 
            </p>
            <p className='advert__date'>
                с 01.02 по 29.02
            </p>
          </div>
          <div className="advert__info">
            <h2 className='advert__title'>
              Весь февраль скидка 20% на все Тарифы! 
            </h2>
            <p className='advert__descr'>
              Самый полезный и актуальный подарок! Начните год с новым Бизнесом!
            </p>
          </div>
          <a href="/" className='btn advert__btn'>
            Условия акции
          </a>
        </div>
      </section>
    </>
  )
}

export default Adv;
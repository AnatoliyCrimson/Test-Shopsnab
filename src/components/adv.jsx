import React from 'react'
import '../styles/adv.css'

const Adv = () => {
  return (
    <>
      <section className='advert'>
        <div className="container advert__container">
          <p className='advert__discount'>
            20% <span className='advert__date'>с 01.02 по 29.02</span>
          </p>
          <p className='advert__info'>
            Весь февраль скидка 20% на все тарифы! <span className='advert__descr'>Самый полезный и актуальный подарок! Начните год с новым Бизнесом!</span>
          </p>
          <a href="/" className='btn advert__btn'>
            Условия акции
          </a>
        </div>
      </section>
    </>
  )
}

export default Adv;
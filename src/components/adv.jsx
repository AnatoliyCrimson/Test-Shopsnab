import React, { useState } from 'react'
import '../css/adv.css'
import TermsAdv from '../modal/termsAdv';

const Adv = () => {
  const [modalActive, setModalActive] = useState ()
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
            <p className='advert__title'>
              Весь февраль скидка 20% на все Тарифы! 
            </p>
            <p className='advert__descr'>
              Самый полезный и актуальный подарок! Начните год с новым Бизнесом!
            </p>
          </div>
          <button className='btn advert__btn' onClick={() => setModalActive(true)} >
            Условия акции
          </button>
        </div>
      </section>
      <TermsAdv active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Adv;
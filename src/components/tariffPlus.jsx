import React, { useState } from 'react'
import '../css/tariffPlus.css'

const TariffPlus = () => {

  const [fname, setFname] = useState ('');

  const fnameChange = event => {
    const result = event.target.value.replace(/[^а-я]/gi, '');

    setFname(result);
  };

  const [number, setNumber] = useState ('');

  const numberChange = event => {
    const result = event.target.value.replace(/[^0-9]/gi, '');

    setNumber(result);
  };

  const [mail, setMail] = useState ('');

  const mailChange = event => {
    const result = event.target.value.replace(/[^a-z, @, .]/gi, '');

    setMail(result);
  };

  return (
    <>
      <section className='plus' id="tariff-plus">
        <div className="container plus__container">
          <h2 className="title plus__title">
            Тариф Plus
          </h2>
          <div className='plus__info'>
            <div className="plus__plus-left plus-left">
              <img src={ require ("../assets/plus-left.png") } alt="Тариф Start" className="plus-left__img" />
              <div className="plus-left__text">
                <h3 className="plus-left__title">
                  Полностью включает Тариф Start
                </h3>
                <p className="plus-left__p">
                  Вы получаете комплект Тарифа Start (интернет-магазин + поставщики)
                </p>
              </div>
            </div>
            <img src={ require("../assets/plus.png") } alt="Плюс" className="plus__img" />
            <div className="plus__plus-right plus-right">
            <img src={ require ("../assets/plus-right.png") } alt="Громкоговоритель" className="plus-right__img" />
              <div className="plus-right__text">
                <h3 className="plus-right__title">
                  Вы получаете рекламу на 25 000 рублей
                </h3>
                <p className="plus-right__p">
                  Которая вам обеспечит от 45 000 рублей чистой прибыли
                </p>
              </div>
            </div>
          </div>
          <div className="plus__form-info form-info">
            <div className="form-info__text">
              <div>
                <h3 className="form-info__title">
                  Тариф Plus
                </h3>
                <p className="form-info__descr">
                  Тариф Start + рекламная компания
                </p>
              </div>
              <div className="form-info__price">
                <p className="form-info__price-value">
                  35 200 ₽ <span className="form-info__prive-old">44 000 ₽</span>
                </p>
                <p className="form-info__discount">
                  Сейчас скидка
                </p>
              </div>
            </div>
              <form action="https://jsonplaceholder.typicode.com/posts" className="start__form form" method="POST">
              <input type="text" value={fname} onChange={fnameChange} name="First-Name" className="form__input" placeholder="Имя" required />
              <input type="text" value={number} onChange={numberChange} name="Phone" className="form__input" placeholder="+7 (000) 000-00-00" required />
              <input type="e-mail" value={mail} onChange={mailChange} name="E-mail" className="form__input" placeholder="E-mail" required />
              <button type="submit" className="form__btn">Отправить</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default TariffPlus; 
import React, { useState } from 'react'
import '../css/tariffStart.css'

const TariffStart = () => {
  
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
      <section className='start' id="tariff-start">
        <div className="container start__container">
          <h2 className="title start__title">
            Тариф Start
          </h2>
          <div className="start__info">
            <div className="start__start-left start-left">
              <img src={ require("../assets/e-store-tariff-start.png") } alt="Интернет-магазин" className="start-left__img" />
              <div className="start-left__text">
                <h3 className="start-left__title">
                  Интернет-магазин
                </h3>
                <p className="start-left__p">
                  Не надо самостоятельно заказывать разработку, тратить свое время и нервы. Мы уже сделали это за вас
                </p>
              </div>
            </div>
            <img src={ require("../assets/plus.png") } alt="Плюс" className="start__img" />
            <div className="start__start-right start-right">
            <img src={ require("../assets/provider-tariff-start.png") } alt="Ящики" className="start-right__img" />
              <div className="start-right__text">
                <h3 className="start-right__title">
                  Поставщики
                </h3>
                <p className="start-right__p">
                  Мы предоствляем контакты поставщика и гарантию работы на наиболее выгодных условиях
                </p>
              </div>
            </div>
          </div>
          <div className="start__form-info form-info">
            <div className="form-info__text">
              <div>
                <h3 className="form-info__title">
                  Тариф Start
                </h3>
                <p className="form-info__descr">
                  Интернет-магазин + поставщики
                </p>
              </div>
              <div className="form-info__price">
                <p className="form-info__price-value">
                  12 000 ₽<span className="form-info__prive-old">15 000 ₽</span>
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

export default TariffStart; 
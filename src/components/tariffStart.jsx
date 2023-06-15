import React from 'react'
import '../styles/tariffStart.css'

const TariffStart = () => {
  return (
    <>
      <section className='start'>
        <div className="container start__container">
          <h2 className="start__title">
            Тариф Start
          </h2>
          <div className='start__info'>
            <div className="start__store store">
              <img src="/" alt="Интернет-магазин" className="store__img" />
              <div className="store__text">
                <h3 className="store__title">
                  Интернет-магазин
                </h3>
                <p className="store__p">
                  Не надо самостоятельно заказывать разработку, тратить свое время и нервы. Мы уже сделали это за вас
                </p>
              </div>
            </div>
            <img src="/" alt="Плюс" className="start__img" />
            <div className="start__provider provider">
            <img src="/" alt="Ящики" className="provider__img" />
              <div className="provider__text">
                <h3 className="provider__title">
                  Поставщики
                </h3>
                <p className="provider__p">
                  Мы предоствляем контакты поставщика и гарантию работы на наиболее выгодных условиях
                </p>
              </div>
            </div>
          </div>
          <div className="start__form-info form-info">
            <div className="form-info__text">
              <h3 className="form-info__title">
                Тариф Start
              </h3>
              <p className="form-info__descr">
                Интернет-магазин + поставщики
              </p>
              <div className="form-info__price">
                <p className="form-info__price">
                  12 000 ₽ <span className="form-info__prive-old">15 000 ₽</span>
                </p>
                <p className="form-info__discount">
                  Сейчас скидка
                </p>
              </div>
            </div>
            <div className="start__form form">
              <form action="https://jsonplaceholder.typicode.com/posts" className="form" method="POST">
                <input type="text" name="First-Name" className="form__first-name" placeholder="Имя" required />
                <input type="tel" name="Phone" className="form__tel" placeholder="+7 (000) 000-00-00" required />
                <input type="e-mail" name="E-mail" className="form__e-mail" placeholder="E-mail" required />
                <button type="submit" className="form__btn">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TariffStart; 
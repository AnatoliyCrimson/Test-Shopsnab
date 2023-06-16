import React from 'react'
import '../css/tariffPlus.css'

const TariffPlus = () => {
  return (
    <>
      <section className='plus'>
        <div className="container plus__container">
          <h2 className="title plus__title">
            Тариф Plus
          </h2>
          <div className='plus__info'>
            <div className="plus__store store">
              <img src="/" alt="Тариф Start" className="store__img" />
              <div className="store__text">
                <h3 className="store__title">
                  Полностью включает Тариф Start
                </h3>
                <p className="store__p">
                  Вы получаете комплект Тарифа Start (интернет-магазин + поставщики)
                </p>
              </div>
            </div>
            <img src="/" alt="Плюс" className="plus__img" />
            <div className="plus__provider provider">
            <img src="/" alt="Громкоговоритель" className="provider__img" />
              <div className="provider__text">
                <h3 className="provider__title">
                  Вы получаете рекламу на 25 000 рублей
                </h3>
                <p className="provider__p">
                  Которая вам обеспечит от 45 000 рублей чистой прибыли
                </p>
              </div>
            </div>
          </div>
          <div className="plus__form-info form-info">
            <div className="form-info__text">
              <h3 className="form-info__title">
                Тариф Plus
              </h3>
              <p className="form-info__descr">
                Тариф Start + рекламная компания
              </p>
              <div className="form-info__price">
                <p className="form-info__price">
                  35 200 ₽ <span className="form-info__prive-old">44 000 ₽</span>
                </p>
                <p className="form-info__discount">
                  Сейчас скидка
                </p>
              </div>
            </div>
            <div className="plus__form form">
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

export default TariffPlus; 
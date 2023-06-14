import React from 'react'
import '../styles/startBuisness.css'

const StartBuisness = () => {
  return (
    <>
      <section className='start-buisness'>
        <div className="container start-buisness__container">
          <h1 className="start-buisness-title">
            Как запустить бизнес?
          </h1>
          <ul className="start-buisness__columns">
            <li className="start-buisness__column">
              <img src="/" alt="Диспетчер" className="start-buisness__img start-buisness__img_first" />
              <h2 className="start-buisness__heading">
                Заявка
              </h2>
              <p className="start-buisness__text">
                Вы оставляете заявку, мы связываемся с вами для разбора вопросов и выбора Тарифа
              </p>
            </li>
            <li className="start-buisness__column">
              <img src="/" alt="Ноутбук" className="start-buisness__img start-buisness__img_second" />
              <h2 className="start-buisness__heading">
                Интернет-магазин
              </h2>
              <p className="start-buisness__text">
                Мы создаем для вас интернет-магазин, предоставляем поставщика и запускаем рекламу
              </p>
            </li>
            <li className="start-buisness__column">
              <img src="/" alt="Телефон с сообщением" className="start-buisness__img start-buisness__img_third" />
              <h2 className="start-buisness__heading">
                Заявки покупателей
              </h2>
              <p className="start-buisness__text">
                Вам начинают поступать заявки от покупателей, благодаря нашим скриптам для продаж и разговорным сценариям, вы совершаете продажу
              </p>
            </li>
            <li className="start-buisness__column">
              <img src="/" alt="Деньги" className="start-buisness__img start-buisness__img_fourth" />
              <h2 className="start-buisness__heading">
                Прибыль
              </h2>
              <p className="start-buisness__text">
                Разница между оптовой и розничной ценой ваша прибыль
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default StartBuisness; 
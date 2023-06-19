import React from 'react'
import '../css/startBusiness.css'
import Start1 from "../assets/start1.svg"
import Start2 from "../assets/start2.svg"
import Start3 from "../assets/start3.svg"
import Start4 from "../assets/start4.svg"

const StartBusiness = () => {
  return (
    <>
      <section className='start-business'>
        <div className="container start-business__container">
          <h2 className="title start-business__title">
            Как запустить бизнес?
          </h2>
          <ul className="start-business__columns">
            <li className="start-business__column">
              <img src={Start1} alt="Диспетчер" className="start-business__img start-business__img_first" />
              <h3 className="start-business__heading">
                Заявка
              </h3>
              <p className="start-business__text">
                Вы оставляете заявку, мы связываемся с вами для разбора вопросов и выбора Тарифа
              </p>
            </li>
            <li className="start-business__column">
              <img src={Start2} alt="Ноутбук" className="start-business__img start-business__img_second" />
              <h3 className="start-business__heading">
                Интернет-магазин
              </h3>
              <p className="start-business__text">
                Мы создаем для вас интернет-магазин, предоставляем поставщика и запускаем рекламу
              </p>
            </li>
            <li className="start-business__column">
              <img src={Start3} alt="Телефон с сообщением" className="start-business__img start-business__img_third" />
              <h3 className="start-business__heading">
                Заявки покупателей
              </h3>
              <p className="start-business__text">
                Вам начинают поступать заявки от покупателей, благодаря нашим скриптам для продаж и разговорным сценариям, вы совершаете продажу
              </p>
            </li>
            <li className="start-business__column">
              <img src={Start4} alt="Деньги" className="start-business__img start-business__img_fourth" />
              <h3 className="start-business__heading">
                Прибыль
              </h3>
              <p className="start-business__text">
                Разница между оптовой и розничной ценой ваша прибыль
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default StartBusiness; 
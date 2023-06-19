import React from 'react'
import { Link } from 'react-router-dom'
import '../css/specialist.css'

const Specialist = () => {
  return (
    <>
      <div className="specialist">
        <ul className="worker__list list">
          <li className="list__item">
            <Link to="/" className="list__link">
              Наемным сотрудникам
            </Link>
          </li>
          <li className="list__item">
            <Link to="/businessman" className="list__link">
              Предпринимателям и владельцам&nbsp;бизнеса
            </Link>
          </li>
          <li className="list__item">
            <Link to="/firstProject" className="list__link">
              Тем, для кого это первый бизнес&nbsp;проект
            </Link>
          </li>
          <li className="list__item list__item_active">
            <Link to="/specialist" className="list__link">
              Специалистам&nbsp;смежных профессий
            </Link>
          </li>
        </ul>
        <div className="specialist__content">
          <div className="specialist__text">
            <h3 className="specialist__title">
              Специалистам смежный профессий
            </h3>
            <p className="specialist__info">
              Вы связаны с тематикой мнтернет-магазина? Самое время начать успешный бизнес. Создайте дополнительный источник дохода и зарабатывайте на продаже товаров своей аудитории
            </p>
          </div>
          <img src={ require("../assets/specialist.png") } alt="Специалист" className="specialist__img" />
        </div>
      </div>
    </>
  )
}

export default Specialist;
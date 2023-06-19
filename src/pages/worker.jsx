import React from 'react'
import { Link } from 'react-router-dom'
import '../css/worker.css'

const Worker = () => {
  return (
    <>
      <div className="worker">
        <ul className="worker__list list">
          <li className="list__item  list__item_active">
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
          <li className="list__item">
            <Link to="/specialist" className="list__link">
              Специалистам&nbsp;смежных профессий
            </Link>
          </li>
        </ul>
        <div className="worker__content">
          <div className="worker__text">
            <h3 className="worker__title">
              Наемным сотрудникам
            </h3>
            <p className="worker__info">
              Сотрудничество с нами позволит вам открыть собственное дело и беспроблемно совмещать с основной работой. Основные процессы по работе и функционированию магазина мы берем на себя
            </p>
          </div>
          <img src={ require("../assets/worker.png") } alt="Сотрудник" className="worker__img" />
        </div>
      </div>
    </>
  )
}

export default Worker;
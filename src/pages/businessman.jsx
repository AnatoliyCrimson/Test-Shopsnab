import React from 'react'
import { Link } from 'react-router-dom'
import '../css/businessman.css'

const Businessman = () => {
  return (
    <>
      <div className="businessman">
        <ul className="worker__list list">
            <li className="list__item">
              <Link to="/" className="list__link list__link_active">
                Наемным сотрудникам
              </Link>
            </li>
            <li className="list__item">
              <Link to="/businessman" className="list__link">
                Предпринимателям и владельцам бизнесаААА
              </Link>
            </li>
            <li className="list__item">
              <Link to="/firstProject" className="list__link">
                Тем, для кого это первый бизнес проект
              </Link>
            </li>
            <li className="list__item">
              <Link to="/specialist" className="list__link">
                Специалистам смежных профессий
              </Link>
            </li>
          </ul>
        <div className="worker__content">
          <div className="businessman__text">
            <h3 className="businessman__title">
              Предпринимателям и владельцам бизнеса
            </h3>
            <p className="businessman__info">
              У вас собственный бизнес? Тогда вы прекрасно понимаете насколько важно развиваться в других направлениях и открывать дополнительные каналы дохода. Создайте еще один источник дохода и увеличьте свою прибыль в разы
            </p>
          </div>
          <img src="/" alt="Предприниматель" className="businessman__img" />
        </div>
      </div>
    </>
  )
}

export default Businessman;
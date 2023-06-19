import React from 'react'
import { Link } from 'react-router-dom'
import '../css/firstProject.css'

const FirstProject = () => {
  return (
    <>
      <div className="first-project">
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
          <li className="list__item list__item_active">
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
        <div className="first-project__content">
          <div className="first-project__text">
            <h3 className="first-project__title">
              Тем, для кого это первый бизнес проект
            </h3>
            <p className="first-project__info">
              Если для вас это первый бизнес, то наше предложение идеальный вариант для старта. Вам не придется "набивать шишки" самостоятельно. Мы подготовили разные Тарифы, вам остается лишь выбрать какие процессы вы готовы вести самостоятельно, а какие доверить профессионалам
            </p>
          </div>
          <img src={ require("../assets/first-project.png") } alt="Создание проекта" className="first-project__img" />
        </div>
      </div>
    </>
  )
}

export default FirstProject;
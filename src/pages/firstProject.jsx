import React from 'react'
import '../styles/firstProject.css'

const FirstProject = () => {
  return (
    <>
      <div className="first-project">
        <div className="first-project__content">
          <div className="first-project__text">
            <h3 className="first-project__title">
              Тем, для кого это первый бизнес проект
            </h3>
            <p className="first-project__info">
              Если для вас это первый бизнес, то наше предложение идеальный вариант для старта. Вам не придется "набивать шишки" самостоятельно. Мы подготовили разные Тарифы, вам остается лишь выбрать какие процессы вы готовы вести самостоятельно, а какие доверить профессионалам
            </p>
          </div>
          <img src="/" alt="Создание проекта" className="first-project__img" />
        </div>
      </div>
    </>
  )
}

export default FirstProject;
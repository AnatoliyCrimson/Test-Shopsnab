import React from 'react'
import '../styles/businessman.css'

const Businessman = () => {
  return (
    <>
      <div className="businessman">
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
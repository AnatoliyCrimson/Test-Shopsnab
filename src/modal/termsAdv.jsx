import React from 'react'
import '../css/termsAdv.css'

const TermsAdv = ({active, setActive}) => {
  return (
    <>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="termsAdv__content" onClick={e => e.stopPropagation()}>
          <h2 className="title termsAdv__title">
            Весь январь 2023 года скидка 20% на все Тарифы
          </h2>
          <ul className="termsAdv__list">
            <li className="termsAdv__item">
              Успейте оплатить до 31 января включительно и получите скидку
            </li>
            <li className="termsAdv__item">
              Это предложение не суммируется с другими скидками и промокодами
            </li>
          </ul>
          <button className="btn btn-modal termsAdv__btn" onClick={() => setActive(false)}>
            Закрыть
          </button>
        </div>
      </div>
    </>
  )
}

export default TermsAdv;
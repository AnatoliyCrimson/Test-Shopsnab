import React from 'react'
import '../styles/worker.css'

const Worker = () => {
  return (
    <>
      <div className="worker">
        <div className="worker__content">
          <div className="worker__text">
            <h3 className="worker__title">
              Наемным сотрудникам
            </h3>
            <p className="worker__info">
              Сотрудничество с нами позволит вам открыть собственное дело и беспроблемно совмещать с основной работой. Основные процессы по работе и функционированию магазина мы берем на себя
            </p>
          </div>
          <img src="/" alt="Сотрудник" className="worker__img" />
        </div>
      </div>
    </>
  )
}

export default Worker;
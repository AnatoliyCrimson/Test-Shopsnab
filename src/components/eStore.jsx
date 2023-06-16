import React from 'react'
import '../css/eStore.css'

const Estore = () => {
  return (
    <>
      <section className='eStore'>
        <div className="container eStore__container">
          <h2 className='title eStore__title'>
            Интернет-магазин
          </h2>
          <p className='eStore__descr'>
            Вы получаете собственный профессиональный, наполненный интернет-магазин со всем необходимым набором для успешного ведения бизнеса
          </p>
          <ul className='eStore__cards cards'>
            <li className='cards__el cards__el_first'>
              <div className='cards__container cards__container_first'>
                <img src="/" alt="Seo оптимизация" className='cards__img cards__img_first'/>
                <div className="cards__contfirst">
                  <img src="/" alt="Seo оптимизация" className='cards__img'/>
                  <h3 className='cards__title'>
                    Seo оптимизация
                  </h3>
                  <p className='cards__descr'>
                    Ваш магазин будет полностью оптимизирован для автоматической индексации поисковиками
                  </p>
                </div>
              </div>
            </li>
            <li className='cards__el'>
              <div className='cards__container'>
                <img src="/" alt="Доман + Хостинг" className='cards__img'/>
                <h3 className='cards__title'>
                  Домен + Хостинг
                </h3>
                <p className='cards__descr'>
                  Вы получаете в подарок домаен и хостинг на 12 месяцев
                </p>
              </div>
            </li>
            <li className='cards__el'>
              <div className='cards__container'>
                <img src="/" alt="Адаптивность" className='cards__img'/>
                <h3 className='cards__title'>
                  Мобильная версия
                </h3>
                <p className='cards__descr'>
                  Ваш магазин будет отлично смотреться на смартфонах, планшетах и компьютерах
                </p>
              </div>
            </li>
            <li className='cards__el'>
              <div className='cards__container'>
                <img src="/" alt="Инструкции" className='cards__img'/>
                <h3 className='cards__title'>
                  Инструкции
                </h3>
                <p className='cards__descr'>
                  Вы получите инструкции по работе с магазином. Все просто и понятно расписано и доступно каждому
                </p>
              </div>
            </li>
            <li className='cards__el'>
              <div className='cards__container'>
                <img src="/" alt="Дизайн + Типографика" className='cards__img'/>
                <h3 className='cards__title'>
                  Дизайн + Типографика
                </h3>
                <p className='cards__descr'>
                  Удобная подача визуального контента. Мы отслеживаем тренды в дизайне, поэтому ваш магазин будет выглядеть актуально
                </p>
              </div>
            </li>
            <li className='cards__el'>
              <div className='cards__container'>
                <img src="/" alt="Модули" className='cards__img'/>
                <h3 className='cards__title'>
                  Модули
                </h3>
                <p className='cards__descr'>
                  Делайте рассылки, собирайте обратную связь, подключайте системы управления данными клиентов (CRM)
                </p>
              </div>
            </li>
            <li className='cards__el cards__el_last'>
              <div className='cards__container cards__container_last'>
                <div className="cards__contlast">
                  <img src="/" alt="Возможности" className='cards__img'/>
                  <h3 className='cards__title'>
                    Множество возможностей
                  </h3>
                  <p className='cards__descr'>
                    Принимайте платежи любым способом: наличные, банковские карты, Яндекс.Касса, PayPal. Развивайте свой бизнес с помощью чатов, обратных звонков, рассылок
                  </p>
                  <a href="/">
                    Посмотреть все возможности
                  </a>
                </div>
                <img src="/" alt="Возможности" className='cards__img cards__img_last'/>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Estore;
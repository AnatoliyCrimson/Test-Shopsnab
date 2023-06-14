import React from 'react'
import '../styles/provider.css'

const Provider = () => {
  return (
    <>
      <section className='provider'>
        <div className="container provider__container">
          <div className="provider__info-container">
            <div className="provider__info">
              <h2 className="provider__title">
                Надежный поставщик
              </h2>
              <p className="provider__descr">
                Тяжело найти хорошего надежного поставщика с низкими ценами. Еще сложнее договорится с ним о сотрудничестве на выгодных условиях. Но мы уже сделали это за вас! Вместе с интерент-магазином, мы предоставляем контакты поставщика и гарантию работы на наиболее выгодных условиях
              </p>
            </div>
            <img src="/" alt="Поставщик" className="provider__img" />
          </div>
          <ul className="provider__advantages">
            <li className="provider__p-advantages">
              <strong className="provider__strong">Формат</strong> закупка товара не требуется, поставщик работает под конертного клиента
            </li>
            <li className="provider__p-advantages">
              <strong className="provider__strong">Бизнес</strong> можно вести самостоятельно без сотрудников, офиса и склада
            </li>
            <li className="provider__p-advantages">
              <strong className="provider__strong">Товар</strong> высокорентабельный маржинальный товар по цене ниже конкурентов
            </li>
            <li className="provider__p-advantages">
              <strong className="provider__strong">Удобно</strong> склад и офис не требуется, легко совмещать с работой, отдыхом и текущими делами
            </li>
            <li className="provider__p-advantages">
              <strong className="provider__strong">ИП,ООО</strong> можно работать, как физ. лицо или действовать и выставлять счета от ООО поставщика
            </li>
          </ul>
          <div className="provider__profit-container">
            <p className="provider__profit">
              Интернет-магазин диванов бизнес с высоким покупательским спросом. Продавая 3-5 диванов в месяц выходим на прибыль от 100 000 рублей. <br/> <br/> Бизнес легко совмещать с основной работой, не требуется постоянно находится на связи и отвечать на заявки покупателе, как это происходит в дешевом сегменте.
            </p>
            <p className="provider__average-profit-info">
              <strong className="provider__average-profit">29 000 рублей</strong> средняя прибыль с одной продажи.
              <a href="/" className="provider__link-full-price">Скачать полный прайс</a>
            </p>
          </div>
          <div className="provider__tariffs tariffs">
            <p className="tariffs__text">
              Вам осталось только ознакомиться с тарифами и выбрать свой путь развития
            </p>
            <ul className="tariffs__list">
              <li className="tariffs__type">
                Тариф Start
              </li>
              <li className="tariffs__type">
                Тариф Plus
              </li>
              <li className="tariffs__type">
                Тариф Pro
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Provider; 
import React from 'react'
import '../css/provider.css'

const Provider = () => {
  return (
    <>
      <section className='provider'>
        <div className="container provider__container">
          <div className="provider__text-container">  
            <div className="provider__text">
              <h2 className="title provider__title">
                Надежный поставщик
              </h2>
              <p className="provider__descr">
                Тяжело найти хорошего надежного поставщика с низкими ценами. Еще сложнее договорится с ним о сотрудничестве на выгодных условиях. Но мы уже сделали это за вас! Вместе с интерент-магазином, мы предоставляем контакты поставщика и гарантию работы на наиболее выгодных условиях
              </p>
            </div>
            <img src={ require("../assets/provider.png") } alt="Поставщик" className="provider__img" />
          </div>
          <ul className="provider__advantages">
            <li className="provider__p-advantages">
              <h3 className="provider__heading">
                Формат
              </h3> 
              <p className="provider__paragraph">
                закупка товара не требуется, поставщик работает под конертного клиента
              </p>
            </li>
            <li className="provider__p-advantages">
              <h3 className="provider__heading">
                Бизнес
              </h3> 
              <p className="provider__paragraph">
                можно вести самостоятельно без сотрудников, офиса и склада
              </p>
            </li>
            <li className="provider__p-advantages">
              <h3 className="provider__heading">
                Товар
              </h3> 
              <p className="provider__paragraph">
                высокорентабельный маржинальный товар по цене ниже конкурентов
              </p>
            </li>
            <li className="provider__p-advantages">
              <h3 className="provider__heading">
                Удобно
              </h3> 
              <p className="provider__paragraph">
                склад и офис не требуется, легко совмещать с работой, отдыхом и текущими делами
              </p>
            </li>
            <li className="provider__p-advantages">
              <h3 className="provider__heading">
                ИП,ООО
              </h3> 
              <p className="provider__paragraph">
                можно работать, как физ. лицо или действовать и выставлять счета от ООО поставщика
              </p>
            </li>
          </ul>
          <div className="provider__profit-container">
            <p className="provider__profit">
              Интернет-магазин диванов бизнес с высоким покупательским спросом. Продавая 3-5 диванов в месяц выходим на прибыль от 100 000 рублей. <br/> <br/> Бизнес легко совмещать с основной работой, не требуется постоянно находится на связи и отвечать на заявки покупателе, как это происходит в дешевом сегменте.
            </p>
            <div className="provider__average-profit-info">
              <p className="provider__average-cost">
                29 000 рублей
              </p> 
              <p className="provider__average-profit">
                средняя прибыль с одной продажи.
              </p>
              <a href="/" className="provider__link">Скачать полный прайс</a>
            </div>
          </div>
          <div className="provider__tariffs tariffs">
            <p className="tariffs__text">
              Вам осталось только ознакомиться с тарифами и выбрать свой путь развития
            </p>
            <ul className="tariffs__list">
              <li className="tariffs__item">
                <a href="#tariff-start" className="tariffs__type">
                  Тариф Start
                </a>
              </li>
              <li className="tariffs__item">
                <a href="#tariff-plus" className="tariffs__type">
                  Тариф Plus
                </a>
              </li>
              <li className="tariffs__item">
                <a href="#tariff-pro" className="tariffs__type">
                  Тариф Pro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Provider; 
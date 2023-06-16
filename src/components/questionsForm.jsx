import React from 'react'
import '../css/questionsForm.css'

const QuestionsForm = () => {
  return (
    <>
      <section className="questionsForm">
        <div className="container questionsForm-container">
          <h2 className="title questionsForm__title">
            Есть вопросы? Оставьте заявку и мы свяжемся с вами в рбаочее время
          </h2>
          <div className="questionsForm__left left">
            <p className="left__price-info">
              в кредит на год
            </p>
            <p className="left__price">
              12 500 ₽ <span className="left__price-month">/мес.</span>
            </p>
            <p className="left__price-info">
              оплата сразу
            </p>
            <p className="left__price">
              112 000 ₽ <span className="left__price-old">24 900 ₽</span>
            </p>
            <p className="left__discount">
              До 29 февраля скидка 28 000 ₽
            </p>
            <div className="left__econom">
              <p className="left__title-econom">
                Сэкономьте еще 25%
              </p>
              <p className="left__text">
                Экономия 25% при покупке любого другого  магазина у нас. Спросите об этом преложении нашего менеджера
              </p>
            </div>
          </div>
          <div className="questionsForm__middle middle">
            <form action="https://jsonplaceholder.typicode.com/posts" className="middle__form" method='POST'>
              <input type="text" name="First-Name" className="middle__first-name" placeholder='Имя' required/>
              <input type="text" name="Last-Name" className="middle__last-name" placeholder='Фамилия' required/>
              <input type="tel" name="Phone" className="middle__tel" placeholder='+7 (000) 000-00-00' required/>
              <input type="email" name="E-mail" className="middle__email" placeholder='E-mail' required/>
              <button type="submit" className="middle__btn">Оплатить тариф</button>
            </form>
            <p className="middle__policy-agreement">
              Нажимая кнопку, принимаю условия <a href="/" className="middle__policy">политики</a> и <a href="/" className="middle__agreement">пользовательского соглашения</a>
            </p>
          </div>
          <div className="questionsForm__right right">
            <ul className="right__list">
              <li className="right__item">
                <h3 className="right__title">
                  Гарантия по договору
                </h3>
                <p className="right__text">
                  Вы получаете полный возврат, если результаты не будут достигнуты. Все условия прописываются и фикисруются в договоре
                </p>
              </li>
              <li className="right__item">
                <h3 className="right__title">
                  Способы оплаты?
                </h3>
                <p className="right__text">
                  При заключении договора вам выставляется счет на оплату. Работаем с Физ. и Юр. лицами
                </p>
              </li>
              <li className="right__item">
                <h3 className="right__title">
                  Есть еще вопросы?
                </h3>
                <p className="right__text">
                  Пишите нам - <a href="/" className="right__link">mail@shopsnab.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default QuestionsForm; 
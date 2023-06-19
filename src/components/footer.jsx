import React from 'react'
import Logo from '../assets/logo-footer.svg'
import '../css/footer.css'



const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <a href="/">
              <img src={Logo} alt="Поставщик" className="header__img" />
            </a>
          <a href="tel:+78005670009" className="number footer__number">
            8-800-567-00-09
            <span className="footer__call-text">
              бесплатно по России
            </span>
          </a>
          <address>
            <a href="/" className="footer__address">
              <span>
                Санкт-Петербург, БЦ Космопро,
              </span>
              <span>
                Ленинский просп., 140 И, офис 307
              </span>
            </a>
          </address>
        </div>
      </footer>
    </>
  )
}

export default Footer; 
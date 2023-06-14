import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <a href="/" className='footer__logo logo'>
            <span className='logo__title'>Shopsnab</span> 
            <span className='logo__descr'>интернет-магазин + поставщики</span>
          </a>
          <a href="tel:+78005670009" className="number footer__number">
            8-800-567-00-09
            <span className="footer__call-text">
              бесплатно по росии
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
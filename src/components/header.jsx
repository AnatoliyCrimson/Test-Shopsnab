import React from 'react'
import '../css/header.css'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="container header__container">
          <a href="/" className='header__logo logo'>
            <span className='logo__title'>Shopsnab</span> 
            <span className='logo__descr'>интернет-магазин + поставщики</span>
          </a>
          <a href="/" className='header__burger'>
            Все магазины
          </a>
          <a href="tel:+78005670009" className='number header__number'>
            8-800-567-00-09
          </a>
        </div>
      </header>
    </>
  )
}

export default Header;
import React from 'react'
import '../css/header.css'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="container header__container">
          <div className="header__logo">
            <a href="/">
              <img src={Logo} alt="Лого" className="header__img" />
            </a>
            <a href="/" className='header__burger'>
              Все магазины
            </a>
          </div>
          <a href="tel:+78005670009" className='number header__number'>
            8-800-567-00-09
          </a>
        </div>
      </header>
    </>
  )
}

export default Header;
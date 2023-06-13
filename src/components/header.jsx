import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <a href="/">
            <span>Shopsnab</span> 
            <span>интернет-магазин + поставщики</span>
          </a>
          <a href="/">
            Все мегазины
          </a>
          <a href="tel:+78005670009">
            8-800-567-00-09
          </a>
        </div>
      </header>
    </>
  )
}

export default Header;
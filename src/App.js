import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import Header from './components/header';
import Hero from './components/hero';
import Adv from './components/adv';
import Estore from './components/eStore';
import Provider from './components/provider';
import TariffStart from './components/tariffStart';
import TariffPlus from './components/tariffPlus';
import TariffPro from './components/tariffPro';
import StartBuisness from './components/startBuisness';
import Footer from './components/footer';

 
function App() {
  return (
    <>
      <div className='header-backgroung'>
        <Header />
      </div>
      <main>
        <Hero />
        <Adv />
        <Estore />
        <Provider />
        <TariffStart />
        <TariffPlus />
        <TariffPro />
        <StartBuisness />
        <Footer />

      </main>
    </>
  );
}

export default App;

/* 

import React from 'react'
import '../styles/.css'

const  = () => {
  return (
    <>
      <section className=''>
        <div className="container">
          
        </div>
      </section>
    </>
  )
}

export default ; 


*/

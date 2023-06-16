import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/global.css'
import './css/App.css'
import Header from './components/header';
import Hero from './components/hero';
import Adv from './components/adv';
import Estore from './components/eStore';
import Provider from './components/provider';
import TariffStart from './components/tariffStart';
import TariffPlus from './components/tariffPlus';
import TariffPro from './components/tariffPro';
import StartBusiness from './components/startBusiness';
import Footer from './components/footer';
import QuestionsForm from './components/questionsForm';
import BusinessFor from './components/businessFor';
import Questions from './components/questions';


function App() {
  return (
    <>
      <div className='header-hero-backgroung'>
        <Header />
        <Hero />
      </div>
      <Adv />
      <main>
        <Estore />
        <Provider />
        <TariffStart />
        <TariffPlus />
        <TariffPro />
        <QuestionsForm />
        <Router>
          <BusinessFor />
        </Router>
        <StartBusiness />
        <Questions />
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
      <section className="">
        <div className="container">
          
        </div>
      </section>
    </>
  )
}

export default ;


*/
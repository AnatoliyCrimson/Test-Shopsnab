import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
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
import StartBusiness from './components/startBusiness';
import Footer from './components/footer';
import QuestionsForm from './components/questionsForm';
import BusinessFor from './components/businessFor';
import Questions from './components/questions';

 
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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import Header from './components/header';
import Hero from './components/hero';
 
function App() {
  return (
    <>
      <div className='header-backgroung'>
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;

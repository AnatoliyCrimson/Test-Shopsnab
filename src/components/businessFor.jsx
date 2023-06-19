import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Worker from '../pages/worker'
import Businessman from '../pages/businessman'
import FirstProject from '../pages/firstProject'
import Specialist from '../pages/specialist'
import '../css/businessFor.css'

const BusinessFor = () => {
  return (
    <>
      <section className="business-for">
        <div className="container business-for__container">
          <h2 className="title business-for__title">
            Для кого подойдет этот бизнес
          </h2>
          <Routes>
            <Route exact path="/" element={<Worker />} />
            <Route exact path="/businessman" element={<Businessman />} />
            <Route exact path="/firstProject" element={<FirstProject />} />
            <Route exact path="/specialist" element={<Specialist />} />
          </Routes>
        </div>
      </section>
    </>
  )
}

export default BusinessFor; 
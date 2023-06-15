import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Worker from '../pages/worker'
import Businessman from '../pages/businessman'
import FirstProject from '../pages/firstProject'
import Specialist from '../pages/specialist'
import '../styles/businessFor.css'

const BusinessFor = () => {
  return (
    <>
      <section className="business-for">
        <div className="container">
          <h2 className="business-for__title">
            Для кого подойдет этот бизнес
          </h2>
          <ul className="worker__list list">
            <li className="list__item">
              <Link to="/" className="list__link list__link_active">
                Наемным сотрудникам
              </Link>
            </li>
            <li className="list__item">
              <Link to="/businessman" className="list__link">
                Предпринимателям и владельцам бизнеса
              </Link>
            </li>
            <li className="list__item">
              <Link to="/firstProject" className="list__link">
                Тем, для кого это первый бизнес проект
              </Link>
            </li>
            <li className="list__item">
              <Link to="/specialist" className="list__link">
                Специалистам смежных профессий
              </Link>
            </li>
          </ul>
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
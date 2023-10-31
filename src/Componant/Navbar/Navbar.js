import React from 'react'
import style from './Navbar.module.css'
import { TiWeatherPartlySunny } from "react-icons/ti";

const Navbar = () => {
  return (
    <>
      <header className={style.nav_bar}>
        <nav>
          <ul>
            <li><h2> <TiWeatherPartlySunny /> AccuWheather </h2> </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
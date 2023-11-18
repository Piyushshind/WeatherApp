import React, { useState } from 'react'
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import style from './Main.module.css'

const Main = () => {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState([]);
  const ApiKey = "f56f24967aaf51182d1d4df628297c6d";

  const wetherDetails = (city) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + ApiKey)
      .then((res) => res.json())
      .then((dataa) => setData(dataa))

  }
  // console.log(data)

  const handleChangeInput = (e) => {
    setInputCity(e.target.value)


  }

  const handleSearch = () => {
    wetherDetails(inputCity)
    setInputCity('')
  }

  function CheackCityName() {
    // if(data?.name===inputCity){
    //    return false
    //  }else{
    //     return true 
    // }
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.main_container}>
          <input type='search' className={style.input} placeholder='🔍 Search City'
            value={inputCity}
            onChange={handleChangeInput} />
          <button className={style.search_btn}
            disabled={!inputCity}
            onClick={handleSearch}>  Search </button>
          <div>
            <WeatherInfo data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
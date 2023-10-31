import React from 'react'
import style from './weatharInfo.module.css'

const WeatherInfo = ({ data }) => {
  return (
    <div className={style.wrapper}>

      {
        Object.keys(data).length > 0 &&
        <>
          <h2>City:{data?.name}</h2>
          <h2>Temperature :{((data?.main?.temp) - 273.15).toFixed(2)}°C</h2>
          <h3>Humidity : {data?.main?.humidity}</h3>
          <h3>Pressure : {data?.main?.pressure}</h3>
          <h3>Wind Speed : {data?.wind?.speed} m/s</h3>
        </>
      }
    </div>
  )
}

export default WeatherInfo ;
















{/* <h1>City : {data?.name}</h1>
<h2>Weather : {data?.weather[0]?.main}</h2>
<h3>Description : {data?.weather[0]?.description}</h3>
 {/* <h3>Weather : {data?.weather[0].main}</h3>
            <h3>Description : {data?.weather[0].description}</h3>
<h3 > Temperature : {((data?.main?.temp) - 273.15).toFixed(2)}°C</h3> */}
import React, { useState } from 'react'

const WeatherCard = ({weather,temp}) => {
  console.log(weather)

  const [isCElsius, setIsCElsius] = useState(true)
   
  const handleChangeTemp = () => {

  }

  return (
    <article>
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div>
          <img 
            src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
            alt="" 
          />
      
        <section>
           <h3>
             '{weather?.weather[0].description}'
            </h3>
          <ul>
            <li><span>Mind Speed</span><span>{weather?.speed} m/s</span></li>
            <li><span>Clouds</span><span>{weather?.clouds.all} %</span></li>
            <li><span>Pressure</span><span>{weather?.main.pressure} hPa</span></li>
          </ul>
       </section>
     </div>

     <h2>
        {isCElsius ? `${temp?.celsius}` : `${temp?.farenheil}`
      }</h2>

        <button onClick={handleChangeTemp}>
          {isCElsius ? 'Change to F' : 'Change to C'}
         </button>
    
    </article>
  )
}

export default WeatherCard

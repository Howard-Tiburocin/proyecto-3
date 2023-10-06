import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './assets/components/WeatherCard'

function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, settemp] = useState()

  useEffect(() => {
    const success = pos => {
      console.log(pos)
      const obj = {
         lat: pos.coords.latitude,
         lon: pos.coords.longitude
       }
       setCoords(obj)
    }
    
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
      if (coords) {
       const Apikey = '4d8f711b7f146427ec7540cda24065c6'
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${Apikey}`
        axios.get(url)
        .then(res => { 
          setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
          settemp(obj)
        })
        .catch(err => console.log(err))
      }
  }, [coords])

     
  return (
   <div>
   
    <WeatherCard 
    weather={weather}
     temp={temp}  />
   </div>
  )
}

export default App

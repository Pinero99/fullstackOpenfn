
import { useState, useEffect } from "react";
import comunicationsService from "../services/comunications";
 
const Weather = (props) => {
    const [isLoading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const latlng = props.latlng
    const weather = props.weather
    const setWeather =props.setWeather
    
       
    useEffect(() => {
        comunicationsService
            .getWeather(latlng)
            .then(data =>{ 
                 setWeather(data),
                 setLoading(false)}
            )
            .catch(error => setError(true))
    }, []
    )
    if(error) return <p>Sorry, we didn't find weather result for this country</p>
    if (isLoading) return <p>Loading...</p>

   return(
        <>
            <h3>Temp.</h3>
            <ul>
                <li>Temp: {weather.main.temp}·F</li>
                <li>Humedity: {weather.main.humidity}%</li>
                <li>Feels like: {weather.main.feels_like}·F</li>
                <li>min: {weather.main.temp_max}·F</li>
                <li>max: {weather.main.temp_min}·F</li>    
            </ul>            

            <h3>Weather</h3>
            <ul>
                <li>{weather.weather[0].description}</li>
                <li></li>
            </ul>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <></>
        </>
    ) 
// codigo del icono: {weather[0].icon} */
}

export default Weather 
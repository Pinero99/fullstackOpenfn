import axios from "axios";

     const getAllCountries = () => {
        const request =  axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
       return request.then(response => response.data)
     }

     const getWeather = latlng => {
        const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${import.meta.env.VITE_SOME_KEY}&units=imperial`)
        return request.then( response => response.data)
     }

export default {
    getAllCountries,
    getWeather
}
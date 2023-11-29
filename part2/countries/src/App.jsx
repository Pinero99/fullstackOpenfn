import { useState, useEffect } from 'react'
import comunicationsService from './services/comunications'
import Display from './components/Display'


const App = () => {
  const [mainArray, setMainArray] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [weather, setWeather] = useState([])
  
  useEffect( () => {
    comunicationsService
      .getAllCountries()
      .then(data => setMainArray(data))
  },
    []
  )
  
  const countryName = mainArray.map(Element => Element.name)
  var showCountries =  countryName.filter((el) => el.common.toLowerCase().includes(newCountry.toLowerCase()))
   
   const handleCountryName = (event) => {
     setNewCountry(event.target.value)
   }
   const index = () => countryName.indexOf(showCountries[0]) 
   const countryDetails = mainArray[index()]
   console.log(countryDetails)

  return (
    <>
      <h1>Wikicountry</h1>
      <input value={newCountry} onChange={handleCountryName}></input>
      <Display 
        showCountries={showCountries}
        country={countryDetails}
        setNewCountry ={setNewCountry}
        weather = {weather}
        setWeather ={setWeather}
      />
    </>
  )
}

export default App

import Countries from "./Countries"
import CountryDetail from "./CountryDetail"

const Display = (props) => {
    const showCountries = props.showCountries
    const country = props.country
    const setNewCountry =props.setNewCountry
    const weather = props.weather
    const setWeather =props.setWeather
    if(showCountries.length === 250) {
        return(
            <>
                <p>Hello! what country are you looking for?</p>
                
            </>
        )
    }

    if(showCountries.length > 10) {
        return(
            <p>Could you be more specific?</p>
        )
    }
    if(showCountries.length > 1 && showCountries.length < 11){
        return (
           
            <Countries
                showCountries={showCountries}
                setNewCountry={setNewCountry}
             />
            
            )
        }

    if(showCountries.length === 1){
        return(
           <CountryDetail 
                country={country}
                weather={weather}
                setWeather={setWeather}
            /> 
         
        )
    }
}
export default Display 
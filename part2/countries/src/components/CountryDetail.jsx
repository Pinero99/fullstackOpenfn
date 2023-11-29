import Weather from "./weather"

const CountryDetail = (props) => {
    const country = props.country
    const weather = props.weather
    const setWeather =props.setWeather
    let languages = Object.values(country.languages)
    
    return(
        <div>
            <h1>{country.name.official}</h1>
            <p> Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <div>
            <p>language:</p>
            <ul>
                {languages.map( Element => 
                    <li key={Element}>
                        {Element}
                    </li>
                )}
            </ul>
            </div>
            <img src={country.flags.png}/>
            <Weather
                weather={weather}
                latlng={country.capitalInfo.latlng}
                setWeather={setWeather}
                />
        </div>
    )
}

export default CountryDetail
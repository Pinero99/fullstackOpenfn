
const Countries = (props) => {
    const showCountries= props.showCountries
    const setNewCountry = props.setNewCountry
    // better than a button aside of the name, it's the name as the same buttom using a blank link.
return(
      <ul>
        {showCountries.map( Element => 
          <li key= {Element.common}>
            <a href="#" onClick={(event) =>{ event.preventDefault(); setNewCountry(Element.common)}}> 
                {Element.common} / official name: {Element.official}
            </a>
          </li>
        )}
        <br/>
      </ul>
)}

export default Countries
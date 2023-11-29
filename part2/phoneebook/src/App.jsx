import { useState, useEffect, Component } from 'react'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import Searcher from './components/Searcher'
import comunications from './services/comunications'
import Notificaiton from './components/Notification'

const App = () => {
  const [contact, setContact] = useState([]) 
  const [newName, setNewName] = useState('John Doe')
  const [newNumber, setNewNumber] = useState('')
  const [word, setWord] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [message, setMessage] = useState(null)

  useEffect( () =>{
    comunications
      .getAll()
      .then(initianContacts=> setContact(initianContacts))
    }, []
  )
  
  const arrToCompare = contact.map(Element => {const El = {name : Element.name}; return JSON.stringify(El).toLowerCase()})
  var comparedObjet = { name: newName}
  const inputToCompare = JSON.stringify(comparedObjet).toLowerCase()
  
  const validator = () => arrToCompare.includes(inputToCompare)

  const gettinIndex = () =>  arrToCompare.indexOf(inputToCompare)  
  
  const handleSubmit = (event) => {
   
    event.preventDefault()
    
    const nameObject = {
        name: newName,
        number: newNumber,
    }
    //adding contact:
    if (!validator()) {
        comunications
            .adding(nameObject)
              .then(add => {
                console.log('on comunications', contact)
                setContact(contact.concat(add))
                setMessage({ message: `${newName} has ben added`})
                 setTimeout(() => {setMessage(null)}, 5000);
                setNewName('')
                setNewNumber('')
                }
              )
              .catch(error =>{
                setMessage({ message: `an error has happened, troubles on comunications with server`, value: error})
                setTimeout(() => {setMessage(null)}, 5000)
              })

    } 
    //Updating contact:
    if (validator()) {
      var message = `${newName} is already added to phonebook, remplace the number with a new one?`
     
      if(window.confirm(message)){
          var index = gettinIndex() 
          var id = contact[index].id
            comunications
              .updating(id, nameObject)
                .then(update => {
                  setContact(contact.toSpliced(index,1,update))
                  setMessage({ message: `${newName} has ben updated`})
                  setTimeout(() => {setMessage(null)}, 5000);
                  setNewName('')
                  setNewNumber('') 
                 
                })
                .catch(error =>{
                  setMessage({ message: `${newName} are already deleted`, value: error})
                  setTimeout(() => {setMessage(null)}, 5000)
                })
      } else {
          setNewName('')
          setNewNumber('')
        }
    }
  }

  const handleDelete = (props) => {
    const id = props 
    const arrDeleter = contact.map(Element =>  Element.id)
    const index = arrDeleter.indexOf(id)

    comunications
   
      .deletting(id)
      .then(() =>
         setMessage({ message: `${newName} has ben Deleted`}),
         setTimeout(() => {setMessage(null)}, 5000), 
         setContact(contact.toSpliced(index,1,)),
      )
      .catch(error =>{
        setMessage({ message: `${newName} are already deleted`, value: error})
        setTimeout(() => {setMessage(null)}, 5000)
      })
  }

  const handleNewNameChanges = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumberChanges = (event) => {
    setNewNumber(event.target.value)  
  }
  const handleShowWords = (event) => {
    setWord(event.target.value)
    setShowAll(!showAll)
  }

  const ContactsToShow = showAll
    ? contact
    : contact.filter((Element) => Element.name.toLowerCase().includes(word.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notificaiton message={message}/>
      <Searcher 
          word={word}
          handleShowWords={handleShowWords}
      />
      <h2>add new contact: </h2>
      <AddContact 
           handleSubmit ={handleSubmit}
           newName = {newName}
           handleNewNameChanges = {handleNewNameChanges}
           newNumber = {newNumber}
           handleNewNumberChanges = {handleNewNumberChanges}
      />
      <h2>Numbers</h2>
      <Contacts 
        arr={ContactsToShow}
        handleDelete = {handleDelete}
      />
    </div>
  )
}

export default App
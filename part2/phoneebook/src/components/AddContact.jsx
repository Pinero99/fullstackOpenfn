
const AddContact = (props) => {
   const handleSubmit = props.handleSubmit
   const newName = props.newName
   const handleNewNameChanges = props.handleNewNameChanges
   const newNumber = props.newNumber
   const handleNewNumberChanges = props.handleNewNumberChanges

    return(
        <form onSubmit={handleSubmit}>
            <label>name:</label>  
            <input value={newName} onChange={handleNewNameChanges}/>
            <label>number:</label>
            <input value={newNumber} onChange={handleNewNumberChanges} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="000-00-000" required/>
            <button type="submit">add</button>
        </form>
    )
}

export default AddContact
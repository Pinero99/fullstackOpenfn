
const Contact = (props) => {
const ContactsToShow = props.arr
const handleDelete = props.handleDelete
return(
        <ul>
            {ContactsToShow.map(contact => 
                <li key={contact.name}>
                   <p>
                     {contact.name}: {contact.number} <button onClick={() =>handleDelete(contact.id)}>delete</button>
                   </p>
                </li>)
            }
        </ul>
    )
}

export default Contact

const Notificaiton = ({message}) => {

    const redStyle = {
        color: "red",
    background: "lightgray",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    }

    const greenStyle = {
        color: "green",
    background: "lightgray",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    }
    if (message === null) {

        return null
    }
    else{
        if (message.value)
        return(
            <div style={redStyle}>
                {message.message}
            </div>
        )
        if(!message.value){
            return(
                <div style={greenStyle}>
                    {message.message}
                </div>
            )
        }
    }
}


export default Notificaiton
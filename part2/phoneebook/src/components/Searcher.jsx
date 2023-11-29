
const Searcher = (props) => {
    const word= props.word
    const handleShowWords = props.handleShowWords
    return(
        <input value={word} onChange={handleShowWords}/>
    )
}

export default Searcher
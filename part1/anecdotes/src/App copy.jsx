import { useState } from 'react'

/* const Vote = () => {
  const [vote, setVote] = useState(0)

  const newVote = setVote(vote + 1)
	return(
    <div>
      <p>has {vote} votes</p>
    	<button onClick={newVote}>vote</button>
    </div>
  )

} */

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  // clickhandler random anrcdote
  const getRandomNumber = (min, max) => {
    min = Math.ceil(0);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min + 1) + min);
    
  }
  
  const newSelection = () =>{
    const n = getRandomNumber()
    setSelected(n),
    
  }

  
  
  // votes:
  const votes = anecdotes.map(value => value= 0)
  const [vote, setVote] = useState(votes)
  
  /*const newVote = () => {
    let a = 0
    a++
    return(
    votes[vote] = a
  } */

  const  handleIncrementClick = () => {
    const nextVote = votes.map((value, index) =>{
			if(index) return value ++
      else return value
    })
    setVote(nextVote);
    console.log(vote)
  }

  return (
    <div>
      {anecdotes[selected]}
      {vote}
      <button onClick={()=>{handleIncrementClick()}}>votar</button>
      <button onClick={newSelection}>prueba</button>
    </div>
  )
}

export default App

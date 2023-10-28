import { useCallback, useState } from 'react'

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

  const votes = anecdotes.map(value =>value =0)
  const [voted, setVoted] = useState(votes)
  // clickhandler random anecdote

  //const finallClickHandler = (props) => {

  const getRandomNumber = (max) => {
   	max = Math.floor(7);
    	return Math.floor(Math.random() * (max + 1))
  }
  
  const definitivo =(validator) => {

 	 const index = getRandomNumber()

  	if(validator==='random')
    	{
    		setSelected(index)
  		}
      if(validator==='vote')
      	{
          const settingvotes = () => {
  					const nextVote = votes.map((value, i) =>{
							if(i === index){
        				return value= votes[index] +1
      				}
            	else
            	{
        				return value
      				}
						});
    				setVoted(nextVote);
    				console.log(nextVote);
  				};
          settingvotes(); 
      	}
	}


  return (
    <div>
      {anecdotes[selected]}
      {votes[voted]}
      <button onClick={()=>{definitivo('vote')}} name='vote'>votar</button>
      <button onClick={()=>{definitivo('random')}}  name='random'>prueba</button>
    </div>	
  )
}

export default App

import {useState} from 'react'

const Buttons = (props) => {

    const voted = props.voted;
    const setSelected = props.setSelected;
    const setVoted = props.setVoted;
    var sharingIndex = props.sharingIndex;

  const clickHandler =(validator) => {

    if(validator === 'random')
    	{
        const getRandomNumber = (max) => {
          max = Math.floor(7);
         return Math.floor(Math.random() * (max + 1))
       };
    		setSelected(getRandomNumber)
  		}
      if(validator === 'vote')
      	{
          const settingvotes = () => {
  					const nextVote = voted.map((value, i) =>{
							if(i === sharingIndex){
        				return( value +=1)
      				}
            	else
            	{
        				return value
      				}
						});
    				setVoted(nextVote);
    				//console.log(nextVote)
  				};
          settingvotes(); 
      	}     
	}
  return(
    <div>
        <button onClick={()=>{clickHandler('vote')}} name='vote'>vote</button>
        <button onClick={()=>{clickHandler('random')}}  name='random'>next anecdote</button>
    </div>
  )
}
const Display =(props) => {
  return(
    <>
      {props.arr1}
      <p>has {props.arr2} votes</p>
    </>
  )
}
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

  const votes = anecdotes.map(value =>value =0) // zero-filled array.

  const [voted, setVoted] = useState(votes) 

  var sharingIndex = selected

  const maxIndex = voted.findIndex((element) => element === Math.max(...voted))

  return (
    <div>
        <h2>Anecdote of the Day</h2>
        <Display
           arr1={anecdotes[selected]}
           arr2={voted[sharingIndex]} 
        />
        <Buttons 
           setSelected={setSelected}
           setVoted={setVoted} 
           voted={voted} 
           sharingIndex={sharingIndex}
        />
        <h2> anecdote with most votes</h2>
        <Display
           arr1={anecdotes[maxIndex]}
           arr2={voted[maxIndex]} 
        />
    </div>	
  )
}

export default App

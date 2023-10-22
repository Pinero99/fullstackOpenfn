import { useState } from 'react'

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = (props) => {
	return(
    <button onClick={props.clickHandler}>{props.text}</button>
  )
}

const Buttons = (props) => {

  return(
    <div>
      <Button clickHandler={props.settingGood} text='Good'/>
      <Button clickHandler={props.settingNeutral} text='neutral'/>
      <Button clickHandler={props.settingBad} text='bad'/>
    </div>
  )
}

const StatictisLine = (props) => {
  return(
    <p>{props.display}{props.simbol}</p>
  )
}
const Statictis = (props) =>{

	const all= (props.good + props.neutral + props.bad)
  const average = (props.good + (props.bad * (-1))) / all
	const  percent = (props.good / all) *100 
	console.log(average, percent)

  if (all) {

  	return(
    	<table>

        <tr>
          <td>Good</td>
          <td><StatictisLine display={props.good}/></td>
        </tr>

        <tr>
          <td>Neutral</td>
          <td><StatictisLine display={props.neutral}/></td>
				</tr>

        <tr>
          <td>Bad</td>
          <td><StatictisLine display={props.bad}/></td>
        </tr>

        <tr>
          <td>All</td>
          <td><StatictisLine display={all}/></td>
        </tr>

        <tr>
          <td>Average</td>
          <td><StatictisLine display={average}/></td>
        </tr>

        <tr>
          <td>Positives</td>
          <td><StatictisLine display={percent} simbol={'%'}/></td>
        </tr>

   	 </table>
  	)
	}
  	else {return(<p>no feedback given</p>)}
}

function App() {
	// save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const settingGood = () => {
    const newGood =() => setGood(good + 1)
    newGood()
  }
	
  const settingNeutral = ()  => {
		const newNeutral = () => setNeutral(neutral + 1)
    newNeutral()
  }

	const settingBad = () => {
    const newBad = () => setBad(bad + 1)
    newBad()
  }

  return (
    <>
      <Header text='Give feedback'/>
      
      <Buttons 
      	settingGood={settingGood}
      	settingNeutral={settingNeutral}
        settingBad={settingBad}
      />
      
      <Header text='Statistics'/>

      <Statictis 
      	good={good}
      	neutral={neutral}
      	bad={bad}
      />
    </>
  )
}

export default App

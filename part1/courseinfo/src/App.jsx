

  const Header= (props) => {
    
    return(
      <>
      	<h1>{props.course}</h1>
			</>
    )
  }

  const Part= (props) =>{

		return(
      <>
      	<p>{props.part}</p>
        <p>{props.exercise}</p>
      </>
    )
  }

  const Content= () => {

    const part1 = 'Fundamentals of React'
    const part2= 'Using props to pass data'
    const part3= 'state of a component'
    const exercise1= 10
    const exercise2=7
    const exercise3=14

    return(
      <>
    	  <Part part={part1} exercise={exercise1}/>
    	  <Part part={part2} exercise={exercise2}/>
     	  <Part part={part3} exercise={exercise3}/>
        <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
      </>
    )
  }

  const Total= (props) =>{
    return(
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    )
  }

  const App= () =>{
    const course='Half Stack application developement'
  	return (
    	
      <div>

        <Header course={course}/>
        <Content/>
        
      </div>
    
  )
}

export default App

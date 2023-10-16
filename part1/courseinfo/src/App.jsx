

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

  const Content= (props) => {

    return(
      <div>
    	  <Part 
        	part={props.part1} 
          exercise={props.exercise1}
        />
    	  <Part 
        	part={props.part2} 
          exercise={props.exercise2}
        />
     	  <Part 
        	part={props.part3} 
          exercise={props.exercise3}
        />
      </div>
    )
  }

  const Total= (props) =>{
    return(
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    )
  }

  const App= () =>{
    const course='Half Stack application developement'
		const part1 ='Fundamentals of Reacts'
    const part2 ='Using props to pass data'
    const part3 ='state of component'
    const exercise1 = 10
    const exercise2 = 7
    const exercise3 = 14
  	return (
    	
      <div>

        <Header course={course}/>
        <Content 
        	part1={part1} 
        	part2={part2}
        	part3={part3} 
        	exercise1={exercise1} 
        	exercise2={exercise2} 
        	exercise3={exercise3}
        />

        <Total 
        	exercise1={exercise1} 
        	exercise2={exercise2} 
        	exercise3={exercise3}
        />
        
      </div>
    
  )
}

export default App



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
      	<p>{props.part.name}</p>
        <p>{props.part.exercise}</p>
      </>
    )
  }

  const Content= (props) => {

    return(
      <div>
    	  <Part 
        	part={props.part1} 
        />
    	  <Part 
        	part={props.part2} 
        />
     	  <Part 
        	part={props.part3} 
        />
      </div>
    )
  }

  const Total= (props) =>{
    return(
      <p>Number of exercises {props.part1.exercise + props.part2.exercise + props.part3.exercise}</p>
    )
  }

  const App= () =>{

    const course='Half Stack application developement'
		
    const part1= {
       name:'Fundamentals of Reacts',
       exercise:10
  	}

    const part2={
      name:'Using props to pass data',
      exercise: 7
    }

    const part3={
      name:'state of component',
    	exercise: 14
    }

  	return (
    	
      <div>

        <Header course={course}/>
        <Content 
        	part1={part1}
        	part2={part2}
        	part3={part3} 
        	
        />

        <Total 
        	part1={part1} 
        	part2={part2} 
        	part3={part3}
        />
        
      </div>
    
  )
}

export default App

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
      	<p >{props.part.name}</p>
        <p>{props.part.exercise}</p>
      </>
    )
  }
  const Content= (props) => { 
    return(  
      <div>
    	  <Part part={props.part[0]}/>
        <Part part={props.part[1]}/>
        <Part part={props.part[2]}/>
      </div> 
    )
  }
  const Total= (props) =>{
    return(
      <p>Number of exercises {props.part[0].exercise + props.part[1].exercise + props.part[2].exercise}</p>
    )
  }
  const App= () =>{
    const course={
      name:'Half Stack application developement',
      part:[
        {
          name:'Fundamentals of Reacts',
        exercise:10
        },
        {
        name:'Using props to pass data',
        exercise: 7
        },
        {
        name:'state of component',
        exercise: 14
        },
      ]
    }
  	return (
      <div>
        <Header course={course.name}/>
        <Content part={course.part}/>
        <Total part={course.part}/>
      </div>
  )
}
export default App

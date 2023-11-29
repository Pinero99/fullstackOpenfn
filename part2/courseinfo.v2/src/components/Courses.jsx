const Course = (props) => {
    const course = props.course
    const Header= (props) => { 
      return(
        <>
          <h1>{props.title.name}</h1>
        </>
        )
    }
    const Part= (props) =>{
        return(
        <div>
            <p>{props.element.name} {props.element.exercises}</p>
        </div>
        )
    }
    const Content= (props) => { 
      const arr = props.part
      return(  
        <div>
            {arr.map( element => <Part key={element.id} element={element}/> )}
        </div> 
      )
    }
    const Total= (props) =>{
        const arr=props.part
        const total = arr.reduce((a, b, index) => a + b.exercises, 0)
        return(
            <p>Number of exercises {total}</p>
        )
    }
    return(
        <div>
            <Header title={course}/>
            <Content part={course.parts}/>
            <Total part={course.parts}/> 
        </div>
        
    )
}

export default Course
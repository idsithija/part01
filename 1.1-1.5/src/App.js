const Header = (props) => {
  console.log(props)
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content  = (props) => {
  const part = props.parts.map(value => value)

  return(
    <>
      <Part part={part[0].name} exercises={part[0].exercises} />
      <Part part={part[1].name} exercises={part[1].exercises} />
      <Part part={part[2].name} exercises={part[2].exercises} />
    </>
  )
}

const Total = (props) => {
  const part = props.parts.map(value => value)

  return(
    <>
    <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises} </p>
    </>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
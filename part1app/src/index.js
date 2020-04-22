import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/*const Header = (props) => {

    console.log(props)
    return(
    <div>
        <p>
           {props.course.name}
        </p>
    </div>
    )
}

const Content = (props) => {

    return(
        <div>
            
                <p>{props.parts[0].name} {props.parts[0].exercises}</p>
                <p>{props.parts[1].name} {props.parts[1].exercises}</p>
                <p>{props.parts[2].name} {props.parts[2].exercises}</p>

            
        </div>
        )
}

const Total = (props) => {

    return(
        <div>
            <p>
                Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
            </p>
        </div>
        )
}

const Part1 = (props) => {

    return (
        <div>
            <p>
                {props.parts[0].name} {props.parts[0].exercises}

            </p>


        </div>
    )
}

const Part2 = (props) => {

    return (
        <div>
            <p>
                
                {props.parts[1].name} {props.parts[1].exercises}
                

            </p>
            
        </div>
    )
}

const Part3 = (props) => {

    return (
        <div>
            <p>
        
                {props.parts[2].name} {props.parts[2].exercises}

            </p>

        
        </div>
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
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}*/

/*

const History = (allClicks, setAll) => {

    

    if (allClicks.length === 0) {
        return (
          <div>
            No Feedback Given
          </div>
        )
      } 

    
    
      //console.log (allClicks.good)
      //console.log (props.allClicks)
      //console.log ('value' , props.good)
    
    return (
        <div>
            <p>Good {allClicks.good}</p>
            <p>Neutral {allClicks.neutral}</p>
            <p>Bad {allClicks.bad}</p>
            
        </div>
        
    )
    
    
    
}*/


const Statistics = (props) => {
    if (props.allClicks.length === 0) {
        return (
          <div>
            No Feedback Given
          </div>
        )
      } 
    const totalFeedback = () => {

        return props.good + props.neutral + props.bad
    }

    const averageFeedback = () => {
        

        return (props.good + (props.neutral*0) -props.bad)/totalFeedback()
    }

    const positiveFeedback = () =>{

        return (props.good / totalFeedback() * 100)
    }



    return (
        <table>
            <tbody>
            <tr>
                <td>Good</td>
                <td>{props.good}</td>
            </tr>
            <tr>
                <td>Neutral</td>
                <td>{props.neutral}</td>
            </tr>
            <tr>
                <td>Bad</td>
                <td>{props.bad}</td>
            </tr>
            <tr>
                <td>All</td>
                <td>{totalFeedback()}</td>
            </tr>
            <tr>
                <td>Average</td>
                <td>{averageFeedback()}</td>
            </tr>
            <tr>
                <td>Positive</td>
                <td>{positiveFeedback()} %</td>
            </tr>
            </tbody>

        </table>
        
    )

    

}

  
const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )



  

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat(good))
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat(bad))
    setBad(bad + 1)
  }
  
  const handleNeutralClick = () => {
    setAll(allClicks.concat(neutral))
    setNeutral(neutral + 1)
  }

  return (
    <div>
        <h1>Give Feedback</h1>
        <Button onClick={handleGoodClick} text='Good' />
        <Button onClick={handleNeutralClick} text='Neutral' />
        <Button onClick={handleBadClick} text= 'Bad' />
        <h1>Statistics</h1>
        <Statistics  allClicks = {allClicks} good = {good} bad = {bad} neutral = {neutral} />
    
       
    </div>
    
  )
  
  }


ReactDOM.render(<App />, document.getElementById('root'))
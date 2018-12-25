import React from 'react'
import Task from './Task'
import './App.css'

class App extends React.Component {

  componentDidMount(){
    console.log("Something happened ...")
  }
  componentDidUpdate(){
    console.log("Something happened again ...")
  }
  render(){
    return (
      
      <div className="task">
        < Task />
      </div>
    )
  }
}

export default App;
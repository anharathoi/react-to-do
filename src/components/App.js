import React from 'react'
import TaskBoard from './TaskBoard'
import './App.css'

class App extends React.Component {
  render(){
    return (
      <div className="task">
        <h2>To Do List</h2>
        < TaskBoard />
      </div>
    )
  }
}

export default App;
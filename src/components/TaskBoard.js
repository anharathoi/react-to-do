import React from 'react';
import Task from './Task'
import './Task.css'

class TaskBoard extends React.Component {
  state = {todoCard: [] }
  handleSubmit = (e) => { e.preventDefault() }
  addTodoCard = (e) => {
    this.setState({
      todoCard: [...this.state.todoCard,[]]
    })
  }
  render(){
    let {todoCard} = this.state
    return(
      <div>
        <button onClick={this.addTodoCard}>Add todo card</button><br></br>
        <div className="todoBoard">
            {todoCard.map((val, i)=> {
              return (
                <div key={i}>
                  < Task />
                </div>
              )
            })}
        </div>
      </div>
    )
  }  
}

export default TaskBoard;
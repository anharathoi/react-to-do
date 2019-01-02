import React from 'react';
import Task from './Task'
import './Task.css'

class TaskBoard extends React.Component {
  state = {todoCard: [] }
  handleSubmit = (e) => { e.preventDefault() }
  addTodoCard = (card) => {
    this.setState({
      todoCard: [...this.state.todoCard, card]
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
                < Task 
                  key={i}
                  state={this.props.state}
                  taskItem={this.props.taskItem}
                  taskList={this.props.taskList}
                  deleteItem={this.props.deleteItem}
                />
              )
            })}
          {/* <p># TaskBoard for all task-lists</p> */}
          <div className="todoBoard">
            < Task 
              state={this.props.state}
              taskItem={this.props.taskItem}
              taskList={this.props.taskList}
              deleteItem={this.props.deleteItem}
            />
          </div>
        </div>
      </div>
    )
  }  
}

export default TaskBoard;
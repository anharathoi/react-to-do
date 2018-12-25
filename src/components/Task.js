import React from 'react'
import './Task.css'

class Task extends React.Component {

  state = { taskItem: '',taskList:[] }

  onInputChange = (e) => {
    this.setState({taskItem: e.target.value})
  }

  onFormSubmit = (e) => { 
    e.preventDefault()
    let items = this.state.taskList.concat(this.state.taskItem)
    e.target.reset()
    this.setState({taskList: items})
  }

  deleteItem = (index) => {
    let item =this.state.taskList
    this.setState({taskitem: item.splice(index,1)})
  }

  render(){
    return(
      <div>
        <div className="todoCard">
          <form onSubmit={this.onFormSubmit}>
            <label>Add Task</label>
            <input type='text' onChange={this.onInputChange}/>
          </form>
          <ul>
            {this.state.taskList.map((item, i) => {
              return (
                <div key={i}>
                  <li>{item} <button item={item} onClick={(e)=>{this.deleteItem(i)}}> Delete </button></li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Task;
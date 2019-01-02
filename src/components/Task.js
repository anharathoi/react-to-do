import React from 'react'
import './Task.css'

class Task extends React.Component {
  state = {taskItem: '',taskList:[] }
  taskItem = (item) => {
    this.setState({taskItem: item})
  }
  taskList = (item) => {
    let items = this.state.taskList.concat(item)
    this.setState({taskList: items})
  }
  deleteItem = (index) => {
    let item = this.state.taskList
    this.setState({taskitem: item.splice(index,1)})
  }
  onInputChange = (e) => {
    this.taskItem(e.target.value)
  }
  onFormSubmit = (e) => { 
    e.preventDefault()
    this.taskList(this.state.taskItem)
    e.target.reset()
  }

  render(){
    return(
        <div className="todoCard">
          <form onSubmit={this.onFormSubmit}>
            <input
            type='text'
            placeholder="add item"
            onChange={this.onInputChange}
            maxLength="100"/>
          </form>
          <table>
            <tbody>
            {this.state.taskList.map((item, i) => {
              return (
                <tr className="task-item" key={i}>
                  <th><input type="checkbox"/></th>
                  <th>{`${item}`}</th>  
                  <th>
                    <button
                      item={item}
                      onClick={(e)=>{this.deleteItem(i)}}>
                      remove
                    </button> 
                  </th>  
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
    )
  }
}

export default Task;

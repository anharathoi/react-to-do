import React from 'react'
import './Task.css'

class Task extends React.Component {
  state = {taskItem: '',taskList:[] }
  
  onInputChange = (e) => {
    this.props.taskItem(e.target.value)
  }

  onFormSubmit = (e) => { 
    e.preventDefault()
    this.props.taskList(this.props.state.taskItem)
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
            {this.props.state.taskList.map((item, i) => {
              return (
                <tr className="task-item" key={i}>
                  <th><input type="checkbox"/></th>
                  <th>{`${item}`}</th>  
                  <th>
                    <button
                      item={item}
                      onClick={(e)=>{this.props.deleteItem(i)}}>
                      remove
                    </button> 
                  </th>  
                </tr>
              )
            })}
            </tbody>
          </table>
          <ul>

          </ul>
        </div>
    )
  }
}

export default Task;

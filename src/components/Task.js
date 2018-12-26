import React from 'react'
import './Task.css'

class Task extends React.Component {

  onInputChange = (e) => {
    // console.log(e.target.value)
    this.props.taskItem(e.target.value)
  }

  onFormSubmit = (e) => { 
    e.preventDefault()
    this.props.taskList(this.props.state.taskItem)
    e.target.reset()
  }

  render(){
    return(
      <div>
        <div className="todoCard">
          <form onSubmit={this.onFormSubmit}>
            <input
            type='text'
            placeholder="add item"
            onChange={this.onInputChange}
            maxlength="100"/>
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
      </div>
    )
  }
}

export default Task;

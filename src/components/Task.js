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
            <label> <i className="icon ion-md-add"></i> </label>
            <input type='text' onChange={this.onInputChange}/>
          </form>
          <ul>
            {this.props.state.taskList.map((item, i) => {
              return (
                <div key={i}>
                  <li>{`${item} `}
                    <button
                      item={item}
                      onClick={(e)=>{this.props.deleteItem(i)}}>
                      <i className="icon ion-md-close"></i>
                    </button>
                  </li>
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
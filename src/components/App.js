import React from 'react'
import TaskBoard from './TaskBoard'
import './App.css'

class App extends React.Component {
  state = {taskItem: '',taskList:[] }

  accessItem = (item) => {
    this.setState({taskItem: item})
  }
  accessItemList = (item) => {
    let items = this.state.taskList.concat(item)
    this.setState({taskList: items})
  }
  deleteItem = (index) => {
    let item = this.state.taskList
    this.setState({taskitem: item.splice(index,1)})
  }

  render(){
    return (
      <div className="task">
        <h2>To Do List</h2>
        < TaskBoard
          state={this.state}
          taskItem={this.accessItem}
          taskList={this.accessItemList}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default App;
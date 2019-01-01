import React from 'react';
import Task from './Task'

const TaskBoard = (props) => {
  // console.log(props)
  return(
    <div>
      <div>
        <button>Add todo card</button>
      </div>
      <p>#TaskBoard for all task-lists</p>
      <div>
        < Task 
          state={props.state}
          taskItem={props.taskItem}
          taskList={props.taskList}
          deleteItem={props.deleteItem}
        />
      </div>
    </div>
  )
}

export default TaskBoard;
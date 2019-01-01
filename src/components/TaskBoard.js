import React from 'react';
import Task from './Task'

const TaskBoard = (props) => {
  // console.log(props)
  return(
    <div>
      #TaskBoard for all task-lists
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
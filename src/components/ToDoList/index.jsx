import React, { Children, useId } from 'react'
import style from "./index.module.scss";
import ToDoItem from '../ToDoItem';

const ToDoList = ({tasks_array, children, setDone, deleteTask}) => {
  return (
    <ul>
        {tasks_array.map(({task_text, done, id}, i) => 
            <ToDoItem key={i} id={i} task_text={task_text} done={done} setDone={setDone} deleteTask={deleteTask}/>
        )}
        {children}
    </ul>
  )
}

export default ToDoList;
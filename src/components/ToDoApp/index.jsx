import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import ToDoList from "../ToDoList";
import ToDoAdd from "../ToDoAdd";

const ToDoApp = () => {
  const [all_tasks, set_all_tasks] = useState([
    { task_text: "1", done: false },
    { task_text: "2", done: false },
    { task_text: "3", done: false },
  ]);
  const addTask = (task) => {
    set_all_tasks((prev) => {
      return [...prev, task];
    });
  };
  const setDone = (id) => {
    set_all_tasks((prev) => {
      return prev.map((el, el_id) =>
        id === el_id ? { ...el, done: !el.done } : el
      );
    });
  };
  const deleteTask = (id) => {

    set_all_tasks((prev) => {
        const prev_copy = [...prev]
        prev_copy.splice(id, 1)
        return prev_copy;
    });
  }

  console.log(all_tasks)
  

  return (
    <div className={style.main_cont}>
      <ToDoList tasks_array={all_tasks} setDone={setDone} deleteTask={deleteTask}>
        <ToDoAdd addTask={addTask} />
      </ToDoList>
    </div>
  );
};

export default ToDoApp;

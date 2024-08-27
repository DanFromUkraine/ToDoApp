import React, { useEffect, useId, useRef } from "react";
import style from "./index.module.scss";
import ToDoDelete from "../ToDoDelete";

const ToDoItem = ({ task_text, id, done, setDone, deleteTask }) => {
  const onCLick = (e) => {
    setDone(id);
  };

  const onDeleteBtn = () => {
    deleteTask(id);
  };

  return (
    <li
      id={id}
      className={`${done ? style.crossed : ""} ${style.item}`}
    >
      {" "}
      <span  onClick={onCLick}>{task_text}</span> <ToDoDelete deleteFunc={onDeleteBtn} />
    </li>
  );
};

export default ToDoItem;

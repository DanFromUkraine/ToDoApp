import React, { useState } from "react";
import style from "./index.module.scss";

const AddBtn = ({ onClick }) => (
  <li onClick={onClick} className={style.attention}>
    Додати
  </li>
);

const InputBtn = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="task_text" />
      <button type="sumbit">Підтвердити </button>
    </form>
  );
};

const ToDoAdd = ({ addTask }) => {
  const [isAddBtn, setIsAddBtn] = useState(true);
  const AddBtnHandler = () => {
    setIsAddBtn(false);
  };
  
  const InputBtnHandler = (e) => {
    e.preventDefault();
    const task_text = e.target.elements.task_text.value;
    addTask({ task_text, done: false, });
  };

  return isAddBtn ? (
    <AddBtn onClick={AddBtnHandler} />
  ) : (
    <InputBtn onSubmit={InputBtnHandler} />
  );
};

export default ToDoAdd;

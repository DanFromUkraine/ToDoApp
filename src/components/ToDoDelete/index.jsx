import { useRef } from "react";
import style from "./index.module.scss"

const ToDoDelete = ({id, deleteFunc}) => {
    const clickHandler = () => {
            deleteFunc(id);        
    }
  return (
    <div className={style.img_wrapper} onClick={clickHandler}><img src="https://cdn-icons-png.flaticon.com/512/9068/9068678.png" alt="Видалити" /></div>
  )
}

export default ToDoDelete;
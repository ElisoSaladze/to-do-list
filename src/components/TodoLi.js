import React from 'react'
import { useState } from 'react'
import check from '../assets/DEFAULT.svg'
import checked from '../assets/CHECKED.svg'
import trash1 from '../assets/DEFAULT (1).svg'
import '../styles/TodoLi.css'

const TodoLi = ({text, todos, setTodos, todo}) => {
    const [click, setClick] = useState(true);
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id))
    }
    const completeHandler = () => {
      setTodos(todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item, completed: !item.completed
          }
        };
        return item;
      }));
      setClick(!click);
    };
  return (
    <div className='todo-li'>
        <div className='todo-li-child'>
          <button onClick={completeHandler} className="check-btn">
          {click ? <img src={check} alt="default" /> : <img src={checked} alt="checked" />}
          </button>
          <li>{text}</li>  
        </div>
        <button onClick={deleteHandler} className='click-btn'>
            <img src={trash1} alt="trash" />
        </button>
    </div>
  )
}

export default TodoLi
